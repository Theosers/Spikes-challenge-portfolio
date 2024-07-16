import React from 'react';
import { TbSend } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
const Twitter = () => {

    return (
      <>
      <div className=" bg-[rgb(29,29,29)] rounded-[50px] px-10 pb-[40px] py-8 mb-4 text-white text-[18px] overflow-hidden w-[100%]">
        <div className='border-[rgba(255,255,255,0.1)] flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img src="images/assets/profilepic.png" alt="" />
            <div>
              <h1 className='text-[18px] w-[100%] whitespace-nowrap'>Name</h1>
              <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>@name</span>
            </div>
          </div>
          
          <FaTwitter  className='ml-[50px] text-[rgb(29,161,242)] w-[35px] h-[35px]'  />
        </div>

        <p className='pt-[20px] text-[16px]'>I never imagined I would do this, but I recently published my first case study on Dribbble. 😎</p>
        <button className='mt-[20px] text-[14px] w-[100%] rounded-[50px] border-[rgb(179,179,179)] bg-[rgb(29,29,29)] flex items-center justify-evenly'>Read my social <i></i>
        <TbSend size={18} className="" />
        </button>
      </div>
      </>
    )
  }
  
  export default Twitter
  