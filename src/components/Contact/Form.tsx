
import React from 'react'
import FormAddress from './FormAddress';
import AppointmentForm from './AppointmentForm';
import { BsTelephone } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

const Form = () => {
    return (

        <div className="container mx-auto">
            <div className="md:my-2 lg:grid lg:grid-col-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-2 justify-items-center items-center">
                <div className="md:col-span-1 px-4">
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
                        <h5 className="text-black text-base font-normal leading-6 ml-5">teslahitechimaging@gmail.com</h5>
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
                        <LuMapPin size={22} className="text-third-500"/>

                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                            
                            Near Universal School,
                            Ghatkopar(East) Mumbai-400 077
                        </h5>

                    </a>
                </div>
                <div className="md:col-span-1 px-1 text-center">
                    <AppointmentForm/>
                </div>
            </div>
        </div>                     
    );
}

export default Form;