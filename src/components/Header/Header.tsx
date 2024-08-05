import React from "react";
import Lottie from "lottie-react";
import styles from "./Header.module.css";
import TechAnimation from "./animation/AnimationHeader.json";

const Header = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header id="header" className={styles.containerHeader}>
            <div className={styles.headerBackcoler}>
                <Lottie 
                    animationData={TechAnimation} 
                    className={styles.lottieBackground} 
                    loop 
                    autoplay 
                />
                <div className={styles.titlePage}>
                    <h1>Wicthor Silva</h1>
                    <h4>Full Stack Developer</h4>
                    <div className={styles.btnFalacomigo} onClick={() => handleScroll("contact")}>
                        <p>Entre em contato</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
