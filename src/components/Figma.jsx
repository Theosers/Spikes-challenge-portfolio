import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Figma = () => {

    return (
      <>
      <motion.div 
        className="mb-4 bg-[rgb(29,29,29)] h-full rounded-[50px] overflow-hidden max-lg:w-[100%] w-[50%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='px-14 py-12 mb-4 text-white text-[18px]'>
          <h1 className='text-[18px] w-[100%] whitespace-nowrap'>
          45k+ Downloads in Figma
          </h1>
          
        <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>
        Freebie design systems & libraries for design community 
        <span className='text-[14px] text-[rgba(255,255,255,0.6)] pl-[2px]'>🗂</span>
        </span>
        </div>
        <div className="bgFigma mt-4 flex max-lg:h-[500px] h-[530px] justify-between">
        
        </div>
        

      </motion.div>
      </>
    )
  }
  
  export default Figma;
