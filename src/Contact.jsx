import React from 'react'
import {  Link } from 'react-router-dom';


function Contact() {
    return (
        <div id="contact">
             <h3> Contact:</h3>
            <p><span>Mail :</span> orejajonathan@gmail.com</p>
            <p><span>Tel :</span> 06 09 95 80 36</p>
            <div>
                <a href="https://www.linkedin.com/in/jonathan-oreja/">
            <img className="logoContact" src="./linkedin.svg"></img>
            </a>
            <Link to="./cv.pdf">
            <img className="logoContact" src="./cv.svg"></img>
            </Link>
            </div>
          
            
        </div>
    )
}

export default Contact
