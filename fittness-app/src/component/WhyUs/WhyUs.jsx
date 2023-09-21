import React from 'react'
import './WhyUs.css'
import picture1 from "../../assets/image1.png";
import picture2 from "../../assets/image2.png";
import picture3 from "../../assets/image3.png";
import picture4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import addidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";


const WhyUs = () => {
  return (
    <div className='mainabout'>
          <div className="Reasons" id = 'reasons'>
        <div className="left-r">
            <img src={picture1} alt="" />
            <img src={picture2} alt="" />
            <img src={picture3} alt="" />
            <img src={picture4} alt="" />
        </div>
        <div className="right-r">
            {/* <span>some reasons</span> */}
            <div>
                {/* <span>Why you</span> */}
                <span>About US</span>
                </div>

                <div className='details-r'>
                <div>
                  <img src={tick} alt=""></img>
                  <span>OVER 200+ COACHES AND 50 BRANCHES</span>
                </div>
                <div>
                  <img src={tick} alt="" />
                  <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                  <img src={tick} alt="" />
                  <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                </div>
                <div>
                  <img src={tick} alt="" />
                  <span>RELAIBLE PARTNER</span>
                </div>
              </div>
              <div className='ptext'>
              <span>OUR PARTNERS</span>
              </div>
              <div className="partners">
                <img src={nb}  alt="" />
                <img src={addidas} alt="" />
                <img src={nike} alt="" />
              </div>
        </div>
        
    </div>
    </div>
  )
}

export default WhyUs
