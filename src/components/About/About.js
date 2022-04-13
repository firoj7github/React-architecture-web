import React from 'react';
import './About.css'
import img6 from '../../image/shutterstock_247548433.0.jpg'
import img7 from '../../image/download.jpg'
import img8 from '../../image/Solomon-R-Guggenheim-Museum-by-Frank-Lloyd-Wright_GIF-Axel-de-Stampa_photo-mito-eus-stuadesign.jpg'


const About = () => {
    return (
        <div>
           <div className="last-total">
               
                <div className="last">
                <div className="last-1">
                    <img src={img6} alt="" />
                    <h2>Concept</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni omnis nostrum, quam quia consequuntur pariatur.</p>
                    <a href="">Learn More</a>
                    </div>
                    <div className="last-2">
                    <img src={img7} alt="" />
                    <h2>Bulding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni omnis nostrum, quam quia consequuntur pariatur.</p>
                    <a href="">Learn More</a>
                    </div>
                    <div className="last-3">
                    <img src={img8} alt="" />
                    <h2>Construction</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores placeat magni eveniet nulla architecto delectus.</p>
                    <a href="">Learn More</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;