import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const MyAdventure = () => {

    return (
      <>
      <div className="bg-[rgb(29,29,29)] h-full rounded-[50px]	 px-14 py-12 mb-4 text-white text-[18px] overflow-hidden w-[100%]">
        <div className='border-[rgba(255,255,255,0.1)] flex'>
          <h1 className='text-[18px] w-[100%] whitespace-nowrap'>My adventure lasting 10+ years</h1>
          <FontAwesomeIcon className='ml-[50px] text-[rgba(255,255,255,0.6)]' icon={faUpRightFromSquare } />
        </div>
        <span className='text-[14px] text-[rgba(255,255,255,0.6)]'>21 projects realised</span>
        <span className='text-[14px] pl-[2px]'>🎉</span>

        <div class="mt-4 flex gap-4 bg-[#171717] py-2 px-6 rounded-[30px] border border-[#2C2C2C] -mr-[400px]">
          <img src="/src/assets/Apps/Orangesoft.png" alt="" className="w-[70px] aspect-square"/>
          <img src="/src/assets/Apps/Aval.png" alt="" className="w-[70px] aspect-square"/>
          
          <div class="h-[50px] self-center w-0.5 bg-[#2C2C2C]">
          </div>
          <img src="/src/assets/Apps/Lacerta.png" alt="" class="w-[70px] aspect-square"/>
          <img src="/src/assets/Apps/Stocks.png" alt="" class="w-[70px] aspect-square" />
          <div class="h-[50px] self-center w-0.5 bg-[#2C2C2C]">
          </div>
          <img src="/src/assets/Apps/MerryKitchen.png" alt="" class="w-[70px] aspect-square" />
          <img src="/src/assets/Apps/Jullia.png" alt="" class="w-[70px] aspect-square" />
        </div>
      </div>
      

      </>
    )
  }
  
  export default MyAdventure
  