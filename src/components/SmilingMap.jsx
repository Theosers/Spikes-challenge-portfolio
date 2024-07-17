import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const SmilingMap = () => {

    return (
      <>
      <motion.div 
        className="relative bgMap max-lg:h-[480px] rounded-[50px] px-14 py-12 mb-4 text-white text-[18px] overflow-hidden max-lg:w-[100%] w-[50%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='border-[rgba(255,255,255,0.1)] flex'>
          <h1 className='text-[18px] w-[100%] whitespace-nowrap'>Application Name</h1>
          <FontAwesomeIcon className='ml-[50px] text-[rgba(255,255,255,0.6)]' icon={faUpRightFromSquare } />
        </div>
        <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>Subtitle</span>
        
        <motion.img
          src="images/assets/AppName.png" className="mx-auto scale-150 max-lg:scale-100" alt="" 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </motion.div>
      </>
    )
  }
  
  export default SmilingMap;
