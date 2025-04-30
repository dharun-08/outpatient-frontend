import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewAppointment = () => {
  const [patientId, setPatientId] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleFetchAppointments = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/viewAppointment/${patientId}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setAppointments(data);
      setError("");
      setSuccessMsg("");
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError("No appointment found or error fetching.");
      setAppointments([]);
    }
  };

  const handleCancelAppointment = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/viewAppointment/${patientId}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to cancel appointment");
      }
      const msg = await res.text();
      setAppointments([]);
      setSuccessMsg(msg);
      setError("");
    } catch (err) {
      console.error("Error cancelling appointment:", err);
      setError("Failed to cancel appointment.");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="container h-[80%] w-[40%] bg-white shadow-lg rounded-xl p-6 flex flex-col">
        {/* Header and Input */}
        <div className="flex flex-col items-start gap-4 mb-6">
          <h1 className="font-bold text-2xl text-black">View Appointment</h1>
          <input
            type="text"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex gap-4">
            <button
              onClick={handleFetchAppointments}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Search
            </button>
            <button
              onClick={handleCancelAppointment}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Cancel Appointment
            </button>
          </div>
        </div>

        {/* Display Messages */}
        {successMsg && <p className="text-green-600">{successMsg}</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Appointment Display Section */}
        <div className="flex-1 overflow-y-auto">
          {appointments.length > 0
            ? appointments.map((app, idx) => (
                <div
                  key={idx}
                  className="mb-4 p-4 border border-gray-200 rounded-lg shadow bg-gray-50"
                >
                  <p>
                    <strong>Patient Name:</strong> {app.firstName}
                  </p>
                  <p>
                    <strong>Diagnosis:</strong> {app.diagnosis}
                  </p>
                  <p>
                    <strong>Date:</strong> {app.appDate}
                  </p>
                  <p>
                    <strong>Time:</strong> {app.appTime}
                  </p>
                  <p>
                    <strong>Doctor:</strong> {app.docName}
                  </p>
                  <p>
                    <strong>Age:</strong> {app.age}
                  </p>
                  <p>
                    <strong>Gender:</strong> {app.gender}
                  </p>
                  <p>
                    <strong>Phone:</strong> {app.phoneNumber}
                  </p>
                </div>
              ))
            : !error && (
                <p className="text-gray-500">No appointment selected.</p>
              )}
        </div>

        <button
          className="bg-gray-600 text-white px-6 py-2 rounded-md mt-6"
          onClick={() => navigate("/home")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ViewAppointment;
