import React from 'react'
import Contact from './Contact'

function About() {
    return (
        <div id="wrapper_about">
            <h3 id="aboutTitle"> // A propos de moi </h3>

            <p id="text">
       
            Diplômé (septembre 2017) du programme Grande Ecole de <span>Grenoble Ecole de Management.</span> J'ai commencé ma carrière sur des postes commerciaux et de gestion de projet dans le milieu des starts up. En janvier 2020, J'ai entamé une <span>reconversion professionnelle pour devenir Web Developer</span>en suivant le bootcamp d'<span>Ironhack</span>.<br/> <br/>
            Je suis donc <span>à la recherche d'un poste en tant que Web Developer Fullstack Junior </span>dans une société qui pourra continuer à me faire progresser sur ce domaine. 
            </p>
            <Contact/>
           

        
            
        </div>
    )
}

export default About
