import React from 'react'
import { ThemeToggle } from './mode-toggle'

const Navbar = () => {
  return (
   <nav className='max-w-7xl mx-auto'>

    <div className=' flex  items-center justify-between   h-16 border-b '>

        <div className=' text-bold font-bold'>
        <h1>FlashOp</h1>

        </div>
        
       <ThemeToggle/>
    </div>
    


   </nav>
  )
}

export default Navbar