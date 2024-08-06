import React, { useEffect, useRef, useState } from "react";

import styles from "./Project.module.css";
import imghelppet from "./img/landingpage-helppet.png";
import imgMKT from "./img/project-landpage.png";
import imgBarber from "./img/barber-lup.png";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (projectsRef.current) {
                const sectionTop = projectsRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight * 0.6;
                if (sectionTop - windowHeight < 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return(
        <section 
        ref={projectsRef}
        id="projects" 
        className={`${styles.containerProjects} ${isVisible ? styles.show : ""}`}
        >
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