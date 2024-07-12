import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const Todo = () => {

  return (
    <>
    <div className="todo-background h-full rounded-[50px]	 px-6 py-6 text-yellow-400 ">
      <div className='border-b-2 border-indigo-800 '>
        <h1 className='text-2xl	'>Ezis is Coding - Engineer, Freelance Full-Stack Developer</h1>
        <img src="" alt="" />
        <FontAwesomeIcon icon={faUpRightFromSquare } />
      </div>
        
        <p>Journaling</p>

        <div>    
          <ul>
            <li>
              <span>25 Janv:</span>
              <span>Started a new mobile design project.</span>
            </li>
            <li>
              <span>25 Janv:</span>
              <span>Received a certification in advanced UX design techniques.</span>
            </li>
            <li>
              <span>25 Janv:</span>
              <span>Completed a user research phase for an ongoing web design project.</span>
            </li>
            <li>
              <span>25 Janv:</span>
              <span>Attended a workshop on the latest trends in UI animation.</span>
            </li>
            <li>
              <span>25 Janv:</span>
              <span>Launched a redesigned website for a major client.</span>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Todo
