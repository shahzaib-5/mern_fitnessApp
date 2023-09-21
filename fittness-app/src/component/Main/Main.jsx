import React from 'react'
import Header from '../Header/Header'
import './Main.css'
import home_image from "../../assets/hero_image.png";
import home_back_image from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"; 
import {testimonialsData} from '../../data/testimonialsData'
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/Button";
const Main = () => {
  return (
    <div className = "main">
      <div className="left-m">

{/* add */}
      <div className="best-add">
        <div></div>
        <span>the best fittness club in the town</span>
      </div>
{/* main heading */}
      <div className="main-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
            </div>

            <div><span>We will help you to shape and build your ideal body with us 
             and live up your life with your own style</span> 
             </div>

      </div>
      {/* fugures */}
      <div className="figure">
        <div>
          <span>+100</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>+1000</span>
          <span>Members Joined</span>
          </div>
        <div>
          <span>+50</span>
          <span>Fittness Programs</span>
          </div>
      </div>
      {/* home page button */}

      {/* <div className="main-button"> */}
      <Button
          variant="primary"
          style={{ width: "20%",height:"60px", marginLeft: "10px",backgroundColor:"orange"}}
        >

          <Link to="/signup" style={{textDecoration : 'none',color : "white"}}>Get Started Now!!</Link>
        </Button>
        {/* <buttons><Link to="/signup" style={{textDecoration : 'none'}}>Get Started</Link></buttons> */}
        {/* <buttons><Link className = "btn" to="/learnMore" style={{textDecoration : 'none'}}>Learn More</Link></buttons> */}
      {/* </div> */}
      {/* testimonials */}
      <div className="testimonials">
        <div className="left-testi">
        <span>Testimonials</span>
        <span> our International Clients</span>
        <span style={{color:'orange'}}> about us</span>
        <span>{testimonialsData[0].review} </span>
        <span>
          <span style = {{color:'orange' }}>
            {testimonialsData[0].name}
          </span>
        </span>

        <span>{testimonialsData[1].review}</span>
        <span style = {{color:'orange' }}>
            {testimonialsData[1].name}

          </span>

          <span>{testimonialsData[2].review}</span>
        <span style = {{color:'orange' }}>
            {testimonialsData[2].name}

          </span>
          
        </div>
      </div>
{/* Contact US */}
      <div className="Contact" id="ContactUs">
        <div className='left-j'>
          <hr />
          <div>
            <span style={{color :'orange'}}>ARE YOU READY</span>{" "}
            
          </div>
          <div><span> TO LEVEL UP</span></div>

          <div>
            <span>YOUR BODY</span>
            <span> WITH US?</span>
          </div>
          <form action="" className="contactus-container">

          <Button
          variant="primary"
          style={{ width: "30%",height:"60px", marginLeft: "10px",backgroundColor:"orange"}}
        >
            Contact Now
        </Button>
          </form>
        </div>
        <div className='right-j'>
          
        </div>
      </div>
      </div>

      <div className="right-m"> 
      
      <div className="heart-rate">
         <img src={Heart} alt="" />
           <span>Heart Rate</span><span>160 bpm</span>
      </div>

      {/* home page images */}
      {/* <img src={home_image} alt="" className="home-image" /> */}
      <img src={home_back_image} alt="" className="home-image-back" />
      {/* calories image */}
      <div className="calories">
        <img src={Calories} alt="" />
       <div>
       <span>Calories Burned </span>
       <span> 4000 Kcal</span>
       </div>
      </div>

      </div>

      
     

    </div>

  )
  
}

export default Main
