"use client";
import React, { useState, useEffect } from 'react';
import './CounterSection.css';
import Link from 'next/link';

const Counter: React.FC = () => {
    const [doctorCount, setDoctorCount] = useState<number>(0);
    const [staffCount, setStaffCount] = useState<number>(0);
    const [customerCount, setCustomerCount] = useState<number>(0);
    const [extraCount, setExtraCount] = useState<number>(0);

    const maxDoctorCount: number = 3;
    const maxCustomerCount: number = 2390;
    const maxStaffCount: number = 30;
    const maxExtraCount: number = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            setDoctorCount(prevCount => (prevCount < maxDoctorCount ? prevCount + 1 : prevCount));
            setStaffCount(prevCount => (prevCount < maxStaffCount ? prevCount + 1 : prevCount));
            setCustomerCount(prevCount => (prevCount < maxCustomerCount ? prevCount + 1 : prevCount));
            setExtraCount(prevCount => (prevCount < maxExtraCount ? prevCount + 1 : prevCount));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-transparent mt-2 mb-2 ftco-section justify-content-center">
            <div className="container">
                <h3 className="title-font text-3xl font-bold mb-6 mt-4 text-center">Why Us</h3>
                <div className="md:my-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 sm:grid sm:grid-cols-1 justify-items-center items-center">
                    <div className="md:col-span-1 px-4 text-center">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3 className='number text-2xl md:text-4xl'>Our Doctors</h3>
                                <span className='number text-2xl md:text-4xl'>{doctorCount}+</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-1 px-4 text-center">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3 className='number text-2xl md:text-4xl'>Our Staff</h3>
                                <span className='number text-2xl md:text-4xl'>{staffCount}+</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-1 px-4 text-center">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3 className='number text-2xl md:text-4xl'>Reports</h3>
                                <span className='number text-2xl md:text-4xl'>{customerCount}+</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-1 px-4 text-center">
                        <div className="btn-box">
                            <Link href="" className="btn1" style={{ cursor: 'default', pointerEvents: 'none' }}>
                                <h3 className='number text-2xl md:text-4xl'>Services</h3>
                                <span className='number text-2xl md:text-4xl'>{extraCount}+</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
