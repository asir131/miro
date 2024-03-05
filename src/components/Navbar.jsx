'use client';
import React,{ useState } from 'react'

import logo from './imgs/logo1.png'
import earth from './imgs/earth.png'
import downArrow from './imgs/down-arrow.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {  Checkbox, Label, Modal, TextInput } from 'flowbite-react';


const Navbar = () => {
 
    const [openModal, setOpenModal] = useState(false);
    const [openMod, setOpenMod] = useState(false);
    const [email, setEmail] = useState('');

    // function onCloseMod() {
    //   setOpenMod(false);
    //   setEmail('');
    // }
    // function onCloseModal() {
    //   setOpenModal(false);
    //   setEmail('');
    // }
  
  
  return (
    <div className=' header grid grid-cols-1 md:flex md:flex-wrap min-w-fit justify-between  pb-3 mt-5 shadow-lg'>
       <div className="left-area ml-6  md:flex md:gap-x-3 md:ml-10">
            <div className="logo mb-4  sm:mb-0  w-32 lg:mr-5">
                <img className='' src={logo} alt="" />
                
            </div>
            <div className="bar  sm:pl-96  visible lg:hidden">
            <FontAwesomeIcon  onClick={() => setOpenMod(true)} className='text-5xl  -mb-10  sm:-mb-0 sm:-translate-x-10 visible lg:invisible' icon={faBars} />

            <Modal dismissible show={openMod} onClose={() => setOpenMod(false)}>
        <Modal.Header>Services</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <ul className=' justify-between gap-x-4 mt-1.5'>
                    <li className='flex gap-x-2' >Product <img className='h-2 mt-2' src={downArrow} alt="" /></li>
                    <li className='flex gap-x-2'>Solutions <img className='h-2 mt-2' src={downArrow} alt="" /></li>
                    <li className='flex gap-x-2'>Resources <img className='h-2 mt-2' src={downArrow} alt="" /></li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                    
                </ul>
                <hr />
                <ul className="lists-right flex gap-x-2 mt-2">
                <li className='flex mt-2.5 h-6 gap-x-2 font-bold'><img src={earth} alt="" />EN</li>
                <li className='mt-2.5 ml-4'>Contact Sales</li>
               
                <button onClick={() => setOpenModal(true)} className='font-semibold ml-4 '>Login</button>
                <li className='bg-blue-600 text-white p-2.5 pl-5 pr-5 rounded-3xl'>Sign up free →</li></ul>
                
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <button color="gray" onClick={() => setOpenMod(false)}>
            Decline
          </button>
        </Modal.Footer>
      </Modal>

            </div>
            
            
            <div className="lists-left mt-1 invisible lg:visible ">
                <ul className='flex justify-between gap-x-4 mt-1.5'>
                    <li className='flex gap-x-2' >Product <img className='h-2 mt-2' src={downArrow} alt="" /></li>
                    <li className='flex gap-x-2'>Solutions <img className='h-2 mt-2' src={downArrow} alt="" /></li>
                    <li className='flex gap-x-2'>Resources <img className='h-2 mt-2' src={downArrow} alt="" /></li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                    
                </ul>
                
            </div>
       </div>
       
       
       <div className="right-area  flex md:gap-x-4 md:mr-10 invisible lg:visible">
                
            <ul className="lists-right flex gap-x-2 mt-2">
                <li className='flex mt-1 h-6 gap-x-2 font-bold'><img src={earth} alt="" />EN</li>
                <li className='mt-1'>Contact Sales</li>
                {/* <li className='font-semibold ml-4'>Login</li> */}
                <button onClick={() => setOpenModal(true)} className='font-semibold mb-1 ml-4 '>Login</button>
      <Modal show={openModal} size="md" onClose={()=>setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="/" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <button className='bg-blue-600 text-white p-2.5 pl-5 pr-5 rounded-3xl'>Log in to your account</button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
                
            </ul>
            <div className="signup"><li className='bg-blue-600 text-white p-2.5 pl-5 pr-5 rounded-3xl'>Sign up free →</li></div>
       </div>
    </div>
  )

}


export default Navbar
