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
                    Meu nome é Wicthor Silva, sou formado em Análise e Desenvolvimento de Sistemas e possuo qualificação em desenvolvimento de software FullStack pelo Comeia Academy. 
                    </p>
                    <p>
                    Sou uma pessoa curiosa e gosto de aprender e descobrir coisas novas. Desejo expandir meu conhecimento na área de desenvolvimento de software e contribuir para projetos que impactem positivamente a vida das pessoas.
                    </p>
                    <p>
                    Gosto de trabalhar em equipe e manter uma boa comunicação, prezando pela proatividade e pela criação de um ambiente humanizado.
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