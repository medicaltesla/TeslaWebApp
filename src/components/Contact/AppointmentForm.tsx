"use client"
import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        // const formElement = document.querySelector("form") as HTMLFormElement;
        const formElement = e.currentTarget;
        e.preventDefault()
        const formData = new FormData(formElement);  

        fetch("https://script.google.com/macros/s/AKfycbxSwGZlnXyckX5MDuG6f_EMKSc0bVvAUceiMxnF9xQ6I5B2OTf1w1m0CDFjSpPyyTq3/exec",
          {
            method: "POST",
            mode: 'no-cors',
            body: formData
          }
          
        )
   
        .then(() => {
            alert("Your Appointment is Submitted!");
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
        });
    }

    return (
        <>
            <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl mt-4">
                <h2 className="text-third-500 text-center text-4xl font-semibold leading-10 mb-11">Book Your Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="Name" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4 mb-10" placeholder="Name" required/>
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        <input type="text" name="Phone" className="w-50% h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4 mb-10" placeholder="Phone" required/>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            name="Date"
                            className="w-50% h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4 mb-10"
                            placeholderText="dd-mm-yyyy"
                            required
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 mb-10">
                        <select
                            name="Location"
                            className="w-full lg:w-50% h-12 text-gray-600 bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4"
                            required
                            
                        >
                            <option value="">Location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </div>
                    {/* <input type="text" name="Email" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email"/> */}
                    <textarea
                        className="w-full text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4 mb-10"
                        placeholder="Message"
                        name="Message"
                        required
                    />
                    <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-third-600 bg-third-500 shadow-sm">Book Your Appointment</button>
                </form>
            </div>
        </>
    )
}

export default AppointmentForm;