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
      <main className='px-4 flex flex-col items-center h-screen custom-background mx:px-2'>
        <Navbar />

        <Todo />
        <OrangeSoft />
        <MyAdventure />
        <Phone />
        <Twitter />
        <DribbleChat />
        <Figma />
        <DashBoard />
        <SmilingMap />
        <SayHello />

        <Footer />
      </main>
    </>
  )
}

export default App
