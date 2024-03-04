import React from 'react'
import uxdesign from './imgs/uxdesignwithoutshadow.jpg.png'
import div from './imgs/div.png'
import tik from './imgs/tik.png'
const Brainstorm = () => {
  return (
    <div className='brainstorming grid grid-flow-cols justify-center mx-10 mt-24'>
        <div className="brain-header ">
                <h1 className="Bheader font-bold text-2xl  md:text-5xl mt-10 mb-8">Built for all kinds of teams</h1>
        </div>
        <div className="flex flex-wrap gap-y-3 gap-x-6">
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>UX & Design</button>
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Marketing</button>
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Product Management</button>
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Engineering</button>
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Consultants</button>
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Agile Coaches</button>
            <button className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Sales</button>
        </div>
        <div className="img-explaination px-3 mt-10 flex flex-col gap-x-28 md:flex-row">
                <div className="text-part max-w-72 mt-8">
                    
                    <p className='md:mt-8 md:mb-8 h-7 flex gap-x-3'>
                    <img src={tik} alt="" />Build low-fi wireframes
                    </p>
                    <p className='md:mt-8 md:mb-8 h-7 flex gap-x-3'>
                    <img src={tik} alt="" />Involve stakeholders in the design process
                    </p>
                    <p className='mt-5 md:mt-8 md:mb-8 h-7 flex gap-x-3'>
                    <img src={tik} alt="" />Run engaging design workshops
                    </p>
                    <a className='text-blue-600 ' href="/">Learn more →
                </a>
                <div className="img-build mt-20">
                    <img src={div} alt="" />
                </div>
                </div>
                <div className="image-part ">
                    <img className='' src={uxdesign} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Brainstorm
