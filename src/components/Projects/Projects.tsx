import React from "react";
import styles from "./Project.module.css";

import imgHelppet from "./img/landingpage-helppet.png";
import imgMKT from "./img/project-landpage.png";
import imgBarber from "./img/barber-lup.png";
import imgSentinel from "./img/telalogin-sentinel.png";

const projectList = [
    {
        title: "LandingPage HelpTep",
        description: "Plataforma de agendamento com interface simples e responsiva.",
        image: imgHelppet,
        tags: ["React", "TypeScript", "CSS"],
        github: "https://github.com/wicthorsilva/HelpPet-landingpage",
        demo: "https://help-pet-landingpage.vercel.app/"
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
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/wicthorsilva/project-barberlup",
        demo: "https://wicthorsilva.github.io/project-barberlup/index.html"
    },
    {
        title: "NetSentinel",
        description: "Aplicação de escaneamento de rede interna para ajudar no monitoramento.",
        image: imgSentinel,
        tags: ["React", "TypeScript", "CSS", "node.js", "TypeORM", "Python", "nmap"],
        // github: "https://github.com/wicthorsilva/project-barberlup",
        demo: "https://wicthorsilva.github.io/project-barberlup/index.html"
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
                                {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Ver Mais</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
