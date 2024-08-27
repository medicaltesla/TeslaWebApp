import React from "react";
import "./Loader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'; 

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 h-screen">
      <div className="dot dot-orange">
        <FontAwesomeIcon icon={faStethoscope} className="stethoscope-icon animate-pulse"  />
      </div>
    </div>
  
  );
};

export default Loader;