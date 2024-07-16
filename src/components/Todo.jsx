import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const Todo = () => {

  return (
    <>
    <div className="todo-background h-full rounded-[50px]	 px-8 py-8 mb-4 text-white text-xl">
      <div className='pb-5 border-b-2 border-[rgba(255,255,255,0.1)] flex justify-between'>
        <h1 className='text-2xl w-[80%]'> <span className='font-[600]'>Théophile is Coding -</span> Engineer, Freelance Full-Stack Developer</h1>
        
        <FontAwesomeIcon className='text-[rgba(255,255,255,0.6)]' icon={faUpRightFromSquare } />
      </div>
        
        <p className='py-4 '>Journaling</p>

        <div>    
          <ul className='flex flex-col gap-6'>
            <li className='flex  items-start gap-4 text-[18px]'>
              <div className='flex gap-2 items-center'>
            <div class="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
              <span className='text-[rgba(255,255,255,0.6)] whitespace-nowrap'>
              
              25 Janv:</span>
              </div>
              <span>Started a new mobile design project.</span>
            </li>
            
            <li className='flex  items-start gap-4 text-[18px]'>
              <div className='flex gap-2 items-center'>
            <div class="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
              <span className='text-[rgba(255,255,255,0.6)] whitespace-nowrap'>
              
              25 Janv:</span>
              </div>
              <span>Received a certification in advanced UX design techniques.</span>
            </li>
            
            <li className='flex  items-start gap-4 text-[18px]'>
              <div className='flex gap-2 items-center'>
            <div class="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
              <span className='text-[rgba(255,255,255,0.6)] whitespace-nowrap'>
              
              25 Janv:</span>
              </div>
              <span>Completed a user research phase for an ongoing web design project.
              </span>
            </li>
            
            <li className='flex  items-start gap-4 text-[18px]'>
              <div className='flex gap-2 items-center'>
            <div class="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
              <span className='text-[rgba(255,255,255,0.6)] whitespace-nowrap'>
              
              25 Janv:</span>
              </div>
              <span>Attended a workshop on the latest trends in UI animation.
              </span>
            </li>
            
            <li className='flex  items-start gap-4 text-[18px]'>
              <div className='flex gap-2 items-center'>
            <div class="w-1.5 h-1.5 rounded-full bg-[#B3B3B3]"></div>
              <span className='text-[rgba(255,255,255,0.6)] whitespace-nowrap'>
              
              25 Janv:</span>
              </div>
              <span>Launched a redesigned  website for a major client.
              </span>
            </li>
            
          </ul>
        </div>
    </div>
    </>
  )
}

export default Todo
