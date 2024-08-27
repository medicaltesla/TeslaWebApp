"use client"
import React,{useState, useEffect} from 'react';
import { IoCallOutline } from "react-icons/io5";

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
        <>{isMobileView &&
            <div style={{
                position: 'fixed',
                bottom: '90px',
                right: '20px',
                zIndex: '1000',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                cursor: 'pointer', 
            }}>
                <IoCallOutline onClick={handleClick} style={{ fontSize: '2rem', color: '#0b3a6a', }} />
            </div>
        }
        </>
    );
};

export default CallButton;
