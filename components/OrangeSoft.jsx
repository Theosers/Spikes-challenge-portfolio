import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const OrangeSoft = () => {

    return (
      <>
      <div className="bg-[rgb(29,29,29)] h-full rounded-[50px]	 px-14 py-10 mb-4 text-white text-[18px]">
        <div className='border-[rgba(255,255,255,0.1)] flex'>
        <h1 className='text-[18px] w-[100%]'>Adventure with Orangesoft lasting 5 years</h1>
        <FontAwesomeIcon className='ml-[10px] text-[rgba(255,255,255,0.6)]' icon={faUpRightFromSquare } />
        </div>

        <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>21 projects realised</span>
        <span className='text-[14px] pl-[2px]'>🎉</span>

        <div className='flex flex-col gap-4 mt-[14px]'>
          <div className='flex justify-center gap-20'>
            <div className='w-[30%] h-[30%] flex flex-col items-center '>
            <img  src="src/assets/Bros/Bros.png" alt="" />
            <span className='text-[14px] pt-[4px]'>Mr. Hashtag</span>
            </div>
            <div className='w-[30%] h-[30%] flex flex-col items-center '>
            <img  src="src/assets/Bros/Bros-1.png" alt="" />
            <span className='text-[14px] pt-[4px]'>Energy Saver</span>
            </div>
            
          </div>
          <div className='flex justify-center gap-20'>
            <div className='w-[30%] h-[30%] flex flex-col items-center '>
            <img  src="src/assets/Bros/Bros-2.png" alt="" />
            <span className='text-[14px] pt-[4px]'>Online School</span>
            </div>
            <div className='w-[30%] h-[30%] flex flex-col items-center '>
            <img  src="src/assets/Bros/Bros-3.png" alt="" />
            <span className='text-[14px] pt-[4px]'>Covid Pass</span>
            </div>
            
          </div>

        </div>
      </div>
      </>
    )
  }
  
  export default OrangeSoft
  