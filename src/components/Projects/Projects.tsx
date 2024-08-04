import React from "react";

import styles from "./Project.module.css";
import imghelppet from "./img/landingpage-helppet.png";
import imgMKT from "./img/project-landpage.png";
import imgBarber from "./img/barber-lup.png";

const Projects = () => {
    return(
        <section id="projects" className={styles.containerProjects}>
            <h2>Projetos</h2>
            <div className={styles.contentProjects}>
                

                <div className={styles.cardsProject}>

                    <div className={styles.boxProject}>
                        <img src={imghelppet} alt="landing-Page"/>
                        <div className={styles.info}>
                            <h1>LandingPage HelpTep</h1>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                    <div className={styles.boxProject}>
                        <img src={imgMKT} alt="landing-Page"/>
                        <div className={styles.info}>
                            <h1>Landing Page</h1>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                    <div className={styles.boxProject}>
                        <img src={imgBarber} alt="landing-Page"/>
                        <div className={styles.info}>
                            <h1>LandingPage BarberLup</h1>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                    <div className={styles.boxProject}>
                        <img src={imghelppet} alt="landing-Page"/>
                        <div className={styles.info}>
                            <h1>Landing Page</h1>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                    <div className={styles.boxProject}>
                        <img src={imghelppet} alt="landing-Page"/>
                        <div className={styles.info}>
                            <h1>Landing Page</h1>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                    <div className={styles.boxProject}>
                        <img src={imghelppet} alt="landing-Page"/>
                        <div className={styles.info}>
                            <h1>Landing Page</h1>
                            <button>Saiba Mais</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects;