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
      <div className='why w-[100%] h-[300px]   mt-48 z-[-10] flex justify-center flex-col items-center text-white font-clash  font-semibold'>
          <h1 className='text-[38px]'>
            Why <span className='text-gradient '>Safekey</span>{" "}
          </h1>
          <p className='font-circular text-[16px]'>
            here are some reasons why you should go with Safekey
          </p>
        </div>
      </motion.div>
        <div className=''>
          <ul className='flex justify-center items-center flex-wrap px-16 gap-[20px] '>
            {whySafeKey.map((items) => {
              return (
                <li>
                  <div className=' w-[600px] h-[600px] bgg relative text-white flex justify-center items-center flex-col'>
                    <div className={`${items.cName}  absolute w-[40vw] h-[5%]  bottom-[70px]   z-[10]`} />
                    <img className='mb-20' src={items.img} alt='' />
                    <h1 className='font-clash font-semibold text-[42px]'>
                      {items.title}
                    </h1>
                    <p className='text-[16px] w-[400px] text-center font-circular'>
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
