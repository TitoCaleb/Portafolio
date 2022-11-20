import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About  from './components/Main/About/About';
import Services from './components/Main/Servicios/Services';
import Portafolio from './components/Main/Portafolio/Portafolio';
import Contacto from './components/Main/Contacto/Contacto';
import './index.css'


function App (){
  return(
    <div>
      <Header/>
      <main>
        <About />
        <Services/>
        <Portafolio/>
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
