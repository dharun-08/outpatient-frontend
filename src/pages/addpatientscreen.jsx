import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPatientScreen = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [age,setAge] = useState(null);
  const [gender,setGender] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [parentSpouse,setParentSpouse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/addPatient",{
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          age,
          gender,
          phoneNumber,
          parentSpouse
        })
      });
      const result = await response.text();
      if(result === "success") {
        alert("Patient Added Successfully");
      }else{
        alert(result);
      }
    } catch (error) {
      console.log(error);
      alert('Sign Up Failed. Try Again!');
    }
  }

  const handleClear = () => {
    setFirstName("")
    setLastName("")
    setAge("")
    setGender("")
    setPhoneNumber("")
    setParentSpouse("")
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Form Container */}
      <div className="container h-[80%] w-[30%] gap-y-4 bg-gray-300 shadow-lg flex flex-col justify-center items-center rounded-xl p-6">
        <h1 className="font-bold text-2xl text-black">ADD PATIENT SCREEN</h1>
        <form action="" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-y-5 w-full items-center">
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="number"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            className="p-3 text-center rounded-md w-full"
            placeholder="Enter Father/Spouse Name"
            value={parentSpouse}
            onChange={(e) => setParentSpouse(e.target.value)}
          />
          <div className="flex justify-center gap-x-4">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md cursor-pointer"
            />
            <input
              type="button"
              onClick={handleClear}
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
