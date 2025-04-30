import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const [patientId, setPatientId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [payment, setPayment] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientId,
          firstName,
          payment,
          paymentStatus,
        }),
      });

      const result = await response.json();
      if (result && result.id) {
        alert("Payment Saved Successfully");
        setPatientId("");
        setFirstName("");
        setPayment("");
        setPaymentStatus("");
      } else {
        alert("Failed to save payment");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while saving payment");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Form Container */}
      <div className="container h-[80%] w-[30%] gap-y-4 bg-gray-300 shadow-lg flex flex-col justify-center items-center rounded-xl p-6">
        <h1 className="font-bold text-2xl text-black">PAYMENT FORM</h1>
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
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="text"
            placeholder="Enter Payment Amount"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="p-3 text-center rounded-md w-full"
            required
          />
          <input
            type="text"
            placeholder="Enter Payment Status (Y/N)"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value.toUpperCase())}
            maxLength={1}
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

      {/* Back Button */}
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-md mt-6"
        onClick={() => navigate("/home")}
      >
        Back
      </button>
    </div>
  );
};

export default PaymentScreen;
