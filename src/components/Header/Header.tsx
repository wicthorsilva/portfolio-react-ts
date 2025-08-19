import React from "react";
import Lottie from "lottie-react";
import styles from "./Header.module.css";
import TechAnimation from "./animation/AnimationHeader.json";
import Photo from "./img/Intelligence-Technology.png";
import posterImg from "../About/img/poster-wicthor-img2.png"

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
                {/* <Lottie
                    animationData={TechAnimation}
                    className={styles.lottieBackground}
                    loop
                    autoplay
                /> */}

                <div className={styles.titleAndImg}>

                    <div className={styles.titlePage}>
                        <h1><span>&#123;</span>Wicthor Silva<span>&#125;</span></h1>
                        <h4>&lt;Desenvolvedor Full Stack /&gt;</h4>

                        <div className={styles.btnFalacomigo} onClick={() => handleScroll("contact")}>
                            <p>Entre em contato</p>
                        </div>
                    </div>
                    <div className={styles.posterImg}>
                        <img src={posterImg} alt="posterImg" />
                    </div>
                    
                </div>

            </div>
        </header>
    );
};

export default Header;
