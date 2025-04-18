import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
            <div className='container h-[50%] w-[30%] gap-y-4 bg-gray-300 shadow-lg flex flex-col justify-center items-center rounded-xl'>
                <button className='p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md' onClick={() => navigate('/addpatient')}>
                    Add Patient
                </button>
                <button className='p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md '>
                    Book Appointment
                </button>
                <button className='p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md '>
                    View Appointments
                </button>
                <button className='p-3 text-lg font-bold text-white hover:bg-blue-700 hover:shadow-md bg-blue-500 rounded-md '>
                    Payment
                </button>
            </div>
        </div>
  )
}

export default Home