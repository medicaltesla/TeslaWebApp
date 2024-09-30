"use client";
import React, { FC,useState, useRef  } from "react";
import styles from "./BlogBody.module.css";

interface CardProps {
    id?: string;
    ServiceTitle: string;
    showDetails?: string;
    hideDetails?: string;
  }

const hideDetailsStyle = {
    fontSize: '16px',
}

const ServicesCard: FC<CardProps> = ({ id,ServiceTitle, showDetails, hideDetails }) => {
  // State to manage the toggle
  const [isExpanded, setIsExpanded] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Toggle function to expand/collapse the content
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the element to the top of the viewport
        inline: "nearest"
      });
    }
  };

  return (
    <div id={id} ref={cardRef} className="container mx-auto md:my-2 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-4">
        <div className="md:col-span-1 px-3 py-3 text-center">
          <div className={`${styles.card} h-full relative group`}>
            <div className={styles.cardInner}>
              <div className={styles.cardContent}>
                <h4 className="title-font text-3xl font-medium mb-3 relative group">{ServiceTitle}
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </h4>
                {/* Initial brief description */}
                <p className="leading-relaxed mb-3">
                    {showDetails}
                </p>

                {/* Conditional content: show when expanded */}
                {isExpanded && (
                    <div 
                      className="px-4 py-6 pt-0 ml-4 mt-2" 
                      style={hideDetailsStyle} 
                      dangerouslySetInnerHTML={{ __html: hideDetails || ""}}
                     />
                )}

                <div className="text-sm text-end">
                  {/* Toggle button */}
                  <button onClick={toggleExpand} className="text-secondary-500 border border-secondary-500 bg-transparent hover:bg-secondary-500 hover:text-white font-medium rounded-full text-sm px-2 py-1 text-center">
                    {isExpanded ? "Read Less" : "Read More..."}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
