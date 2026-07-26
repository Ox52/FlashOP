import React from 'react'
import { ThemeToggle } from './mode-toggle'

const Navbar = () => {
  return (
   <nav className=' border-b '>

    <div className=' flex  items-center justify-between  max-w-6xl mx-auto z-50 h-16 px-4'>

        <div className=' text-bold font-bold'>
        <h1>FlashOp</h1>

        </div>
        
       <ThemeToggle/>
    </div>
    


   </nav>
  )
}

export default Navbar