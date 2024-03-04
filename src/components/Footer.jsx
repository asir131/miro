import React from 'react'
import social from './imgs/socialmedia.png'
import miro from './imgs/miro.png';
import span from './imgs/span.png';
import back from './imgs/back.png';
const Footer = () => {
  return (
    <div className='bg-indigo-950 text-stone-50 py-10 lg:py-20  lg:px-36'>
      <div className="upper-part lg:grid lg:grid-cols-3 lg:gap-20 lg:mx-28">
          <div className="sec-one ml-10 lg:ml-1">
              <h3 className="header text-2xl font-bold mb-6">
              Scan. Detect. Remove.
              </h3>
              <img className='md:mt-16 md:mb-8' src={social} alt="" />
              <div className="privay flex gap-6 mb-4 md:mb-10">
                 <p className='border-b-2'>Privacy Policy</p>
                 <p className='border-b-2'>Terms of Service</p>
              </div>
              <p className='mb-6'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
              <p>Designed & developed by <span className='border-b-2'>Bigger Picture</span></p>
          </div>
          <div className="sec-two my-8 md:ml-16 ml-10 lg:ml-1">
              <img className='md:mb-8 mb-6 ' src={miro} alt="" />
              <div className="border w-40 mb-6 md:mb-10"></div>

              <div className="devices flex flex-col gap-6">
                <p className='flex gap-4 font-bold text-amber-400'><img src={span} alt="" />iPhone</p>
                <p className='flex gap-4 font-bold text-amber-400'><img src={span} alt="" />Android</p>
                <p className='flex gap-4 font-bold text-amber-400'><img src={span} alt="" />Help</p>
                <p className='flex gap-4 font-bold text-amber-400'><img src={span} alt="" />About</p>
                <p className='flex gap-4 font-bold text-amber-400'><img src={span} alt="" />Insights</p>
              </div>
          </div>
<div
      style={{ backgroundImage: `url(${back})` }}
      className="ml-8 lg:ml-1 bg-cover bg-center sec-three rounded-3xl bg-amber-400 text-black lg:px-8 lg:py-8 p-4 my-6 lg:h-64 w-2/4  lg:w-96"
    >
      <h2 className="font-extrabold lg:text-xl mb-4">Sign up to our newsletter</h2>
      <p className="lg:font-semibold lg:my-4">
        Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!
      </p>
      <div className="flex flex-col lg:flex-row">
        <input
          type="text"
          className="lg:px-4 pt-3 pb-2.5 lg:py-1.5 rounded-e-full lg:rounded-e-none   rounded-s-full mb-4 lg:mb-0  w-full lg:w-56"
          placeholder="Email address"
        />
        <button className="bg-indigo-950 rounded-s-full lg:rounded-s-none rounded-e-full py-2.5 px-3 lg:px-6 lg:pb-1.5 lg:pt-1 text-white font-semibold text-lg">
          Submit
        </button>
      </div>
</div>
      </div>
      <div className="lower-part max-w-3xl mt-6 md:mt-20 ml-10 mr-6 md:ml-28">
      Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.
      </div>
    </div>
  )
}

export default Footer
