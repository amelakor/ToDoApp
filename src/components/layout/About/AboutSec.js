import React from 'react';
import './about.css'

import pattern from '../../../images/imageFiles/pattern.png';


export default function AboutSec() {
    return (
        <React.Fragment>
            <div className="container-fluid about-section">
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-xs-12 boxes" style={{
                                     backgroundImage : `url(${pattern})`,
                                     backgroundSize : 'cover'
                                     
                                     }}>
                         <div className="row">
                         <div className="col-xl-6 col-md-6 col-xs-12">
                                <div className="item">
                                    <h1>10</h1>
                                    <p>years of<br/> experience</p>
                                    </div>
                             </div>

                             <div className="col-xl-6 col-md-6 col-xs-12">
                             <div className="item">
                                    <h1>500+</h1>
                                    <p>Projects<br/> delievered</p>
                                    </div>
                                    <div className="item">
                                    <h1>100+</h1>
                                    <p>happy <br/>clients</p>
                                    </div>
                             </div>

                             </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-xs-12">
                        <h1>About Us</h1>
                        <h2>We will help you to organize your day.</h2>
                        <a href="/about">See More </a>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}
