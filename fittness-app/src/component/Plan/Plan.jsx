import React from 'react'
import {plansData} from '../../data/plansData'
import './Plan.css'
import picture1 from '../../assets/whiteTick.png'
import { Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Plan = () => {
  const navigate = useNavigate();
  return (
    <div className='mainplan'>
    <div className='plans-container'>
        <div className="program-header">
            <span>READY TO START</span>
            <span className='stroke-text1'>YOUR JOURNEY</span>
            <span>WITHUS</span>
        </div>
      {/* Plan cards */}
      <div className="plans">
        {plansData.map((data,i) =>(
            <div className="plan" key={i}>
                {data.icon}
                <span>{data.name}</span>
                <span>{data.price}</span>
                <div className="features">
                    {data.features.map((feature,i)=>(
                        <div className="feature">
                            <img src={picture1} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>
                {/* <buttons><Link to="/signup" style={{textDecoration : 'none'}}>Get Started</Link></buttons> */}
          
                <Button
          variant="primary"
          style={{ width: "90%",height:"45px", marginLeft: "10px",backgroundColor:"#454545"}}
          onClick={()=>{
             navigate('/planform')
          }}
        >
          
          {/* <Link to="/planform" style={{textDecoration : 'none',color : "white"}}></Link> */}
          Join
        </Button>              

                {/* <button className="btn join-button"><Link to="/planform" style={{textDecoration : 'none'}}>Join</Link></button> */}
            </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Plan
