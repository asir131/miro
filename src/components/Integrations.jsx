import React from 'react'
import integrate from './imgs/integrate.png'
const Integrations = () => {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-2 ml-16 mr-16 md:ml-44 md:mr-44 mb-20 md:mt-32'>
        <div className="img-part md:pl-20">
            <img className='pt-20 min-w-32' src={integrate} alt="" />
        </div>
        
        <div className="textPart pt-40">
                <h1 className='font-bold text-3xl sm:text-7xl'>Connect <br />
                    your tools, <br />
                    close your tabs</h1>
                <p className="para mt-12 mb-12 md:mr-40">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                <a className='text-blue-600 border-b-2 border-blue-600' href="/">Learn more →
                </a>
        </div>
        
      
    </div>
  )
}

export default Integrations
