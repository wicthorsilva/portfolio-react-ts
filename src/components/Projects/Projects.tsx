import React from "react";
import styles from "./Project.module.css";

import imgHelppet from "./img/landingpage-helppet.png";
import imgMKT from "./img/project-landpage.png";
import imgBarber from "./img/barber-lup.png";

const projectList = [
    {
        title: "LandingPage HelpTep",
        description: "Plataforma de agendamento com interface simples e responsiva.",
        image: imgHelppet,
        tags: ["React", "CSS", "Responsivo"],
        github: "https://github.com/seuusuario/helptep",
        demo: "#"
    },
    {
        title: "Landing Page Marketing",
        description: "Página para apresentação de serviços com foco em conversão.",
        image: imgMKT,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/seuusuario/marketing",
        demo: "#"
    },
    {
        title: "LandingPage BarberLup",
        description: "Site institucional para barbearia com agendamento online.",
        image: imgBarber,
        tags: ["React", "Firebase"],
        github: "https://github.com/seuusuario/barberlup",
        demo: "#"
    }
];

const Projects = () => {
    return (
        <section className={styles.projectsSection} id="projects">
            <h2><span className={styles.hash}>#</span> Projetos em Destaque</h2>
            <div className={styles.projectGrid}>
                {projectList.map((proj, index) => (
                    <div className={styles.projectCard} key={index}>
                        <img src={proj.image} alt={proj.title} className={styles.projectImage} />
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{proj.title}</h3>
                            <p className={styles.projectDescription}>{proj.description}</p>

                            <div className={styles.tags}>
                                {proj.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <div className={styles.links}>
                                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>}
                                {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Demo</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
