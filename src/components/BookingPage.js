import React from "react";
import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  const { newAt, updateFunc } = props;

  const handleUpdateFunc = (formData) => {
    // Additional logic, if needed, before calling updateFunc
    updateFunc(formData);
  };

  return <BookingForm newAt={newAt} updateFunc={handleUpdateFunc} />;
}
