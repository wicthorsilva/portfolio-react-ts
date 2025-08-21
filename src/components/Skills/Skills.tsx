import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

// Importação de ícones
import htmlIcon from "./icons/icons8-html.svg";
import cssIcon from "./icons/icons8-css.svg";
import jsIcon from "./icons/icons8-javascript.svg";
import reactIcon from "./icons/icons8-react-96.png";
import nodeIcon from "./icons/icons8-nodejs.svg";
import tsIcon from "./icons/icons8-typescript.svg";
import bootstrapIcon from "./icons/icons8-bootstrap.svg";
import figmaIcon from "./icons/icons8-figma.svg";
import muiIcon from "./icons/icons8-material-ui.svg";
import viteIcon from "./icons/icons8-vite.svg";
import mySqlIcon from "./icons/icons8-mysql-96.png";
import postgresIcon from "./icons/icons8-postgres.svg";
import ElementoIcon from "./icons/icons8-elementor.svg";
import wordpresIcon from "./icons/icons8-wordpress.svg";

interface Skill {
  icon: string;
  name: string;
}

const skillsData: Skill[] = [
  { icon: htmlIcon, name: "HTML5" },
  { icon: cssIcon, name: "CSS3" },
  { icon: muiIcon, name: "Material UI" },
  { icon: bootstrapIcon, name: "Bootstrap" },
  { icon: jsIcon, name: "JavaScript" },
  { icon: tsIcon, name: "TypeScript" },
  { icon: reactIcon, name: "React" },
  { icon: viteIcon, name: "Vite" },
  { icon: nodeIcon, name: "Node.js" },
  { icon: figmaIcon, name: "Figma" },
  { icon: mySqlIcon, name: "MySQL" },
  { icon: postgresIcon, name: "PostgreSQL" },
  { icon: wordpresIcon, name: "Wordpres" },
  
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.containerSkills} ${showSection ? styles.show : ""}`}
      ref={sectionRef}
    >
      <h2>Habilidades Técnicas</h2>

      <div className={styles.contentCards}>
        {skillsData.map((skill, index) => (
          <div className={styles.boxCard} key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
