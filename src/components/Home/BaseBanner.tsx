import React, {FC} from 'react';
import Image from 'next/image';

interface BaseBannerProps {
  title: string;
  imageUrl: string;
  features?: string[];
  paragraph?: string;
  buttonText?: string;
  onClick?: () => void;
}

const BaseBanner: FC<BaseBannerProps>  = ({ title, features, imageUrl, paragraph, buttonText, onClick }) => {
  return (
    <div className="container mx-auto">
      <div className="md:my-2 lg:grid lg:grid-col-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-1 justify-items-center items-center">
        <div className="md:col-span-1 px-1 text-center">
          <h1 className="title-font sm:text-4xl text-2xl mt-24 mb-6 font-bold">{title}</h1>
          {features && (
            <div className="flex mx-1 mt-4 text-center justify-center">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center mx-2 ">
                  <svg
                    className="w-6 h-6 mb-1 text-red-500 group-hover:text-red-600 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                  >
                    <path d="M168.531 215.469l-29.864 29.864 96 96L448 128l-29.864-29.864-183.469 182.395-66.136-65.062zm236.802 189.864H106.667V106.667H320V64H106.667C83.198 64 64 83.198 64 106.667v298.666C64 428.802 83.198 448 106.667 448h298.666C428.802 448 448 428.802 448 405.333V234.667h-42.667v170.666z"></path>
                  </svg>
                  <p className="text-lg mb-1 flex ">{feature}</p>
                </div>
              ))}
            </div>
          )}
          {paragraph && <p className="text-base mb-4">{paragraph}</p>}
          {buttonText && onClick && (
            <button className="mb-4 mt-4 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-full text-sm px-5 py-3 text-center ">
              {buttonText}
            </button>
            
          )}
        </div>
        <div className="md:col-span-1 px-6 py-9 text-center">
          <Image alt="Home Banner" className="object-cover object-center rounded height-auto responsiveImg" width={600} height={600} src={imageUrl} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default BaseBanner;
