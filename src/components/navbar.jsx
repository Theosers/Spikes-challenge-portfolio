import React from "react";
import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";


const Navbar = () => {

    return (
      <>
      <nav className="flex items-center justify-between pt-4 pb-12 w-[100%] max-lg:justify-center">
          <div className="w-28">
            <img className="" src="/images/assets/LayersLogo.png" alt="" />
            </div>
          <ul className="flex gap-2 max-lg:hidden border border-[rgb(35,35,35)] px-2 py-2 rounded-[50px] ">
            <li><button className="bg-transparent focus:outline-none focus:bg-[rgb(29,29,29)] text-[rgb(255,255,255)] rounded-[50px] px-8">Home</button></li>
            <li><button className="bg-transparent focus:outline-none focus:bg-[rgb(29,29,29)] text-[rgb(255,255,255)] rounded-[50px] px-8">About</button></li>
            <li><button className="bg-transparent focus:outline-none focus:bg-[rgb(29,29,29)] text-[rgb(255,255,255)] rounded-[50px] px-8">Projects</button></li>
            <li><button className="bg-transparent focus:outline-none focus:bg-[rgb(29,29,29)] text-[rgb(255,255,255)] rounded-[50px] px-8">Contact</button></li>
          </ul>

          <div className="flex gap-6 max-lg:hidden text-[rgb(179,179,179)]">
            <FaFacebook size={24} className="" />
            <FaInstagram size={24} className="" />
            <FaDribbble size={24} className="" />
          </div>
      </nav>


      </>
    )
  }
  
  export default Navbar
  