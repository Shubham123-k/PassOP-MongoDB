import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className="w-full py-4 bg-transparent">
      <div className={`flex flex-col items-center justify-center ${darkMode ? "text-white" : "text-black"}`}>
        
        <div className="font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        <div className="flex items-center mt-2">
          Created with
          <img className="w-6 mx-2" src="icons/heart.png" alt="" />
          by Shubham K
        </div>
      </div>
    </footer>
  );
};

export default Footer;