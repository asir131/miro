import React,{useState} from 'react'
import brain from './imgs/brain.png'

const Brainstorm = () => {
  const [name, setName]=useState('Brainstorming')
  return (

    <div className='brainstorming grid grid-flow-cols justify-center mx-10'>
        <div className="brain-header ">
                <h1 className="Bheader font-bold text-2xl  md:text-5xl mt-10 mb-8">Built for the way you work</h1>
        </div>
        <div className="flex flex-wrap gap-y-3 gap-x-6">
            <button onClick={()=>setName('Brainstorming')} className='border -solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Brainstorming</button>
            <button onClick={()=>setName('Diagramming')} className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Diagramming</button>
            <button onClick={()=>setName('Meetings & Workshops')} className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Meetings & Workshops </button>
            <button onClick={()=>setName('Events')} className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Scrum Events</button>
            <button onClick={()=>setName('Mapping')} className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Mapping</button>
            <button onClick={()=>setName('Research & Design')} className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Research & Design</button>
            <button onClick={()=>setName('Strategic Planning')} className='border-solid border-2 p-2 px-4 rounded-full hover:bg-slate-200'>Strategic Planning</button>
        </div>
        <div className="img-explaination px-3 mt-10 flex flex-col gap-x-28 md:flex-row">
                <div className="text-part max-w-72 mt-8">
                    <h2 className='font-bold'>{name}</h2>
                    <p className='md:mt-8 md:mb-8'>
                    Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.
                    </p>
                    <a className='text-blue-600 ' href="#">Learn more →
                </a>
                </div>
                <div className="image-part ">
                    <img className='' src={brain} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Brainstorm
