import React from 'react';
import './Header.css'
import logo from '../../assets/imgs/logo-caleb.png'


export default function Header(){
    return (
        <header>
        <div className="container">
            <nav>
                <img src={logo} alt="logo" className="logo"/>
                <ul id="sideMenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">Sobre mi</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#portafolio">Portafolio</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    {/* <i className="fas fa-times"></i> */}
                </ul>
                {/* <i className="fas fa-bars"></i> */}
            </nav>
        </div>
        <div className="header-text">
            <p>Software Developer</p>
            <h1>Hola, soy <span>Caleb</span><br/> Castro de Perú</h1>
        </div>
    </header>
    )
}
