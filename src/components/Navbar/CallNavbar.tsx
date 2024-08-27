"use client"
import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./navbar.module.css"
import { FaPhoneVolume } from "react-icons/fa6";

const PhoneNumber = '+91 9175014994';

const CallNavbar = () => {

    const handleClick = () => {
        window.location.href = `tel:${PhoneNumber}`;
    };

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const checkIfMobileView = () => {
            setIsMobileView(window.innerWidth <= 991)
        };
        checkIfMobileView();
        window.addEventListener('resize', checkIfMobileView);

        return () => {
            window.removeEventListener('resize', checkIfMobileView);
        };
    }, []);

    return (
        <nav className={` ${styles.callnavbar} top-0 shadow w-full z-50 mt-20 fixed mb-8 mx-auto py-3 `}>
            <div className="mx-2 text-center" >
                <div className="flex items-center justify-center space-x-4 cursor-pointer" onClick={handleClick}>
                    <FaPhoneVolume size={28} className={styles.ringing} />
                    <div className={styles.calltext}>
                        <p>{PhoneNumber}</p>
                        <p>Call Us</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CallNavbar;