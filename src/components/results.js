import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function DiagnosisResults() {
  const location = useLocation();

  const [patientData, setPatientData] = useState(null);
  const [doctorSuggestion, setDoctorSuggestion] = useState("Provide specific doctor's suggestion here...");

  useEffect(() => {
    if (location.state) {
      setPatientData(location.state);
    }
  }, [location]);

  // Function to generate PDF and send it to the server
  const sendPDFAndEmail = async () => {
    if (!patientData) return;

    const content = document.createElement('div');

    // Create HTML content for PDF
    const htmlContent = `
      <div id="diagnosis-result" class="diagnosis-result">
        <h2>Diagnosis Result</h2>
        <p><strong>Patient Name:</strong> ${patientData.patientName}</p>
        <p><strong>Age:</strong> ${patientData.age}</p>
        <p><strong>Date:</strong> ${patientData.date}</p>
        <p><strong>Email:</strong> ${patientData.email}</p>
        <p><strong>Diagnosis:</strong></p>
        <table>
          <thead>
            <tr>
              <th>Case</th>
              ${Object.keys(patientData.diagnosis).map(diagnosisType => `<th>${diagnosisType}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${transposedProbabilities.map((column, i) => `
              <tr key=${i}>
                <td>${(i + 1).toString().padStart(2)}</td>
                ${column.map((value, j) => `
                  <td key=${i}-${j}>${value}</td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
        <p><strong>Accuracy:</strong> ${patientData.accuracy}</p>
        
        <div style="page-break-before: always;">
          ${patientData.images && (
            `<div>
              <p><strong>Segmentation Result:</strong></p>
              <img src="data:image/png;base64,${patientData.images}" alt="MRI Image" />
            </div>`
          )}
        </div>
        <div style="page-break-before: always;">
          <h3>Doctor's Suggestion:</h3>
          <p>${doctorSuggestion}</p>
        </div>
      </div>
    `;

    // Set innerHTML of content div
    content.innerHTML = htmlContent;

    // Generate PDF using html2pdf.js
    const pdfBlob = await html2pdf().from(content).outputPdf('blob');

    // Create FormData object to send PDF and email as files
    const formData = new FormData();
    formData.append('pdf', pdfBlob, 'diagnosis_result.pdf');
    formData.append('email', patientData.email);

    try {
      const response = await fetch('http://localhost:5000/send_to_patient', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Email response:', data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  // Function to update doctor's suggestion
  const updateDoctorSuggestion = (event) => {
    setDoctorSuggestion(event.target.value);
  };

  if (!patientData) return null;

  const diagnoses = Object.keys(patientData.diagnosis);
  const probabilities = Object.values(patientData.diagnosis);
  const maxLength = Math.max(...probabilities.map(row => row.length));
  const columnWidths = diagnoses.map((_, i) => Math.max(...probabilities.map(row => row[i].length)));

  // Transpose probabilities array
  const transposedProbabilities = Array.from({ length: maxLength }, (_, i) => (
    probabilities.map(row => row[i] || '').map(probability => probability)
  ));

  return (
    <div className="diagnosis-result">
      <h2>Diagnosis Result</h2>
      <p><strong>Patient Name:</strong> {patientData.patientName}</p>
      <p><strong>Age:</strong> {patientData.age}</p>
      <p><strong>Date:</strong> {patientData.date}</p>
      <p><strong>Email:</strong> {patientData.email}</p>
      <p><strong>Diagnosis:</strong></p>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            {diagnoses.map((diagnosis, i) => (
              <th key={diagnosis} style={{ minWidth: `${columnWidths[i] + 2}ch` }}>
                {diagnosis}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transposedProbabilities.map((column, i) => (
            <tr key={i}>
              <td>{(i + 1).toString().padStart(2)}</td>
              {column.map((value, j) => (
                <td key={`${i}-${j}`} style={{ minWidth: `${columnWidths[j] + 2}ch` }}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p><strong>Accuracy:</strong> {patientData.accuracy}</p>
      {/* Display images */}
      <div>
        {patientData.images && (
          <div>
            <p><strong>Segmentation Result:</strong></p>
            <img src={`data:image/png;base64,${patientData.images}`} alt="MRI Image" />
          </div>
        )}
      </div>

      {/* Text field for doctor's suggestion */}
      <div>
        <label htmlFor="doctor-suggestion">Doctor's Suggestion:</label>
        <textarea
          id="doctor-suggestion"
          value={doctorSuggestion}
          onChange={updateDoctorSuggestion}
          rows="4"
          cols="50"
        />
      </div>

      {/* Button to generate PDF and send email */}
      <button onClick={sendPDFAndEmail}>Generate PDF and Send Email</button>
    </div>
  );
}

export default DiagnosisResults;
