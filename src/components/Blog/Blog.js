import React from 'react';
import './Blog.css'
import img from '../../image/img1.png'

const Blog = () => {
    return (
        <div>
               <div className="main-part">
                <div className="main-title">
                    <h1>Build On A Strong Foundation</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quos minus recusandae,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nam.

                        
                    </p>
                    
                   
                
                
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;