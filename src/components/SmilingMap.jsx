import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SmilingMap = () => {

    return (
      <>
      <div className="relative bgMap h-[480px] rounded-[50px] px-14 py-12 mb-4 text-white text-[18px] overflow-hidden w-[100%]">
        <div className='border-[rgba(255,255,255,0.1)] flex'>
          <h1 className='text-[18px] w-[100%] whitespace-nowrap'>Application Name</h1>
          <FontAwesomeIcon className='ml-[50px] text-[rgba(255,255,255,0.6)]' icon={faUpRightFromSquare } />
        </div>
        <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>Subtitle</span>

        <img
          
          src="src/assets/AppName.png" alt="" />
      </div>
      </>
    )
  }
  
  export default SmilingMap
  