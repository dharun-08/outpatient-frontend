import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookAppointmentScreen = () => {
  const [patientId, setPatientId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  const getToday = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 2);
    return maxDate.toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/bookAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patientId,
            diagnosis,
            appDate: date,
            appTime: time,
            docName: doctorName,
          }),
        }
      );
      const result = await response.text();
      if (result === "success") {
        alert("Appointment Booked Successfully");
        setPatientId("");
        setDiagnosis("");
        setDate("");
        setTime("");
        setDoctorName("");
      } else {
        alert(result);
      }
    } catch (error) {
      console.log(error);
      alert("Appointment Booking Failed!");
      setPatientId("");
      setDiagnosis("");
      setDate("");
      setTime("");
      setDoctorName("");
    }
  };


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Form Container */}
      <div className="container h-[80%] w-[30%] gap-y-4 bg-gray-300 shadow-lg flex flex-col justify-center items-center rounded-xl p-6">
        <h1 className="font-bold text-2xl text-black">BOOK APPOINTMENT</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-5 w-full items-center"
        >
          <input
            type="text"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="text"
            placeholder="Enter Diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="date"
            value={date}
            min={getToday()}
            max={getMaxDate()}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="text"
            value={time}
            placeholder="Enter time in HH:MM:SS"
            onChange={(e) => setTime(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="text"
            placeholder="Enter Doctor Name"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
          />
        </form>
      </div>

      {/* Back Button - Outside Container */}
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-md mt-6"
        onClick={() => navigate("/home")}
      >
        Back
      </button>
    </div>
  );
};

export default BookAppointmentScreen;
