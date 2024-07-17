import { motion } from 'framer-motion';

const DribbleChat = () => {

    return (
      <>
      <motion.div 
        className=" bg-[rgb(29,29,29)] rounded-[50px] mb-4 w-[100%] max-lg:h-[100%]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
          <img 
            className="rounded-[50px] w-[100%] h-[100%]"
            src="/images/assets/frameDribbble.png" alt="" />
      </motion.div>
      </>
    )
  }
  
  export default DribbleChat;
