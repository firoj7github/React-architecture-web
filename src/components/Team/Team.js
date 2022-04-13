import React from 'react';
import './Team.css'
import logo5 from '../../image/kisspng-architecture-interior-design-services-illustration-a-man-with-a-hat-5aa735962c6a17.6886364815209076701819-removebg-preview.png'
import logo6 from '../../image/VisualsStock_AK64737-removebg-preview.png'

const Team = () => {
    return (
        <div>
                <div className="about-side-man">
                
               
                  
                <div className="about-detail">
                <div className="about-1">
                <div className="about-img-first">
                   <img src={logo5} alt="" />
                </div>
                <div className="about-title">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> <br /><br /> <small>Eng. Devid miller</small>  </p>
                   
                </div>
                </div>
                <div className="about-2">
                <div className="about-img-second">
                   <img src={logo6} alt="" />
                </div>
                <div className="about-header">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> <br /><br /> <small>Eng. Watson crick</small>  </p>
                </div>
                </div>
                
                </div>
                
            </div>
        </div>
    );
};

export default Team;