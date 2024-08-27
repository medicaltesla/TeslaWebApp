import React from 'react';
import styles from "./WelcomeText.module.css";
import Link from 'next/link';

const WhyChooseTesla = () => {
  return (
    <div className="container mx-auto">
        <div className="md:my-2 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 justify-items-center items-center">
            <div className="max-w-full rounded-lg overflow-hidden shadow-lg p-4">
                <h3 className="title-font sm:text-3xl text-2xl font-bold mb-6 mt-4 text-center">Why Choose Tesla Hi-Tech MRI Amazing & Diagnostic Center?</h3>
                <p className="text-gray-900 text-base mb-4">
                    At Tesla Hi-Tech MRI Imaging & Diagnostic Centre, we pride ourselves on providing state-of-the-art technology and expert care to our patients. Our clinic is equipped with the latest advanced imaging equipment, including 3T MRI and 32-slice CT scan machines, ensuring the highest quality diagnostic images and accurate results.
                </p>
                <p className="text-gray-900 text-base mb-4">
                    Our team of expert radiologists brings a wealth of experience and qualifications, dedicated to delivering precise diagnostics and compassionate care. We offer a comprehensive range of diagnostic services, including CT guided interventional procedures, a full pathology lab for blood tests, USG & color doppler, X-ray & X-ray procedures, ECG & stress tests, and 2D echo. This ensures that all your diagnostic needs are met under one roof.
                </p>
                <p className="text-gray-900 text-base mb-4">
                    Patient-centric care is at the heart of what we do. We prioritize patient comfort and satisfaction, providing a welcoming and supportive environment. Conveniently located in Pune, our clinic is easily accessible, making it simple for you to reach us for your diagnostic needs.
                </p>
                <p className="text-gray-900 text-base mb-4">
                    Choose Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre for unparalleled diagnostic accuracy, expert care, and a patient-first approach.
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseTesla