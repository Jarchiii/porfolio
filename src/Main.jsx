import React from 'react'
import './App.css';
import 'animate.css';

import Techno from "./Techno"
import About from "./About"
import Contact from "./Contact"
import Projets from "./Projets"
import Intro from "./Intro"

function Main() {
    return (
        <div id="main">
            <header>     
                       <h1>Mon porfolio</h1>
            </header>

        <section id="section0">
            <div className="animate__animated animate__bounceInRight" id="hello">
                Bonjour, je m'appelle Jonathan Oreja.
            </div>
        </section>
        
        <section id="section1">
            <h3 id="titleproject"> // Mes Projets</h3>

            
            <Projets/>
       </section>
      <section id="section2" >

            <Techno />
            <About/>
      </section>
      {/* <section id="section3"/>
      <WhyMe/>
      <section/> */}
      <footer>
          <h5>Jonathan Oreja  ©</h5>
      </footer>

        </div>
    )
}

export default Main
