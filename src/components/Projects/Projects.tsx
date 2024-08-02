import React from "react";

import styles from "./Project.module.css";
import imghelppet from "./img/landingpage-helppet.png"

const Projects = () => {
    return(
        <section id="projects" className={styles.containerProjects}>
            <h2>Projetos</h2>
            <div className={styles.contentProjects}>
                

                <div className={styles.cardsProject}>

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