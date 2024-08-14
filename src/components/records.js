import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function Records() {
  const [records, setRecords] = useState([]);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState(null);
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_patient_list");
      const data = await response.json();
      setRecords(data.patients);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const handleViewMore = async (phoneNumber) => {
    try {
      const response = await fetch(`http://localhost:5000/get_patient_records?phone_number=${phoneNumber}`);
      const data = await response.json();
      setDates(data.unique_dates);
      setSelectedPhoneNumber(phoneNumber);
    } catch (error) {
      console.error("Error fetching patient records:", error);
    }
  };

  const handleDateSelection = async (date) => {
    try {
      const response = await fetch(`http://localhost:5000/process_selected_date`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone_number: selectedPhoneNumber, selected_date: new Date(date).toLocaleDateString() })
      });
      const responseData = await response.json();
      console.log(responseData);
      navigate("/results", {
        state: {
          patientName : responseData.patientName,
          age : responseData.age,
          date : responseData.date,
          diagnosis: responseData.result_proba,
          accuracy: 0.93,
          email : responseData.email,
          images: responseData.plt_image,
        },
      });
    } catch (error) {
      console.error("Error processing selected date:", error);
    }
  };

  return (
    <div className="records-content">
      <h2>Medical Records</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Phone Number</th>
            <th>Records</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{record.patient_name}</td>
              <td>{record.age}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.phone_number}</td>
              <td>
                <div className="record-actions">
                  <button onClick={() => handleViewMore(record.phone_number)}>View More</button>
                  {selectedPhoneNumber === record.phone_number && (
                    <div className="date-selection">
                      <h3 style={{ fontSize: '14px' }}>Select Date</h3>
                      <div className="date-buttons">
                        {dates.map((date, index) => (
                          <button key={index} onClick={() => handleDateSelection(date)}>{new Date(date).toLocaleDateString()}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Embedded CSS */}
      <style>{`
        .record-actions {
          position: relative;
        }

        .date-selection {
          position: absolute;
          top: 0;
          left: calc(100% + 10px);
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .date-buttons button {
          margin-right: 5px;
          margin-bottom: 5px;
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }

        .date-buttons button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Records;
