import React from 'react';
import styles from "./HomeCard.module.css"
import Link from 'next/link';
import { GiBottomRight3dArrow } from "react-icons/gi";
import Image from 'next/image';

const HomeCard = () => {
  return (
    <div className="container">
      <h3 className="title-font sm:text-3xl text-2xl font-bold mb-6 mt-4 text-center">Services We Offer</h3>
        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 sm:grid sm:grid-cols-1 gap-2">

          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-2 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/mri.png" width={200} height={70} alt='MRI' />
              </div>
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k text-center">MRI</h5>
             
            </Link>
          </div>

          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/ct.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">32 Slice CT Scan</h5>
            
            </Link>
          </div>
          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/ctguided.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">CT Guided Interventional</h5>
              
            </Link>
          </div>

          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/pathology.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">Pathology Lab(Blood Test)</h5>
              
            </Link>
          </div>
          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/usg.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">USG & color Doppler</h5>
              
            </Link>
          </div>
          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/xray.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">X-ray & X-Ray Procudeures</h5>
              
            </Link>
          </div>
          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/ecg.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">ECG & Stress Test</h5>
             
            </Link>
          </div>
          <div className={`md:flex md:col-span-1 mx-2 mt-3 px-4 py-3 text-center rounded-xl shadow-lg border border-third-500 hover:bg-third-500 hover:text-white dark:hover:border-third-500 mb-2 ${styles.homeCard}`}>
            <Link href="" className="card-inner block p-6 ">
              <div className="flex items-center justify-center">
                <Image src="/Image/2decho.png" width={200} height={70} alt='MRI' />
              </div>    
            
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-secondary-500k">2D Echo</h5>
              
            </Link>
          </div>

        </div>
    </div>
  )
}

export default HomeCard;
