import React, {FC, ReactNode} from 'react';
import "./HomeBanner.module.css"

interface BannerProps {
  title?: string;
  Slider?: ReactNode;
  FormComponent?: ReactNode; // New prop to accept a custom component
}

const HomeBanner: FC<BannerProps> = ({ title,FormComponent, Slider  }) => {
  return (
    <div 
      className="bg-cover bg-center" // Tailwind classes for background handling
      style={{ backgroundImage: 'url(/Image/bg-3.png)'}} // Inline style for the image
    >
      <div className="container mx-auto ">
        <div className="md:my-2 lg:grid lg:grid-col-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-2 justify-items-center items-center">
          <div className="md:col-span-1 text-center flex flex-col justify-end h-full">
            <h1 className="wave-animation text-secondary-500 title-font sm:text-4xl text-3xl mt-24 mb-8 font-bold">{title}</h1>
          </div>

          <div className="md:col-span-1 px-6 mt-24">
            {FormComponent ? (
              FormComponent
            ) : (
              <p>No form available</p> // Fallback if no form is passed
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
