import React from 'react'
import Image from 'next/image';
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

const FormAddress = () => {
  return (
    <>
        <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
                <div className="relative h-full">
                    
                    <div className="absolute bottom-0 w-full lg:p-11 ">
                        <div className="rounded-lg p-6 block">
                            <a href="" className="flex items-center mb-6">
                                <BsTelephone size={22} className="text-third-500"/>
                                <h5 className="text-black text-base font-normal leading-6 ml-5">+91 91750 14994, +91 91750 54994 (Pune)</h5>
                            </a>
                            <a href="" className="flex items-center mb-6">
                                <BsTelephone size={22} className="text-third-500"/>
                                <h5 className="text-black text-base font-normal leading-6 ml-5">+91 96994 10001,  +91 96993 10001 (Mumbai)</h5>
                            </a>
                      

                            <a href="" className="flex items-center mb-6">
                                <LuMail size={22} className="text-third-500"/>
                                <h5 className="text-black text-base font-normal leading-6 ml-5">test@gmail.com</h5>
                            </a>
                            <a href="" className="flex items-center">
                                <LuMapPin size={22} className="text-third-500"/>

                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                    
                                    Nehru Nagar Road, Pimpri,
                                    Maharashtra 411 018
                                </h5>

                            </a>
                            <br/>
                            <a href="" className="flex items-center">
                                <LuMapPin size={28} className="text-third-500"/>

                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                   
                                    Opp. Ashirwad Hospital, Near Universal School,
                                    Ghatkopar(East) Mumbai-400 077
                                </h5>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormAddress;