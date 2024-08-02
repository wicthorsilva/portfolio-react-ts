import React from "react";

import styles from "./Skills.module.css";

import bootstrapIcon from "./icons/icons8-bootstrap.svg";
import cssIcon from "./icons/icons8-css.svg";
import figmaIcon from "./icons/icons8-figma.svg";
import htmlIcon from "./icons/icons8-html.svg";
import jsIcon from "./icons/icons8-javascript.svg";
import nodeIcon from "./icons/icons8-nodejs.svg";
import postgresIcon from "./icons/icons8-postgres.svg";
import reactIcon from "./icons/icons8-react-96.png";
import tsIcon from "./icons/icons8-typescript.svg";
import viteIcon from "./icons/icons8-vite.svg";
import mysql from "./icons/icons8-mysql-96.png"
import materialUi from "./icons/icons8-material-ui.svg"
import wordpress from "./icons/icons8-wordpress.svg"
import elementor from "./icons/icons8-elementor.svg"

const Skills = () => {
    return(
        <section>
            <div className={styles.containerSkills}>
                <h2>Hardskills</h2>
                <div className={styles.contentCards}>

                    <div className={styles.boxCard}>
                        <img src={htmlIcon} alt="htmlImg" />
                        <p>HTML</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={cssIcon} alt="cssImg" />
                        <p>CSS</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={jsIcon} alt="jSImg" />
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={reactIcon} alt="reactImg" />
                        <p>React</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={tsIcon }alt="reactImg" />
                        <p>TypeScript</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={nodeIcon }alt="reactImg" />
                        <p>Node js</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={bootstrapIcon }alt="reactImg" />
                        <p>Bootstrap</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={materialUi }alt="reactImg" />
                        <p>Material-Ui</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={figmaIcon }alt="reactImg" />
                        <p>Figma</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={postgresIcon }alt="reactImg" />
                        <p>PostgreSQL</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={mysql }alt="reactImg" />
                        <p>MySQL</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={viteIcon }alt="reactImg" />
                        <p>React Vite</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={wordpress }alt="reactImg" />
                        <p>Wordpress</p>
                    </div>
                    <div className={styles.boxCard}>
                        <img src={elementor }alt="reactImg" />
                        <p>Elementor</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills;