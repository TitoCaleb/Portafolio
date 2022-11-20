import React from 'react';
import './Services.css'

export default function Services(){
    return(
        <div id="services">
            <div className="container">
                <h2 className="sub-title">Servicios</h2>
                <div className="service-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h3>Web Design</h3>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolorem sunt fuga officiis tempora expedita animi quod veritatis voluptas et pariatur eaque error provident ipsam laborum quo, praesentium quis eius?</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-phoenix-squadron"></i>
                        <h3>Sap Fiori Developer</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolorem sunt fuga officiis tempora expedita animi quod veritatis voluptas et pariatur eaque error provident ipsam laborum quo, praesentium quis eius?</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-crop"></i>
                        <h3>Web Design</h3>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolorem sunt fuga officiis tempora expedita animi quod veritatis voluptas et pariatur eaque error provident ipsam laborum quo, praesentium quis eius?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}