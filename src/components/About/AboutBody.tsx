import React from 'react'
import Image from 'next/image';
import Counter from '@/components/Counter/Counter';

const AboutBody = () => {
  return (
    <div className="container mx-auto">
      <div className="md:my-2 lg:grid lg:grid-col-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-1 h-full justify-items-center items-center">
        <div className='md:col-span-1 mt-4 mb-4 px-8 py-h text-center rounded-lg bg-gray-100'>
          <Image alt="about image" className="object-cover object-center rounded height-auto responsiveImg" width={500} height={500} src="/Image/About/about_tesla.webp" />
        </div>
        <div className="md:col-span-1 mt-4 mb-4 px-3 text-center">
          <h3 className="title-font text-xl md:text-3xl font-bold mb-6 mt-4 text-center">Welcome to Tesla Hi-Tech MRI Amazing & Diagnostic Centre</h3>
          <p className="text-gray-900 text-base text-start mb-4">Pune&apos;s most trusted destination for state-of-the-art diagnostic imaging services. Nestled in the heart of the city, our clinic is dedicated to delivering unparalleled accuracy and comprehensive care. With a focus on advanced technologies like our high-resolution 3T MRI and 32-slice CT scans and more, we ensure precise diagnoses and tailored treatment plans. At Tesla Hi-Tech, our commitment extends beyond technology; our experienced team of radiologists and medical professionals strive to provide compassionate service and support throughout your healthcare journey. Experience the difference at Tesla Hi-Tech, where innovation meets excellence for your health and well-being.</p>
        </div>

        <div className="md:col-span-1 mt-4 mb-4 px-3">
          <h3 className="title-font text-xl md:text-3xl font-bold mb-6 mt-4 text-center">Our Mission and Vision</h3>
          <p className="text-gray-900 text-base text-start mb-4 mt-2"><b>Mission Statement:</b> At Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre, our mission is to provide superior diagnostic imaging services that empower healthcare decisions and improve patient outcomes. We are dedicated to leveraging advanced technology, including our state-of-the-art 3T MRI and 32-slice CT scan, to deliver precise and reliable results. Our commitment extends to fostering a supportive and compassionate environment where patient care remains our top priority.</p>
          <p className="text-gray-900 text-base text-start mb-4 mt-2"><b>Vision Statement:</b> Our vision at Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre is to lead the way in diagnostic excellence and patient-centered care in Pune and beyond. We aim to continuously innovate and expand our capabilities to meet the evolving needs of our community. By embracing cutting-edge advancements and investing in our team&apos;s expertise, we strive to set new benchmarks for diagnostic accuracy, accessibility, and patient satisfaction. Our long-term goal is to be recognized as the preferred choice for advanced imaging services, making a positive impact on the health and well-being of every patient we serve.</p>
        </div>

        <div className="md:col-span-1 mt-4 mb-4 px-8 py-h text-center rounded-lg bg-gray-100">
          <Image alt="about image" className="object-cover object-center rounded height-auto responsiveImg" width={500} height={800} src="/Image/About/contact_tesla.webp" />
        </div>
      </div>

      <Counter />

      <h3 className="title-font text-xl md:text-3xl font-bold mt-4 mb-8 text-center">Meet our Doctor&apos;s</h3>

      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-1 h-full justify-items-center items-center mb-4">
        {/* First image */}
        {/* Second image */}
        <div className="md:col-span-1 mt-2 mb-4 px-3 order-1">
          <Image alt="Dr. Nitesh Jain" className="object-cover object-center rounded height-auto responsiveImg" width={350} height={400} src="/Image/About/nitesh.webp" />
        </div>

        {/* First text (Dr. Nitesh Jain's text) */}
        <div className="md:col-span-1 mb-4 px-3 text-center rounded-lg order-2">
          <p className="text-gray-900 text-base text-start mb-4">
            <b className="text-secondary-500 font-bold">Dr. Nitesh Jain</b> is a distinguished radiologist with more than 15 years of experience in the medical field. He holds an MBBS degree, MD in Radiodiagnosis, DMRE (Diploma in Medical Radiodiagnosis), and AFIH (Associate Fellow of Industrial Health). Dr. Jain&apos;s extensive training and expertise enable him to deliver comprehensive diagnostic evaluations and interpretations. He is dedicated to staying at the forefront of advancements in radiology to offer state-of-the-art diagnostic services that meet the highest standards of quality and patient care at our clinic.
          </p>
        </div>

        <div className="md:col-span-1 mt-4 mb-4 px-8 text-center rounded-lg order-4">
          <Image alt="Dr. Ketan Kalaskar" className="object-cover object-center rounded height-auto responsiveImg" width={350} height={400} src="/Image/About/dr.ketan.png" />
        </div>

        {/* Last text (Dr. Ketan Kalaskar's text) */}
        <div className="md:col-span-1 mt-4 mb-4 px-3 order-3">
          <p className="text-gray-900 text-base text-start mb-4">
            <b className="text-secondary-500 font-bold">Dr. Ketan Kalaskar</b> is a highly skilled radiologist with extensive experience in diagnostic imaging. He completed his MBBS and MD in Radiodiagnosis and pursued a Fellowship in Body Imaging to specialize further in his field. With over 10 years of practice, Dr. Kalaskar is known for his expertise in interpreting complex medical images with precision and clarity. He is committed to ensuring accurate diagnoses and providing compassionate care to every patient at Tesla Hi-Tech 3T MRI Amazing & Diagnostic Centre.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutBody;
