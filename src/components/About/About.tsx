import React from "react";

import styles from "./About.module.css";

import posterImg from "./img/poster-wicthor-img2.png";
import Skills from "../Skills";

const About = () => {
    return(
        <section id="about" className={styles.contentAbout}>

            <div className={styles.about}>

                <div className={styles.posterImg}>
                    <img src={posterImg} alt="posterImg" />
                </div>

                <div className={styles.lineStyle}></div>

                <div className={styles.aboutText}>
                    <h1>Sobre mim</h1>
                    <p> 
                        Meu nome Wicthor, estou cursando Análise e Desenvolvimento 
                        de Sistemas. Tenho qualificação em desenvolvimento de 
                        software FullStack pelo Comeia Academy. Minha 
                        inclinação maior é para o Front-End, devido ao 
                        meu gosto por design gráfico.
                    </p>
                </div>
            </div>

            <div className={styles.contentSkills}>
                
                <Skills />
            </div>
        </section>
    )
}

export default About;