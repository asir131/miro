import React from 'react'
import hybrid from './imgs/hybridwork.png.png'
const Hybridsection = () => {
  return (
    <div className='hybrid grid grid-cols-1  lg:grid-cols-2 ml-16 mr-16 md:ml-44 md:mr-44 md:mb-20'>
        <div className="textPart pt-40">
                <h1 className='font-bold text-3xl sm:text-7xl'>Work together, wherever you work</h1>
                <p className="para mt-12 mb-12 md:mr-40">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                <a className='text-blue-600 border-b-2 border-blue-600' href="/">Learn more →
                </a>
        </div>
        <div className="img-part md:pl-20">
            <img src={hybrid} alt="" />
        </div>
      
    </div>
  )
}

export default Hybridsection
