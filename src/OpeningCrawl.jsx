import React from 'react'

function OpeningCrawl({action}) {
    return (
        <div>
            <div>
                <button onClick={()=>action.launchMain()}>Passer l'introduction</button>
            </div>
            <section class="star-wars">

            <div className="crawl">
                <div className="title">
                <p>Jonathan Oreja</p>
                <h1>Web Developer Fullstack</h1>
                </div>
                <p>Diplômé (septembre 2017) du programme Grande Ecole de Grenoble Ecole de Management. J'ai commencé ma carrière sur des postes commerciaux et de gestion de projet dans le milieu des starts up.</p>
                 <p>En janvier 2020, J'ai entamé une reconversion professionnelle pour devenir Web Developer en suivant le bootcamp d'Ironhack.</p>
                <p>Je suis donc à la recherche d'un poste en tant que Web Developer Fullstack Junior dans une société qui pourra continuer à me faire progresser sur ce domaine... </p>
        </div>
        </section>
        </div>
    )
}

export default OpeningCrawl
