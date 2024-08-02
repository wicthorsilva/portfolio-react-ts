import React from "react";

import styles from "./Footer.module.css";

import iconBehance from "./img/behance.svg"
import icongithub from "./img/github.svg"
import iconlinkedin from "./img/linkedin.svg"

const Footer = () => {
    return(
        <section className={styles.sectionFooter}>

            <div className={styles.contentFooter}>

                <div className={styles.mediaFooter}>

                    <div className={styles.cardBox}>
                        <img src={iconBehance} alt="Icon-Behance" />
                    </div>
                    <div className={styles.cardBox}>
                        <img src={icongithub} alt="Icon-GitHub" />
                    </div>
                    <div className={styles.cardBox}>
                        <img src={iconlinkedin} alt="Icon-linkedin" />
                    </div>

                </div>

                <h5>Desenvolvido por Wicthor</h5>
            </div>

        </section>
    )
}

export default Footer;