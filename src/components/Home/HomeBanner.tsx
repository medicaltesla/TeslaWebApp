import React, {FC, ReactNode} from 'react';

interface BannerProps {
  title: string;
  FormComponent?: ReactNode; // New prop to accept a custom component
}

const HomeBanner: FC<BannerProps>  = ({ title,FormComponent  }) => {
  return (
 
      <div className="container mx-auto">
        <div className="md:my-2 lg:grid lg:grid-col-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-2 justify-items-center items-center">
          
          <div className="md:col-span-1 px-1 text-center">
            <h1 className="title-font sm:text-5xl text-3xl mt-24 mb-4 font-bold">{title}</h1>
          </div>

          <div className="md:col-span-1 px-6 py-8 mt-16">
            {FormComponent ? (
              FormComponent
            ) : (
              <p>No form available</p> // Fallback if no form is passed
            )}
          </div>

        </div>
      </div>
 
  );
};

export default HomeBanner;
