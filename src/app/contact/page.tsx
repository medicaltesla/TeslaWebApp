import React, { lazy } from 'react';
import type { Metadata } from 'next'
// import dynamic from 'next/dynamic';
import Image from 'next/image';
const Form = lazy(() => import('@/components/Contact/Form'));
import Heading from '@/utils/Heading';

export const metadata: Metadata = {
    title: "Contact Us - Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
    keywords:"Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center",
    description:"Tesla Hi-Tech 3T MRI Amazing &amp; Diagnostic Center"
}

const Contact = () => {
    return (
        <>
            <div className="relative w-full h-64"> {/* Container with relative positioning */}
                <Image
                    src="/Image/Services/hero-bg.png" // Replace with your image path
                    alt="Descriptive text for the image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0" // Cover the entire container
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-transparent bg-opacity-50 p-4 rounded-lg"> {/* Background with opacity */}
                        <h1 className="text-white text-3xl mt-24 font-bold">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>
            <Form/>
        </>
    )
}

export default Contact;