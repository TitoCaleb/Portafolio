import React from 'react';
import './Contacto.css'

export default function Contacto(){
    return(
        <div id="contacto">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h2 className="sub-title">Contactame</h2>
                        <p><i className="fa-solid fa-paper-plane"></i>calebvideo1@gmail.com</p>
                        <p><i className="fa-sharp fa-solid fa-square-phone"></i>+51 940418900</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/calebcastro26/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/caleb-castro-perez-155bb4217/"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/TitoCaleb"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <a href="doc/CV_Caleb_Castro.pdf" download className="btn btn2">Descargar CV</a>
                    </div>
                    <div className="contact-right">
                        <form action="">
                            <input type="text" name="Name" placeholder="Tu nombre" required/>
                            <input type="email" name="Email" placeholder="Tu correo" required/>
                            <textarea name="Message" rows="6" placeholder="Tu mensaje"></textarea>
                            <button type="submit" className="btn btn2">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}