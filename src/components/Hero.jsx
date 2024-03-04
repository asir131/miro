import React from 'react'
import star from './imgs/hero-img-bottom.png'
import hero from './imgs/hero-img.png'

const Hero = () => {
  return (
    <div className='hero mt-20 min-w-fit mx-12 md:mx-40 flex gap-x-40 flex-col lg:flex-row'>
        <div className="hero-text">
            <div className="header-txt">
                <h1 className=' font-bold text-4xl md:text-7xl text-gray-700  drop-shadow-2'>Take ideas from <br />better to best</h1>
                <p className="hero-para mt-4 mb-4 pl-2">
                Miro is your team's visual platform to connect,<br /> collaborate, and create — together.
                </p>
            </div>
            <div className='email-part flex flex-col'>
                <input className='border-solid  border-2 rounded-full p-3 pl-6 max-w-screen-sm' type="text" placeholder='Enter your work email'/>
                <button className='bg-blue-600 text-white rounded-full p-3 mt-2.5 mb-2.5 max-w-screen-sm'>Sign up free →</button>
                <span className='pl-2 opacity-50 mb-7'>Collaborate with your team within minutes</span>
            </div>
            <div className="text-imgg mb-10">
                <img src={star} alt="" />
            </div>

        </div>
        <div className="hero-imgg">
            <img src={hero} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
