"use client"
import React,{useState, useEffect} from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import styles from "./footer.module.css"


const PhoneNumber = '+91 9175014994'; // Replace with your phone number

const CallButton = () => {

    const handleClick = () => {
        window.location.href = `tel:${PhoneNumber}`;
    };

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        // Function to check if the screen width is less than or equal to 768px (example for mobile view)
        const checkIfMobileView = () => {
            setIsMobileView(window.innerWidth <= 991); // Adjust breakpoint as needed
        };

        // Initial check on component mount
        checkIfMobileView();

        // Event listener for window resize
        window.addEventListener('resize', checkIfMobileView);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkIfMobileView);
        };
    }, []);

    return (
        <>
            {isMobileView &&
                <div className={`${styles.callnavbar} bottom-0 shadow w-full z-50 mt-20 fixed py-3 `}>
                    <div className="mx-2 text-center" >
                        <div className="flex items-center justify-center space-x-4 cursor-pointer" onClick={handleClick}>
                            <div className={styles.calltext}>
                                <p className="text-lg">Call Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CallButton;
