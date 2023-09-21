import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import Arrow from '../../assets/rightArrow.png'


const program = () => {
  return (
    <div className='mainprogram'>
    <div className='Program' id = 'program'>
        <div className="program-header">
            <span className='stroke-text1'>Explore our</span>
            <span>Program</span>
            <span className='stroke-text1'>to shape you</span>
        </div>


        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    {/* <button>Join now</button> */}
                    <div className="join-now"><span>Join Now</span><img src={Arrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default program
