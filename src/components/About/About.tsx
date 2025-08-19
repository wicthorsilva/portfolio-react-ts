import React from "react";

import styles from "./About.module.css";

import posterImg from "./img/poster-wicthor-img2.png";
import Skills from "../Skills";

const About = () => {
  return (
    <div className={styles.container}>
      <section id="about" className={styles.section}>
        <h2><span className={styles.hash}>#</span>Sobre mim</h2>

        <div className={styles.content}>
          {/* <div className={styles.poster}>
            <img src={posterImg} alt="Poster" />
          </div> */}

          <div className={styles.text}>
            <p>Meu nome é Wicthor Silva, sou formado em Análise e Desenvolvimento de Sistemas e possuo qualificação em desenvolvimento de software FullStack pelo Comeia Academy.</p>
            <p>Sou uma pessoa curiosa e gosto de aprender e descobrir coisas novas. Desejo expandir meu conhecimento na área de desenvolvimento de software e contribuir para projetos que impactem positivamente a vida das pessoas.</p>
            <p>Gosto de trabalhar em equipe e manter uma boa comunicação, prezando pela proatividade e pela criação de um ambiente humanizado.</p>
          </div>
        </div>
      </section>

      {/* <section className={styles.section}>
        <h2><span className={styles.hash}>#</span>Skills</h2>
        <Skills />
      </section> */}
    </div>
  );
};

export default About;