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

                    <a href="https://www.behance.net/wicthordev" target="_blank">
                        <div className={styles.cardBox}>
                            <img src={iconBehance} alt="Icon-Behance" />
                        </div>
                    </a>

                    <a href="https://github.com/wicthorsilva" target="_blank">
                        <div className={styles.cardBox}>
                            <img src={icongithub} alt="Icon-GitHub" />
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/wicthor-silva-b10809251/" target="_blank">
                        <div className={styles.cardBox}>
                            <img src={iconlinkedin} alt="Icon-linkedin" />
                        </div>
                    </a>

                </div>

                <h5>Desenvolvido por Wicthor</h5>
            </div>

        </section>
    )
}

export default Footer;