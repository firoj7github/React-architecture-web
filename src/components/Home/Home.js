import React from 'react';
import './Home.css'
import img from '../../image/img1.png'
import img1 from '../../image/101.png'
import img2 from '../../image/Untitled-4.png'
import img3 from '../../image/org-removebg-preview.png'
import img4 from '../../image/Untitled-6.png'
import img5 from '../../image/Untitled-3.png'
import img6 from '../../image/shutterstock_247548433.0.jpg'
import img7 from '../../image/download.jpg'
import img8 from '../../image/Solomon-R-Guggenheim-Museum-by-Frank-Lloyd-Wright_GIF-Axel-de-Stampa_photo-mito-eus-stuadesign.jpg'



const Home = () => {
    return (
        <div>
            <div className="head-total-part">
                <div className="head-part">
                    <div className="head-1">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, nesciunt dicta! Sapiente illo non vitae ut voluptates dolore soluta pariatur!</p>
                        <a href="">View More</a>
                    </div>
                    <div className="head-2">
                        <h1>The Future is Here</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, debitis.</p>
                    </div>
                </div>


            </div>


            <div className="service">
                <h2>We are a team of planers, archtects, landscape arhitects and interior designers</h2>
                <div className="service-all">
                <div className="item-1">
                   <h3>1</h3>
                   <h1>Archtecture</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt fugit! Consequatur excepturi cum perferendis?</p>
                   <div className="line"></div>
                  
                </div>
                <div className="item-2">
                <h3>2</h3>
                    <h1>Interior Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt fugit! Consequatur excepturi cum perferendis?</p>
                    <div className="line"></div>
                </div>
                <div className="item-3">
                <h3>3</h3>
                   <h1>Art Planing</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt fugit! Consequatur excepturi cum perferendis?</p>
                   <div className="line"></div>
                </div>
               
                </div>
            </div>


            <div className="about">
                
                <div className="manage-img">
                <div className="about-img-1">
                    <img src={img2} alt="" />
                    <h3>Let's Work Together</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis esse iste odio natus similique. Omnis facilis voluptas voluptatibus asperiores magnam aspernatur sint molestias enim.</p>
                    
                </div>
                <div className="about-img-2">
                    <h2>About Us</h2>
                    <img src={img1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis esse iste odio natus similique. Omnis facilis voluptas voluptatibus asperiores magnam aspernatur sint molestias enim.</p>
                    <a href="">Learn More</a>
                </div>
                </div>
               
            </div>

            <div className="main">
                <div className="main-title">
                    <h1>Build On A Strong Foundation</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quos minus recusandae,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam.

                        
                    </p>
                    
                   
                
                
                    <img src={img} alt="" />
                </div>
            </div>


            <div className="last-total">
                <h1>Our Bulding Process</h1>
                <div className="line-all">
                    <div className="line-first"></div>
                    <div className="line-second"></div>
                    <div className="line-third"></div>
                    <div className="line-fourth"></div>
                    <div className="line-fifth"></div>
                </div>
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

export default Home;