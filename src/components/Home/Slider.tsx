"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Slider.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image:"/Image/Home/about_tesla.webp"
        },
        {
            image:"/Image/Home/contact_tesla.webp"
        },
        {
            image:"/Image/Home/about_one.webp"
        },
  
        // Add more slides here
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentSlide]);

    return (
        <div className="lg:grid lg:grid-col-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 mb-4 justify-items-center items-center">
          
            <Image 
                alt="slider image"
                className="responsiveImg"
                width={1000} 
                height={400} 
                src={slides[currentSlide].image} 
                loading="lazy"
            />
          
        </div>   
    );
};

export default Slider;
