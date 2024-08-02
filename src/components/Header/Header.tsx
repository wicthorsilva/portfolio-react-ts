import React from "react";

import styles from "./Header.module.css";


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

                <div className={styles.titlePage}>
                    <h1>Wicthor Luiz</h1>
                    <h4>Front-End Developer</h4>

                    <div className={styles.btnFalacomigo} onClick={()=>handleScroll("contact")}>
                        <h5>Fale comigo</h5>
                    </div>

                </div>

            </div>
        </header>
    )
}

export default Header;