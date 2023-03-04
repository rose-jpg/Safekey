import React from "react"
import hand from "../assets/hand.png"
import screen from "../assets/screen.png"
import { motion } from "framer-motion"
import { staggerContainer, slideIn, fadeIn } from "../data/motion"

function Secure() {
  return (
    <div>
      <motion.div
       variants={staggerContainer}
       initial='hidden'
       whileInView='show'
       viewport={{ once: false }}>
      
      <div className='flex flex-row items-center  px-16 mt-10'>
        <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className='flex flex-col'>
          <h1 className=' text-[66px] text-white font-clash  leading-[75px] font-semibold w-[570px]'>
            Securely store and{" "}
            <span className='txtg'> manage your passwords</span> with Safekey
          </h1>
          <p className=' text-white font-circular text-sm font-normal w-[540px]'>
            For anyone looking to increase their online security and safeguard
            their accounts from potential threats, Safekey's password management
            feature is a useful tool.
          </p>
          <button className='bg-white w-[143px] h-[46px] flex justify-center items-center rounded-[8px] font-circular text-sm mt-3'>
            Get started
          </button>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='relative '
        >
          <img src={hand} className='' alt='' />
          <img
            className='absolute left-[206px] top-[78px]  z-10'
            src={screen}
            alt=''
            srcset=''
          />
        </motion.div>
      </div>
      </motion.div>
     
    </div>
  )
}

export default Secure
