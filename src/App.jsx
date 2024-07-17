import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Todo from './components/Todo'
import OrangeSoft from './components/OrangeSoft'
import MyAdventure from './components/MyAdventure'
import Phone from './components/Phone'
import Twitter from './components/Twitter'
import DribbleChat from './components/DribbleChat'
import Figma from './components/Figma'
import DashBoard from './components/DashBoard'
import SmilingMap from './components/SmilingMap'
import SayHello from './components/SayHello'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='custom-background px-20 max-lg:px-4 mx-auto flex flex-col items-center  mx:px-2
       max-w-[1600px] min-w-[415px]'>
        <Navbar />

        <section className="text-white mt-12 flex flex-col gap-4 max-lg:w-[95%] w-[100%]">
          <div className="flex gap-4 max-lg:flex-col">
            <div className=''>
              <Todo />
              <OrangeSoft />
            </div>

            <div className='w-1/2 max-lg:w-full flex flex-col gap-4'>
              <MyAdventure />
              <div className='flex max-lg:flex-col gap-4'>
                <Phone />
                <div className=''>
                  <Twitter />
                  <DribbleChat />
                </div>
              </div>
            </div>
          </div>

          <div className='flex max-lg:flex-col gap-4'>
            <Figma />
            <div className='w-1/2 max-lg:w-full flex flex-col gap-4'>
              <DashBoard />
              <div className='flex gap-4 max-lg:flex-col'>
                <SmilingMap />
                <SayHello />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App
