import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ExistingPatient() {
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mriImages, setMRIImages] = useState([]);
  const navigate = useNavigate();


  async function submitForm(event) {
    event.preventDefault();

    if (!date || !phoneNumber || mriImages.length === 0) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("date", date);
    formData.append("phoneNumber", phoneNumber);
    mriImages.forEach((image, index) => {
      formData.append(`MRI_${index + 1}`, image);
    });

    try {
        const response = await fetch("http://localhost:5000/existing_patient", {
          method: "POST",
          body: formData,
        });
        const responseData = await response.json();
        console.log("Diagnosis response:", responseData);
  
        navigate("/result", {
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
        console.error("Error Fetching patient:", error);
      }

    console.log("Form Data:", {
      date,
      phoneNumber,
      mriImages
    });

    
    // Clear form fields after submission (you can remove this if not needed)
    setDate("");
    setPhoneNumber("");
    setMRIImages([]);
  }

  function handleMRIImageChange(e) {
    const files = Array.from(e.target.files);
    setMRIImages(files);
  }

  return (
    <div className="bookForm">
      <form
        style={{ display: "grid", gap: "20px", width: "50%" }}
        onSubmit={submitForm}
        encType="multipart/form-data"
      >
        {/* Form inputs */}
        {/* <label htmlFor="patient-name">Patient Name</label>
        <input type="text" id="patient-name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required /> */}

        <label htmlFor="res-date">Date</label>
        <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required />

        {/* <label htmlFor="age">Age</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required /> */}

        <label htmlFor="phone-number">Phone Number</label>
        <input type="tel" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

        {/* <label htmlFor="email">Email ID</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> */}

        <label htmlFor="mri-images">MRI Scan Images</label>
        <input type="file" id="mri-images" accept="image/*" onChange={handleMRIImageChange} required multiple />

        {/* Display selected file names */}
        {mriImages.length > 0 && (
          <div>
            <p>Selected Files:</p>
            {mriImages.map((image, index) => (
              <p key={index}>{image.name}</p>
            ))}
          </div>
        )}

        <input aria-label="submit button" type="submit" value="Diagnose" />
      </form>
    </div>
  );
}
