import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='h-[100vh]'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home