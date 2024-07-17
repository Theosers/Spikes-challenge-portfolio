import React from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-[100%]">
      <motion.div 
        className="flex text-[rgb(179,179,179)] items-center justify-between max-lg:flex-col max-lg:gap-4 mb-10 mt-[120px] w-[100%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-lg:hidden">
          <img src="images/assets/LayersLogo.png" alt="" className="h-[38px]" />
        </div>
        <div>
          <p>Théophile - Challenge Web</p>
        </div>
        <div className="flex gap-6">
          <FaFacebook size={24} className="text-[rgb(179,179,179)]" />
          <FaInstagram size={24} className="text-[rgb(179,179,179)]" />
          <FaDribbble size={24} className="text-[rgb(179,179,179)]" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
