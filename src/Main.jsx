import React from 'react'
import './App.css';
import 'animate.css';

import Techno from "./Techno"
import About from "./About"
import Contact from "./Contact"
import Projets from "./Projets"

function Main() {
    return (
        <div id="main">
            <header>     
                       <h1>Jonathan Oreja - Web Developer Fullstack</h1>
            </header>

        <section id="section1">

            
            <Projets/>
       </section>
      <section id="section2" >
            <Techno />
            <About/>
      </section>
      <footer>
          <h5>Jonathan Oreja  ©</h5>
      </footer>

        </div>
    )
}

export default Main
