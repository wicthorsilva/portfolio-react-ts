import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

import youtubeIcon from "./img/icons/icons8-youtube.svg"
import linkedinIcon from "./img/icons/icons8-linkedin.svg"
import behenceIcon from "./img/icons/icons8-behance.svg"
import githubIcon from "./img/icons/icons8-github.svg"

const Navbar = () => {

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <nav className={styles.contentNavbar}>
            <div className={styles.logo}>
                <h2>Wicthor Dev</h2>
            </div>

            <ul className={styles.menu}>
                <li onClick={() => handleScroll("header")}>
                    Início
                </li>
                <li onClick={() => handleScroll("about")}>
                    Sobre mim
                </li>
                <li onClick={() => handleScroll("projects")}>
                    Projetos
                </li>
                <li onClick={() => handleScroll("contact")}>
                    Contato
                </li>
            </ul>

            {/* <div className={styles.redesIcon}>
                        <img src={githubIcon} alt="githubIcon" />
                        <img src={linkedinIcon} alt="linkedinIcon" />
                        <img src={behenceIcon} alt="behenceIcon" />
                        <img src={youtubeIcon} alt="youtubeIcon" />
                    </div> */}
        </nav>
    )
}

export default Navbar;