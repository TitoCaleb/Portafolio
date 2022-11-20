import React from 'react';
import './Portafolio.css';
import Work1 from '../../../assets/imgs/work-1.png';
import Work2 from '../../../assets/imgs/work-2.png';
import Work3 from '../../../assets/imgs/work-3.png';

export default function Portafolio(){
    return(
        <div id="portafolio">
            <div className="container">
                <h2 className="sub-title">Mi trabajo</h2>
                <div className="work-list">
                    <div className="work">
                        <img src={Work1} alt="Work1"/>
                        <div className="layer">
                            <h4>Social Media App</h4>
                            <p>The app connects you yo the talented people around the world.
                                Download it from play store.</p>
                            <a href="https://github.com/" target='_blank' rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={Work2} alt="Work2"/>
                        <div className="layer">
                            <h4>Music App</h4>
                            <p>The app connects you yo the talented people around the world.
                                Download it from play store.</p>
                            <a href="https://github.com/" target='_blank' rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={Work3} alt="Work3"/>
                        <div className="layer">
                            <h4>Online Shopping App</h4>
                            <p>The app connects you yo the talented people around the world.
                                Download it from play store.</p>
                            <a href="https://github.com/" target='_blank' rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}