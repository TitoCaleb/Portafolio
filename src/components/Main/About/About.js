import React from 'react';
import user from '../../../assets/imgs/user.png'
import './About.css'

// let tablinks = document.getElementsByClassName('tab-links');
// let tabcontents = document.getElementsByClassName('tab-contents');

// function openTab(tabname){
//     for (let tablink of tablinks){
//         tablink.classList.remove('active-link');
//     }
//     for (let tabcontent of tabcontents){
//         tabcontent.classList.remove('active-tab');
//     }

//     event.currentTarget.classList.add('active-link')
//     document.getElementById(tabname).classList.add('active-tab')
// }

export default function About() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={user} alt="yo"/>
                    </div>
                    <div className="about-col-2">
                        <h2 className="sub-title">Sobre mi</h2>
                        <p>Mi nombre es Caleb Castro soy de Lima, Perú, egresado de la carrera de Ingenieria de Sistemas.
                            Tengo mucha soltura para comunicarme además de que sé trabajar muy bien en equipo.</p>

                        <div className="tab-titles">
                            <p className="tab-links active-link" onClick="openTab('skills')">Habilidades</p>
                            <p className="tab-links" onClick="openTab('experiencia')">Expericencia</p>
                            <p className="tab-links" onClick="openTab('educacion')">Educación</p>
                        </div>

                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li><span>HTML/CSS</span><br/>Desarrollo de páginas web responsive</li>
                                <li><span>JavaScript</span><br/>Manejo de logica de programación</li>
                                <li><span>SAPUI5</span><br/>Desarrollo de aplicaciones en SAP Fiori</li>
                                <li><span>React</span><br/>Creación de interfaces interactivas</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="experiencia">
                            <ul>
                                <li><span>2022 - 2024 / CSTI CORP</span><br/>Desarrollo de aplicaciones con SAP Fiori - SAPUI5</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="educacion">
                            <ul>
                                <li><span>Ingeniero de Sistemas</span><br/>Universidad Privada del Norte</li>
                                <li><span>Full Stack Developer</span><br/>CodeCademy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}