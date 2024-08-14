import React from "react";
import ExistingPatient from "./ExistingPatient";

export default function ExistingPatientPage(props) {
  const { newAt, updateFunc } = props;

  const handleUpdateFunc = (formData) => {
    // Additional logic, if needed, before calling updateFunc
    updateFunc(formData);
  };

  return <ExistingPatient newAt={newAt} updateFunc={handleUpdateFunc} />;
}
