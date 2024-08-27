"use client"
import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import WhatsApp from './WhatsApp';
import CallButton from './CallButton'

const Footer = () => {
    return (
        <div className="bg-primary-500">
            <footer className="container mx-auto mt-6 w-full">
                
                <div className="md:my-2 lg:grid lg:grid-col-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 gap-1 md:mx-4">
                    <div className="md:col-span-4 sm:col-span-1 px-2 py-4">
                        <h4 className="mb-4 text-2xl font-bold text-start mt-4 text-white">Tesla Hi-Tech MRI Imaging Diagnostic Center</h4>
                        <p className="text-white text-base">
                            Mumbai and Pune&apos;s most trusted destination for state-of-the-art diagnostic imaging services. Nestled in the heart of the city, our clinic is dedicated to delivering unparalleled accuracy and comprehensive care.
                        </p>
                    </div>
                </div>
                
                <hr className="my-6 border border-white" />
                <div className="md:my-2 lg:grid lg:grid-col-4 md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 md:mx-2">
                
                    <div className='md:col-span-1 sm:col-span-1 px-6 py-4 text-center'>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-white text-start">MUMBAI CENTER</h4>
                        <ul className="text-start text-white">
                            <Link href='/' className='text-white hover:text-secondary-500 '>View On Google Map</Link>
                            <p className="text-start">
                                Shop No 3,4,5 Kailash Kiran, Tilak Road
                            </p>
                            <p>Opp. Ashirwad Hospital, Near Universal School,</p>
                            <p>Ghatkopar(East) Mumbai-400 077</p>
                       
                        </ul>
                    </div>
                    <div className='md:col-span-1 sm:col-span-1 px-6 py-4 text-center'>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-white text-start">PUNE CENTER</h4>
                        <ul className="text-start text-white">
                            <Link href='https://maps.app.goo.gl/VYJuVh65YCczeJNm8' className='text-white hover:text-secondary-500 '>View On Google Map</Link>
                            <p className="text-start">
                                Shop No:3 Ground Floor BIZHUB
                            </p>
                            <p>Apartment Ambedkar Chowk</p>
                            <p>Nehru Nagar Road, Pimpri,</p>
                            <p>Maharashtra 411 018</p>
                            
                        </ul>
                    </div>
                    <div className='md:col-span-1 sm:col-span-1 px-6 py-4 text-white text-start'>
                        <h4 className="mb-4 text-sm font-semibold uppercase">USEFUL LINKS</h4>
                        
                        <ul>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href="/about">
                                <li>About</li>
                            </Link>
                            <Link href="/services">
                                <li>Services</li>
                            </Link>
                            <Link href='/contact'>
                                <li>Contact us</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='md:col-span-1 sm:col-span-1 px-6 py-4 text-center'>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-white text-start">OUR CONTACTS</h4>
                        <ul className="text-start text-white">
                            <p className="mb-2 mt-2">☎ +91 96993 10001 (Mumbai)</p> 
                            <p className="mb-2 mt-2">☎ +91 96994 10001 (Mumbai)</p> 
                            <p className="mb-2 mt-2">☎ +91 91750 14994 (Pune)</p>
                            <p className="mb-2 mt-2">☎ +91 91750 54994 (Pune)</p> 
                           
                        </ul>
                    </div>

                </div>

                <hr className="my-6 border border-white" />
                
                <div className="mx-4 md:my-2 sm:flex sm:items-center sm:justify-between justify-items-center items-center">
                    <span className="text-sm text-white sm:text-center ">Copyright © 2024 <a href="/" className="hover:underline">Tesla Hi-Tech MRI Imaging Diagnostic Center</a> All Rights Reserved.
                        <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@maxxcell.in' rel='noopener noreferrer' className='text-secondary-500 ml-1 ' target='_blank'>test@gmail.com</Link>
                        {/* <Link href='/'> | developed by DigitalParlour</Link> */}
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-white">
                        <Link href='https://www.facebook.com/Maxxcell?mibextid=ZbWKwL'>
                            <FaFacebook />
                            <span className="sr-only">Facebook page</span>
                        </Link>

                        <Link href='https://instagram.com/maxxcellinstitute?igshid=MzRlODBiNWFlZA=='>
                            <FaSquareInstagram />
                            <span className="sr-only">Instagram page</span>
                        </Link>
               
                    </div>
                </div>
                <WhatsApp/>
                <CallButton/>
            </footer>
        </div>
    )
}

export default Footer;