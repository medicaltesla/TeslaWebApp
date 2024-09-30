'use client'
import React, { useEffect, useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { getCountries } from 'libphonenumber-js';

const PopUpForm = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const countryData = [
        { "name": "IND", "code": "+91" },
        { "name": "US", "code": "+1" },
        { "name": "UK", "code": "+44" },
        { "name": "AUS", "code": "+61" },
        { "name": "FRA", "code": "+33" },
        { "name": "GER", "code": "+49" },
        { "name": "JAP", "code": "+81" },
        { "name": "CHI", "code": "+86" },
        { "name": "BRAZ", "code": "+55" },
        { "name": "SA", "code": "+27" }
    ];

    const countryOptions = countryData.map((country) => ({
        value: country.code,
        label: `${country.name} (${country.code})`
    }));

    const closeModal = () => {
      setIsOpen(false);
      localStorage.setItem('popupClosed', 'true');
    };
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;
  
      if (scrollPercentage > 30 && !isOpen && !localStorage.getItem('popupClosed')) {
        setIsOpen(true);
      }
    };
  
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
        // const formElement = document.querySelector("form") as HTMLFormElement;
        const formElement = e.currentTarget;
        e.preventDefault()
        const formData = new FormData(formElement);  
        formData.append('Name', name);
        formData.append('Phone', `${selectedCountryCode} ${phoneNumber}`);
  
        fetch("https://script.google.com/macros/s/AKfycbwrSJLvNQBOzb5yNvR1KU54d6WqzensgtdHWn990-z-tlBqGJ1bOObJunvuivlLb3hL/exec",
          {
            method: "POST",
            mode: 'no-cors',
            body: formData
          } 
        )

        .then(() => {
            closeModal();
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
        });
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="relative bg-white rounded-lg shadow-xl max-w-sm mx-4 sm:mx-auto w-full">
                        {/* Close Icon */}
                        <div className="absolute top-3 right-3">
                            <button onClick={closeModal} className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Close</span>
                                <IoIosClose className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl md:text-2xl font-semibold leading-6 text-gray-900 mb-2" id="modal-title">
                                Need help in booking a lab test?
                            </h3>
                            <p className="text-gray-500 mb-4">Share your details, we will call you</p>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name*"
                                        required
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <select
                                        name="CountryCode"
                                        value={selectedCountryCode}
                                        onChange={(e) => setSelectedCountryCode(e.target.value)}
                                        className="border border-gray-300 rounded-l-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        {countryOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        name="Phone"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Phone*"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md bg-secondary-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PopUpForm;