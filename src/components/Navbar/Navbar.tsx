"use client"
import React, {useState} from "react";
import styles from "./navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";

const PhoneNumber = '+91 91750 14994';

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const [subsubmenuVisible, setSubsubmenuVisible] = useState(null);

  const handleClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  };

  return (
    <>
     
      <nav className="flex bg-primary-500 shadow w-full z-50 mb-8 fixed mx-auto justify-between items-center p-2">
          <div className=" mx-2 ">
            <Link href="/">
              <div className={styles.imageContainer}>
                <Image src="/Image/logo1.png" loading='lazy' className={styles.logo} width={200} height={140} alt="Tesla Logo" />
              </div>
            </Link>
          </div>
          
          <div className="right-0">
            <button type="button" onClick={handleDrawerToggle} className="p-2 group lg:hidden" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
              <span className="sr-only">Menu</span>
              <MdMenuOpen className="text-white right-0" size={38}/>
            </button>
          </div>
        
          <div className={`${styles.links} hidden md:block `}>
            <div className="relative group text-white hover:text-third-500 p-1 uppercase">
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </div>
      
            <div className="relative group text-white hover:text-third-500 p-1 uppercase">
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </div>
        
            <div className="relative group text-white hover:text-third-500 p-1 uppercase">
              <Link href="/services" className={styles.link}>
                Services
              </Link> 
            </div>
        
            <div className="relative group text-white hover:text-third-500 p-1 uppercase">
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
            </div>   

            <div className="relative group text-white hover:text-third-500 p-1 uppercase">
              <Link href="/contact" className={styles.link}>
                Book Appointment
              </Link>
            </div>  
            
            <div className="relative group text-white hover:text-third-500 p-1 uppercase">
              <Link href="" onClick={handleClick} className={styles.link}> 
                Call  {PhoneNumber}
              </Link>
            </div> 

          </div>
        
        {isDrawerOpen && (
          <div id="drawer-navigation" className="fixed top-0 right-0 z-40 w-64 h-screen p-4 bg-primary-500 md:hidden" tab-index="-1" aria-labelledby="drawer-navigation-label">
              <button className="absolute top-6 right-4 text-white" onClick={closeDrawer}>
                <TbArrowsCross size={16}/>
              </button>

              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                  <li>
                    <Link href="/" 
                      className="flex items-center p-2 text-white rounded-lg hover:bg-secondary-500 group"
                      onClick={closeDrawer}
                    >
                      <IoHome  size={22} />
                      <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" 
                      className="flex items-center p-2 text-white  rounded-lg hover:bg-secondary-500 group"
                      onClick={closeDrawer}
                    >
                      <BsInfoCircleFill size={22} />
                      <span className="flex-1 ms-3 whitespace-nowrap">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" 
                      className="flex items-center p-2 text-white  rounded-lg  hover:bg-secondary-500 group"
                      onClick={closeDrawer}
                    >
                      <MdMedicalServices size={22} />
                      <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" 
                      className="flex items-center p-2 text-white  rounded-lg  hover:bg-secondary-500 group"
                      onClick={closeDrawer}
                    >
                      <FaPhoneSquareAlt size={22} />
                      <span className="flex-1 ms-3 whitespace-nowrap"> Contact Us</span>
                    </Link>
                  </li>
                  
                </ul>

                <ul>
                  <li className="fixed bottom-20 text-white">
                    <span className="text-sm sm:text-center">© 2024 <a href="/" className="hover:underline"></a>
                      <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=teslahitechimaging@gmail.com' rel='noopener noreferrer' className=' ml-1' target='_blank'>teslahitechimaging@gmail.com</a>
                    </span>
                  </li>
                </ul>
                
            </div>
          </div>
        )}
        
      </nav>
    
    </>
  )
}
