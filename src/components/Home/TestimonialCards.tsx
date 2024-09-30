"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './TestimonialCards.css';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const TestimonialCards = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            text: 'Visited for CT Scan for my husband. Services are excellent!! Will surely recommend for all their services. Staff is professional, polite and caring.',
            name: "Sangeeta Soma",
      
        },
        {
            text: "The place is quite good. The staff is helpful. Went with my father for his brain MRI. There were quite a few patients had to wait for a while but it was worth the price. Received reports in hand one day",
            name:"Saida Shirgaonkar",
           
        },
        {
            text: 'Excellent service provided here, Mr. Gopal sir helped and cooperated us a lot during the treatment and he did CT brain in very short time and gave excellent result. The staff here are also helpful and active. Thank you very much Mr.Gopal sir and team.🙂🙏',
            name: "Gaurav Surve",
        },
        {
            text: 'Good experience 😃 hard working people, very good experience handling everything smoothly and got report within 1 hour visited morning time which was good atmosphere, like the staff fast and hard working everyone,Thank you for service ☺️☺️☺️',
            name: "Supriya Bhosle",
        },
        {
            text: "It's great & happy experience in lab. Specially all the staff of lab are so cooperative & helpful & friendly.lab is so much clean & hygiene.thanx to all staff for their cooperation.keep it. Up & take care.",
            name:"Abdul Kalaam Ansari",
           
        },
        {
            text: 'Tesla Hi tech has a very good staff. Very cooperative staff and friendly environment. Receptionist Simran is very much attentive and always takes care of what visitors need.',
            name: "Ankita Gaikwad",
        },
        {
            text: 'Tesla hi tech thank you so much for kind service. I like it very much Went for ct scan in morning got report in hand same day within 2 hours.',
            name: "Sunil Shinde",
      
        },
        {
            text: "This is one of the best diagnostic centre. The cost for MRI and USG is low comparing with other. The staff is very friendly and cooperative to the patients. They provide the update in every 30 mins if there is a long queue their. Special thanks to Babu and Simran, who helped and guided us till we got the reports handy. Thank you! Babu bhai and Simrin for you help🙏🙏",
            name:"Saifi Sayed",
           
        },
        {
            text: 'Very great service Tesla hi tech, I like the responses from them visit for mri in morning receptionist Nisha madam & Shobha madam very kind service all the trainees over there very kind, the aged lady who sit on the front desk so kind, thanks tesla hi tech',
            name: "Dheeraj Rai",
        },
        {
            text: 'One of the best lab in the mumbai, good environment, helpful staff, everything was hassle free each and every process went smoothly. Thank you each every person working there. You peole are doing a Good job. Highly appreciated.!!',
            name: "Chiranjivi Kunder",
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
        <div>
            <div className="container mx-auto">
                <div className="md:my-2 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 justify-items-center items-center">
                    <div className="max-w-full rounded-lg overflow-hidden  p-4">
                        <h3 className="title-font sm:text-3xl text-2xl font-bold mb-6 mt-4 text-center">Testimonials</h3>
                    </div>
                </div>
            </div>

            <div className="slider">
                <div className="container">
                    {/* <ArrowBackIosIcon onClick={prevSlide} className='slider-button'/> */}
                    {/* <button className="slider-button" onClick={prevSlide}>Previous</button> */}
                    <div className="slideText ">
                        <div className="slideName duration-300">
                            {slides[currentSlide].name}
                        </div>
                        <div className="slideText duration-300">
                            {slides[currentSlide].text}
                        </div>
                    </div>
                    {/* <button className="slider-button" onClick={nextSlide}>Next</button> */}
                    {/* <ArrowForwardIosIcon onClick={prevSlide} className='slider-button'/> */}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCards;
