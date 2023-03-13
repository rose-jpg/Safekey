import React from "react"
import one from "../assets/1.png"
import { whySafeKey } from "../data/data"
import { motion } from "framer-motion"
import { staggerContainer, slideIn, fadeIn } from "../data/motion"
function Whysafe() {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
      >
      <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      >
      <div className='why w-[100%] sm:h-[300px] h-[200px] mt-36 md:-mt-20  lg:mt-48 z-[-10] flex justify-center flex-col items-center text-white font-clash  font-semibold'>
          <h1 className='text-[28px] sm:text-[38px]'>
            Why <span className='text-gradient '>Safekey</span>{" "}
          </h1>
          <p className='font-circular text-[10px] sm:text-[16px]'>
            here are some reasons why you should go with Safekey
          </p>
        </div>
      </motion.div>
        <div className=''>
          <ul className='flex flex-col flex-wrap md:flex-row  px-4 md:px-16 gap-[20px] '>
            {whySafeKey.map((items) => {
              return (
                <li>
                  <div className=' lg:w-[600px]  lg:h-[600px] w-[100%] bgg relative text-white flex justify-center py-8 px-4 items-center flex-col'>
                    <div className={`${items.cName}  absolute w-[40vw] h-[5%]  bottom-[70px]   z-[10]`} />
                    <img className='mb-20  sm:w-[106px] w-[80px]' src={items.img} alt='' />
                    <h1 className='font-clash font-semibold text-[30px] text-center sm:text-[42px]'>
                      {items.title}
                    </h1>
                    <p className='sm:text-[16px] text-[12px] sm:w-[400px] w-[100%] text-center font-circular sm:px-0 px-10 '>
                      {items.subtitle}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Whysafe
