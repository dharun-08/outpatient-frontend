import React from "react";
import { useNavigate } from "react-router-dom";

const AddPatientScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Form Container */}
      <div className="container h-[80%] w-[30%] gap-y-4 bg-gray-300 shadow-lg flex flex-col justify-center items-center rounded-xl p-6">
        <h1 className="font-bold text-2xl text-black">ADD PATIENT SCREEN</h1>
        <form action="" className="flex flex-col gap-y-5 w-full items-center">
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter First Name"
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Last Name"
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Age"
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Phone Number"
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Father/Spouse Name"
          />
          <div className="flex justify-center gap-x-4">
            <input
              type="button"
              value="Submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
            />
            <input
              type="button"
              value="Clear"
              className="bg-red-500 text-white px-6 py-2 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>

      {/* Back Button - Outside Container */}
      <button className="bg-red-500 text-white px-6 py-2 rounded-md mt-6" onClick={()=> navigate('/home')}>
        Back
      </button>
    </div>
  );
};

export default AddPatientScreen;
