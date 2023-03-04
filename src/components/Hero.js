import React from "react"
import { AiFillApple } from "react-icons/ai"
import { IconContext } from "react-icons/lib"
import iphone from "../assets/iphone.png"
import mac from "../assets/mac.png"
import { motion } from "framer-motion"
import { staggerContainer, slideIn,fadeIn } from "../data/motion"
function Hero() {
  return (
    <div className='pl-4 sm:pl-16'>
      <motion.div 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}>
        <div className='flex  sm:flex-row flex-col justify-between '>
          <div className='flex flex-col sm:mt-24  '>
            <IconContext.Provider value={{ size: "20px" }}>
              <h1 className=' text-[45px] sm:text-[66px] text-white font-clash  sm:leading-[75px] leading-[50px] font-semibold w-[300px] sm:w-[500px]'>
                Protect your  <span className='txt'>Web3</span> assets with
                Safekey
              </h1>
              <p className=' text-white font-circular text-sm font-normal w-[330px] sm:w-[440px]'>
                Users can store and manage their cryptocurrency keys securely
                and easily with the help of Safekey, a web3 secret key backup
                app.  Users can quickly access their keys from any device,
                eliminating the possibility of losing their digital assets or
                forgetting their secratekeys.
              </p>
              <button className='bg-white w-[143px] h-[46px] flex justify-center items-center rounded-[8px] font-circular text-sm mt-3'>
                <AiFillApple />
                App Store
              </button>
            </IconContext.Provider>
            <div className='relative'></div>
            <div className='gradient-01 absolute w-[30%] inset-0 z-[-10]' />
          </div>
          <div className='flex flex-1 justify-end items-center relative sm:mt-0 mt-6'>
            <motion.img
            
            variants={fadeIn("down", "tween", 0.2, 1)}
            src={iphone} className=' absolute -left-4 bottom-0 z-[10] w-[170px] sm:w-[334px]  ' alt='' />

            <motion.img
         
         variants={slideIn("right", "tween", 0.4, 1)}
            src={mac} className='  ' alt='' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
