import React from "react"
import { AiFillApple } from "react-icons/ai"
import { IconContext } from "react-icons/lib"
function Get() {
  return (
    <div className='px-16 mt-48 '>
      <div className='flex justify-center flex-col items-center mb-20 '>
        <h1 className='text-[38px] text-white font-clash  font-semibold '>
          Get <span className='text-gradient '>Safekey</span> for your device
        </h1>

        <button className='bg-white w-[143px] h-[46px] flex justify-center items-center rounded-[8px] font-circular text-sm mt-10'>
          <AiFillApple className='text-[20px]' />
          App Store
        </button>
      </div>
      <div className='flex justify-between flex-row items-center mt-40 mb-48'>
        <h2 className='text-white font-clash font-semibold w-[460px] text-[32px] '>
          Elevate your crypto security with Safekey
        </h2>
        <div>
          <div class='w-[622px] h-[55px] '>
            <div className='w-[100%] h-[100%]  rounded-[8px] pl-2 bg-[rgba(255,255,255,0.1)] flex items-center'>
              <label
                for=''
                className='px-2 text-left text-[#666666] font-circular text-[18px]'
              >
                Email
              </label>
              <input
                className='w-[100%] p-[10px] bg-transparent outline-none text-[#666666]'
                type='email'
             
         
              />
              <input type="button" className="px-12 bg-white h-[100%] font-circular rounded-r-[8px] " value="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Get
