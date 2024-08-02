import React from "react";

import About from "../../components/About";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const LandingPage = () => {
    return(
        <>
            <Header />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default LandingPage;