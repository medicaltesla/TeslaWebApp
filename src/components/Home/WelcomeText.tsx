import React from 'react';

const WelcomeText = () => {
  return (
    <div className="container mx-auto">
      <div className="md:my-2 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 justify-items-center items-center">
          <div className="max-w-full rounded-lg overflow-hidden  p-4">
            <h3 className="title-font sm:text-3xl text-2xl font-bold mb-6 mt-4 text-center">Welcome to Tesla Hi-Tech MRI Amazing & Diagnostic Centre</h3>
            <p className="text-gray-900 text-base mb-4">
              Pune&apos;s most trusted destination for state-of-the-art diagnostic imaging services. Nestled in the heart of the city, our clinic is dedicated to delivering unparalleled accuracy and comprehensive care. With a focus on advanced technologies like our high-resolution 3T MRI and 32-slice CT scans and more, we ensure precise diagnoses and tailored treatment plans. At Tesla Hi-Tech, our commitment extends beyond technology; our experienced team of radiologists and medical professionals strive to provide compassionate service and support throughout your healthcare journey. Experience the difference at Tesla Hi-Tech, where innovation meets excellence for your health and well-being.
            </p>
          </div>
      </div>
    </div>
  )
}

export default WelcomeText;
