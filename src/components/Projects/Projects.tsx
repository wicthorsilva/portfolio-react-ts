import React, { useState } from "react";
import styles from "./Project.module.css";

// import imgHelppet from "./img/landingpage-helppet.png";
// import imgMKT from "./img/project-landpage.png";
// import imgBarber from "./img/barber-lup.png";
// import imgSentinel from "./img/telalogin-sentinel.png";

import projectList from "./projectList.json";
import ProjectModal, { ProjectItem } from "./ProjectModal/ProjectModal";

const Projects = () => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<ProjectItem | null>(null);

    const openModal = (proj: ProjectItem) => {
        setSelected(proj);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelected(null);
    };

    return (
        <section className={styles.projectsSection} id="projects">
            <h2><span className={styles.hash}>#</span> Projetos em Destaque</h2>

            <div className={styles.projectGrid}>

                {projectList.map((proj, index) => (
                    <div className={styles.projectCard} key={index}>

                        <img
                            src={(proj as any).images?.[0] ?? "/images/placeholder.png"}
                            alt={proj.title} className={styles.projectImage}
                        />

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
                                {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Visitar </a>}

                                <button type="button" onClick={() => openModal(proj as unknown as ProjectItem)}>
                                    Galeria
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ProjectModal open={open} onClose={closeModal} project={selected} />
        </section>
    );
};

export default Projects;
