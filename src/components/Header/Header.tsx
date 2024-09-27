import React from "react";
import Lottie from "lottie-react";
import styles from "./Header.module.css";
import TechAnimation from "./animation/AnimationHeader.json";
import Photo from "./img/Intelligence-Technology.png";

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

                <div className={styles.titleAndImg}>
                    <div className={styles.titlePage}>
                        <h1>Olá, meu nome é Wicthor</h1>
                        <h4>Sou desenvolvedor Full Stack</h4>
                        
                        <div className={styles.btnFalacomigo} onClick={() => handleScroll("contact")}>
                            <p>Entre em contato</p>
                        </div>
                    </div>
                    <div className={styles.circle}>
                        <img src={Photo} alt="Foto" />
                    </div>

                    <div className={styles.circle2}></div>
                </div>

            </div>
        </header>
    );
};

export default Header;
