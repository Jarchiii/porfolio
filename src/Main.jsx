import React from 'react'
import './App.css';

import Techno from "./Techno"
import About from "./About"
import Contact from "./Contact"
import Projets from "./Projets"

function Main() {
    return (
        <div>
        <section id="section1">
            <h1>Jonathan Oreja - Web Developer Fullstack</h1>

            <h2>Mes projets : </h2>
            <Projets/>
       </section>
      <section id="section2" >
            <Techno/>
            <About/>
      </section>

        </div>
    )
}

export default Main
