import React, { useState } from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
    const [focusedButton, setFocusedButton] = useState(null);

    const handleFocus = (index) => {
        setFocusedButton(index);
    };

    const handleBlur = () => {
        setFocusedButton(null);
    };

    const buttons = ["Home", "About", "Projects", "Contact"];

    return (
        <>
            <motion.nav 
                className="flex items-center justify-between pt-4 pb-12 w-[100%] max-lg:justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="w-28">
                    <img className="" src="/images/assets/LayersLogo.png" alt="Logo" />
                </div>
                <ul className="flex gap-2 max-lg:hidden border border-[rgb(35,35,35)] px-2 py-2 rounded-[50px]">
                    {buttons.map((button, index) => (
                        <li key={index}>
                            <button
                                className={`bg-transparent focus:outline-none text-[rgb(255,255,255)] rounded-[50px] px-8 ${focusedButton === index ? 'button-focused' : ''}`}
                                onFocus={() => handleFocus(index)}
                                onBlur={handleBlur}
                            >
                                {button}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-6 max-lg:hidden text-[rgb(179,179,179)]">
                    <FaFacebook size={24} className="" />
                    <FaInstagram size={24} className="" />
                    <FaDribbble size={24} className="" />
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar;
