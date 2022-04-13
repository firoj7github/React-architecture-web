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
import logo5 from '../../image/kisspng-architecture-interior-design-services-illustration-a-man-with-a-hat-5aa735962c6a17.6886364815209076701819-removebg-preview.png'
import logo6 from '../../image/VisualsStock_AK64737-removebg-preview.png'



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
                <div className="all">
                <small className='title-1'>We are a team of planers, archtects</small> <br />
                
                <small className='title-2'>landscape arhitects and interior designers</small>
                </div>
                
                <div className="service-all">
                <div className="item-1">
                   <h3>1</h3>
                   <h2>Archtecture</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt fugit! Consequatur excepturi cum perferendis?</p>
                   <div className="line"></div>
                  
                </div>
                <div className="item-2">
                <h3>2</h3>
                    <h2>Interior Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt fugit! Consequatur excepturi cum perferendis?</p>
                    <div className="line"></div>
                </div>
                <div className="item-3">
                <h3>3</h3>
                   <h2>Art Planing</h2>
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
                <div className="line-flow">
                <div className="line-7"></div>
                       <div className="line-6"></div>
                       <div className="line-5"></div>
                       <div className="line-1"></div>
                       <div className="line-2"></div>
                       <div className="line-3"></div>
                       <div className="line-4"></div>
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
            <div className="about-side">
                <h1>Our Team</h1>
                <div className="line-add">
                <div className="line-7"></div>
                       <div className="line-16"></div>
                       <div className="line-15"></div>
                       <div className="line-14"></div>
                       <div className="line-22"></div>
                       <div className="line-33"></div>
                       <div className="line-45"></div>
                   </div>
                  
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

            <div className="footer">
                <div className="footer-1">
                <h3>Our Location</h3>
                <div className="flow"></div>
                <p>Gazipur</p>
                <p>Khulna</p>
                <p>Dhaka</p>
                <p>Kushtia</p>
                </div>
                
                
                <div className="footer-2">
                    <h3>Get In Touch</h3>
                    <div className="flow"></div>
                    <p>Feedback</p>
                    <p>Help</p>
                    <p>Support</p>
                    <p>Where Should We Go Next?</p>
                </div>
                <div className="footer-3">
                    <h3>Our Story</h3>
                    <div className="flow"></div>
                    <p>About us</p>
                    <p>Design</p>
                    <p>Join</p>
                    <p>Architecture</p>
                </div>
                <div className="footer-4">
                    <h3>Best Designer</h3>
                    <div className="flow"></div>
                    <p> The art and technique of designing and building, as distinguished from the skills associated with construction.</p>
                  

                </div>
            </div>
        </div>
    );
};

export default Home;