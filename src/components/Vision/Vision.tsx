import React from "react";
import styles from "./Vision.module.css";

const Vision = () => {
    return (
        <section id="vision" className={styles.section}>
            <h2>
                <span className={styles.hash}>#</span> Visão e Foco
            </h2>
            <p className={styles.intro}>
                O que busco alcançar e explorar nos próximos passos da minha jornada profissional:
            </p>

            <ul className={styles.list}>
                <li>&gt;  <strong>Aprofundar em Inteligência Artificial</strong> para construir soluções que aprendem, automatizam e otimizam processos reais.</li>

                <li>&gt;  <strong>Explorar cibersegurança e OSINT</strong>, construindo ferramentas que ajudem a proteger redes e dados de forma proativa.</li>

                <li>&gt;  <strong>Contribuir com projetos open-source</strong> e compartilhar conhecimento com a comunidade dev de forma ativa e consistente.</li>

                <li>&gt;  <strong>Atuar em projetos internacionais</strong>, evoluindo com equipes diversas e desafios globais.</li>

                <li>&gt;  <strong>Criar produtos digitais próprios</strong> voltados à resolução de problemas reais, com impacto direto no dia a dia de pessoas ou empresas.</li>

                <li>&gt;  <strong>Produzir conteúdos técnicos e tutoriais</strong> para ajudar outros desenvolvedores a aprenderem e crescerem na carreira.</li>
            </ul>

        </section>
    );
};

export default Vision;
