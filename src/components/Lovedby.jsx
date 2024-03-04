import React from 'react'
import { useState, useEffect } from "react";
import vm from './imgs/vm.png';
import frog from './imgs/frog.svg.png';
import docu from './imgs/docu.png';
const Lovedby = () => {
    const [notes, setNotes] = useState([]);
    const getAllNotes = () => {
		fetch(`http://localhost:4000/persons`)
			.then((res) => res.json())
			.then((data) => {
				setNotes(data);
			});
	};
    useEffect(() => {
		getAllNotes();
	}, []);
    console.log(notes);
  return (
    <div className='mt-10 mb-10 md:mt-40 md:mb-28 grid grid-cols-1 gap-4 justify-items-center'>
        <div className="header-part text-center">
            <h1 className="header font-bold text-3xl md:text-5xl">
            Loved by the world's best teams
            </h1>
            <button className='md:my-10 my-6 py-2 px-5 md:py-3 md:px-8 rounded-full border-solid border-2 border-blue-600 text-blue-600'>See all customer stories →</button>
        </div>
        <div className="infromation ml-10 mr-10  md:flex justify-items-between  sm:gap-16 md:gap-20 lg:gap-52 lg:ml-60 lg:mr-60">
            <div className="info-one">
                    <img src={vm} alt="" className="vm w-28 md:w-64" />
                    <p className='opacity-60 my-5'>
                    “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
                    </p>
            </div>
            <div className="info two">
                <img src={docu} alt="" className="docu w-28 md:w-64" />
                <p className='opacity-60 my-5'>
                “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
                </p>
            </div>
            <div className="info-three">
                <img src={frog} alt="" className="frog w-28 md:w-64" />
                <p className='opacity-60 my-5'>
                “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
                </p>
            </div>
        </div>
        <div className="employer grid px-10 sm:grid-cols-1 sm:gap-10 md:grid-cols-3 md:gap-8 md:mx-20 lg:gap-64">
                    {
                notes.map((note,index) =>
                        <li className='flex my-4 ' key={index}><img  src={note.img} alt="" />
                        <div className="info mx-6">
                            <div className="name opacity-60">
                            {note.name}
                            </div>
                            <div className="sector opacity-60">
                            {note.sector}
                            </div>
                        </div>
                        </li>
                        
                )
            }
        </div>
    </div>
  )
}

export default Lovedby
