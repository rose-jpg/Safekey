import React from 'react'
import Logo from "../assets/Logo.svg"
import twitter from "../assets/Twitter.png"
import discord from "../assets/Discord.png"
import youtube from "../assets/Youtube.png"

function Footer() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col text-white mb-14 sm:mb-36'>
            <img src={Logo} alt="" />
            <p className='sm:mt-6 mt-3 mb-5'>© 2022 Safekey. All rights reserved.</p>
            <div className='flex gap-5'>
                <img src={twitter} alt="" />
                <img src={discord} alt="" />
                <img src={youtube} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer