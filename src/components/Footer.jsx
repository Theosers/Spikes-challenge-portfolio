import React from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex text-[rgb(179,179,179)] items-center justify-between max-lg:flex-col max-lg:gap-4 mb-10 mt-[120px]">
        <div className="max-lg:hidden">
          <img src="src/assets/LayersLogo.png" alt="" className="h-[38px]" />
        </div>
        <div>
          <p>Théophile - Challenge Web</p>
        </div>
        <div className="flex gap-6">
          <FaFacebook size={24} className="text-[rgb(179,179,179)]" />
          <FaInstagram size={24} className="text-[rgb(179,179,179)]" />
          <FaDribbble size={24} className="text-[rgb(179,179,179)]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
