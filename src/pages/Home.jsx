import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Title section */}
      <h1 className="text-3xl font-bold mb-4">MENU</h1>

      {/* Buttons container */}
      <div className="container h-[50%] w-[30%] gap-y-4 mt-6 bg-gray-300 shadow-lg flex flex-col justify-center items-center rounded-xl p-6">
        <button
          className="p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md w-full"
          onClick={() => navigate("/addpatient")}
        >
          Add Patient
        </button>
        <button className="p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md w-full">
          Book Appointment
        </button>
        <button className="p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md w-full">
          View Appointments
        </button>
        <button className="p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md w-full">
          Payment
        </button>
      </div>
    </div>
  );
};

export default Home;
