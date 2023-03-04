import React from "react"
import Logo from "../assets/Logo.svg"
import menu from "../assets/menu.svg"
import { navLinks } from "../data/data"

function Navbar() {
  return (
    <div>
      <div className='mt-4 relative flex justify-between items-center px-16 mb-[50px]'>

        <div className='bg-gradient absolute w-[80%] h-[20vh] rotate-[-10deg]  -right-[6rem] top-[60px] z-[-10]' />

      
        <div className='w-[100px]  sm:h-full sm:w-full'>
          <img src={Logo} alt='' />
        </div>

       
      
          <div className='hidden  sm:flex items-center gap-[74px]'>
      
            <ul className=' flex gap-[74px]'>
          
         
              {navLinks.map((items) => {
                return (
                  <li key={items.id}>
                    <h4 className='text-white font-circular text-[16px] '>{items.title}</h4>
                  </li>
                )
              })}
            </ul>
            <button className="bg-white px-[21px] py-[9px] rounded-[12.6px] ">
              Download
            </button>
          </div>
    
      </div>
    </div>
  )
}

export default Navbar
