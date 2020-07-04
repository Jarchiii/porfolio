import React from 'react'
import './App.css';

import Techno from "./Techno"
import About from "./About"
import Contact from "./Contact"
import Projets from "./Projets"

function Main() {
    return (
        <div>
            <h1>Jonathan Oreja - Web Developer Fullstack</h1>
      <Techno/>
      <Projets/>
      <div>
      <About/>
      <Contact/>
      </div>
        </div>
    )
}

export default Main
