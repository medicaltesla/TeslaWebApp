"use client"
import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "./WelcomeMessage.css"

const WelcomeMessage = () => {
    return (
        <nav className="block lg:hidden top-0 w-full mt-12 fixed mb-8 mx-auto py-3">
            <div className="text-center">
                <div className="flex items-center justify-center space-x-4 marquee">
                    <p className='text-secondary-500 marquee-text'>Welcome to The Tesla Radiology Clinic</p>
                </div>
            </div>
        </nav>
    );
};

export default WelcomeMessage;