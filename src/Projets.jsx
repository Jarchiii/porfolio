import React from 'react'
import {  Link } from 'react-router-dom';


function Projets() {
    return (
        <div  id="wrapper_projets">
            <div className="animate__animated animate__bounceIn" id="tetris" className="projet">
                <a href="https://tetris-app-with-react.herokuapp.com/">
                <h2>Tetris</h2>
                </a>
            </div>
            <div className="animate__animated animate__bounceIn" id="client" className="projet">
                <h2>
                    Clients List
                </h2>
            </div>
            <div className="animate__animated animate__bounceIn" id="martine" className="projet">
                <a href="https://tu-peux-te-brosser-martine.herokuapp.com">
                <h2>
                    Tu peux te brosser Martine ! 
                </h2>
                </a>
            </div>
            <div className="animate__animated animate__bounceIn" id="pendu" className="projet">
                <a href="https://jeu-du-pendu-react.herokuapp.com">
                <h2>
                    Le Jeu du Pendu
                </h2>
                </a>
            </div>
            <div className="animate__animated animate__bounceIn" id="vintage" className="projet">
                <a href="https://book-photo.herokuapp.com">
                <h2>
                My Vintage Trips
                </h2>
                </a>
            </div>
            <div className="animate__animated animate__bounceIn" id="ollie" className="projet">
                <a href="https://ollie-front.herokuapp.com">
                <h2>Ollie</h2>
                </a>
                
            </div>
            <div className="animate__animated animate__bounceIn" id="cliché" className="projet">
                <a href="https://cliche-app.herokuapp.com">
                <h2>Cliché</h2>
                </a>
            </div>
            <div className="animate__animated animate__bounceIn" id="mordor" className="projet">
                <a href="https://jarchiii.github.io/Lotr-projectGame">
                <h2>Journey to Mordor</h2>
                </a>
            </div>
            
        </div>
    )
}

export default Projets
