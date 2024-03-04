import React from 'react'
import walmart from './imgs/walmart.png'
import cisco from './imgs/cisco.svg.png'
import volvo from './imgs/volvo.png'
import deroitte from './imgs/deloitte.svg.png'
import okta from './imgs/okta.svg.png' 

const Trustedsec = () => {
  return (
    <div className='trusted-section flex flex-col mt-20  md:mb-44'>
       <div className="text-section flex justify-center">
        Trusted by 45M+ users
       </div>
       <div className="image-section grid grid-rows-5 grid-flow-col md:grid-rows-2 lg:grid-rows-1 gap-4  justify-center  mt-10 md:gap-x-10 mb-20">
          <img className='pl-12 w-40 ml-6 md:ml-3 md:pl-0' src={walmart} alt="" />
          <img className='w-64 md:mt-2 ' src={cisco} alt="" />
          <img className='pl-12 md:w-16 ml-12 md:ml-8 md:pl-0 ' src={volvo} alt="" />
          <img className=' w-64' src={deroitte} alt="" />
          <img className='pl-12 ml-12 md:ml-8 md:pl-0 md:w-24' src={okta} alt="" />
       </div>
       <div className="texts grid grid-cols-1 md:grid-cols-3 gap-10 ml-10 md:ml-40 mr-10 md:mr-40 lg:gap-40 lg:ml-96 lg:mr-96 mb-20">
          <div className="textOne opacity-75">
          Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <br />
            <span className='text-blue-600'>pricing plans</span> for more features.  
          </div>
          <div className="textTwo opacity-75">
            Miro has 100+ powerful integrations with tools you already use like G Suite,  Slack, and Jira, so your workflow is seamless. View the full list in our     <span className='text-blue-600'>Marketplace</span> .
          </div>
          <div className="textThree opacity-75">
                We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
                at our <span className='text-blue-600'>Trust Center</span> .
          </div>
          
       </div>
       <div className="signup flex justify-center mb-20"><li className='bg-blue-600 w-40  text-white p-2.5 pl-5 pr-5 rounded-3xl'>Sign up free →</li></div>
    </div>
  )
}

export default Trustedsec
