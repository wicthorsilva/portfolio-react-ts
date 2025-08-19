import React from "react";

import styles from "./LandingPage.module.css";

import About from "../../components/About";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import Vision from "../../components/Vision";
import Philosophy from "../../components/Philosophy/Philosophy";

const LandingPage = () => {
    return (
        <>

            <div className={styles.containerPage}>
                <Header />
                <About />
                <Skills />
                <Vision />
                <Philosophy />
                <Projects />
                <Contact />
            </div>
            
        </>
    )
}

export default LandingPage;