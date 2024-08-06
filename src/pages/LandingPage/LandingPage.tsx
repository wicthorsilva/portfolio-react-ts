import React from "react";

import styles from "./LandingPage.module.css";

import About from "../../components/About";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const LandingPage = () => {
    return(
        <>
            <Header />
            <div className={styles.containerPage}>
                <About />
                <Projects />
            </div>
            <Contact />
        </>
    )
}

export default LandingPage;