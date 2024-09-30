"use client"
import React from 'react';

const AppointmentForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        // const formElement = document.querySelector("form") as HTMLFormElement;
        const formElement = e.currentTarget;

        e.preventDefault()
        const formData = new FormData(formElement);  
       
        fetch("https://script.google.com/macros/s/AKfycby7JQXWAnKLtNgxeVTj_qK0AjY--fpdoHIAuS2PuVdYCDhKIDxJwCW2vDPWY6eCm91I/exec",
          {
            method: "POST",
            mode: 'no-cors',
            body: formData
          }
          
        )
   
        .then(() => {
            alert("Your Appointment is Booked!");
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
        });
    }

    return (
        <>
            <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl mt-4">
                <h2 className="text-third-500 text-center text-xl md:text-3xl font-semibold leading-10 mb-11">Book Your Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="Name" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-sm md:text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4 mb-10" placeholder="Name*" required/>
                    
                    <input type="text" name="Phone" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-sm md:text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4 mb-10" placeholder="Phone Number*" required/>
                    
                    <div className="flex flex-col lg:flex-row lg:space-x-4 mb-10">
                        <select
                            name="Location"
                            className="w-full lg:w-50% h-12 text-gray-600 bg-transparent text-sm md:text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4"
                            required
                        >
                            <option value="">Select City*</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-4 mb-10">
                        <select
                            name="Test"
                            className="w-full lg:w-50% h-12 text-gray-600 bg-transparent text-sm md:text-lg font-normal leading-7 rounded-full border border-gray-300 focus:outline-none pl-4"
                            required
                        >
                            <option value="">Select Test*</option>
                            <option value="Mri">Mri</option>
                            <option value="32 Slice CT Scan">32 Slice CT Scan</option>
                            <option value="CT Guided Interventional">CT Guided Interventional</option>
                            <option value="Pathology Lab(Blood Test)">Pathology Lab(Blood Test)</option>
                            <option value="USG & color Doppler">USG & color Doppler</option>
                            <option value="X-ray & X-Ray Procudeures">X-ray & X-Ray Procudeures</option>
                            <option value="ECG & Stress Test">ECG & Stress Test</option>
                            <option value="2D Echo">2D Echo</option>
                        </select>
                    </div>
                    {/* <input type="text" name="Email" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email"/> */}
                    <button className="w-full h-12 text-white text-sm md:text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-third-600 bg-third-500 shadow-sm">Book Your Appointment</button>
                </form>
            </div>
        </>
    )
}

export default AppointmentForm;