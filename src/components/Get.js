import React from "react"
import { AiFillApple } from "react-icons/ai"
import { IconContext } from "react-icons/lib"
function Get() {
  return (
    <div className='sm:px-16 px-4  mt-20 '>
      <div className='flex justify-center flex-col items-center  '>
        <h1 className='text-[38px] text-white font-clash leading-[40px] sm:leading-0 font-semibold text-center '>
          Get <span className='text-gradient '>Safekey</span> for your device
        </h1>

        <button className='bg-white w-[143px] h-[46px] flex justify-center items-center rounded-[8px] font-circular text-sm mt-10'>
          <AiFillApple className='text-[20px]' />
          App Store
        </button>
      </div>
      <div className='flex justify-between sm:flex-row flex-col  items-center mt-10 mb-24  '>
        <h2 className='text-white text-center font-clash font-semibold sm:w-[460px] w-[310px] leading-[40px] sm:leading-0 text-[32px] px-4 '>
          Elevate your crypto security with Safekey
        </h2>
        <div>
          <div class='sm:w-[622px] w-[100%] px-4 h-[55px] '>
            <div className='w-[100%] h-[100%] sm:mt-0 mt-5  rounded-[8px] pl-2 bg-[rgba(255,255,255,0.1)] flex items-center'>
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
              <input type="button" className="sm:px-12 px-4 bg-white h-[100%] font-circular rounded-r-[8px] " value="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Get
