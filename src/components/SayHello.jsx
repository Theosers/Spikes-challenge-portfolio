import { TbSend } from "react-icons/tb";

const SayHello = () => {

    return (
      <>
      <div className="flex flex-col justify-between relative bg-[rgb(29,29,29)] rounded-[50px] px-10 py-10 mb-4 text-white text-[18px] overflow-hidden max-lg:w-[100%] w-[50%]">
      
      <h1 className="mb-20 text-[45px] font-normal">Say, <br/>Hello 👋🏻</h1>
      <div className="flex gap-2">
        <div className="bg-[rgb(20,20,20)] text-[rgb(179,179,179)] text-[14px] rounded-full text-body text-secondary grow font-extralight px-4 py-2 flex items-center">
          Click to message          
        </div>
        <TbSend size={24} className="bg-indigo-600 rounded-full px-[8px] py-[8px] w-[40px] h-[40px]" />
      
      </div>

      
      
      </div>
      </>
    )
  }
  
  export default SayHello
  