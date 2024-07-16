import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const DashBoard = () => {

    return (
      <>
      <div className="relative bgSky h-[300px] rounded-[50px] px-14 py-12 mb-4 text-white text-[18px] overflow-hidden w-[100%]">
        <div className='border-[rgba(255,255,255,0.1)] flex'>
          <h1 className='text-[18px] w-[100%] whitespace-nowrap'>Application Name</h1>
          <FontAwesomeIcon className='ml-[50px] text-[rgba(255,255,255,0.6)]' icon={faUpRightFromSquare } />
        </div>
        <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>Subtitle</span>

        <img
          className='absolute left-[20%]'
          src="src/assets/macbook.png" alt="" />
      </div>
      </>
    )
  }
  
  export default DashBoard
  