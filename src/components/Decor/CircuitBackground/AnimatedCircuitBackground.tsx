import React from "react";
import styles from "./AnimatedCircuitBackground.module.css";

type Props = {
  accent?: string;   // cor de destaque
  opacity?: number;  // opacidade das trilhas
  showOnMobile?: boolean;
};

const AnimatedCircuitBackground: React.FC<Props> = ({
  accent = "#7200fe",
  opacity = 0.35,
  showOnMobile = false,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${showOnMobile ? styles.mobileOn : ""}`}
      aria-hidden
    >
      {/* grade sutil */}
      <div className={styles.grid} />

      {/* Cluster topo-esquerda */}
      <svg className={`${styles.cluster} ${styles.topLeft}`} viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glowTL">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={accent} floodOpacity="0.35" />
          </filter>
        </defs>

        {/* trilhas */}
        <path d="M30 40 L140 40 L140 120 L220 120" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>
        <path d="M30 80 L110 80 L110 180 L170 180" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>
        <path d="M60 140 L140 140 L140 220" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>
        <path d="M90 200 L200 200" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>

        {/* nós */}
        {[{x:140,y:40},{x:140,y:120},{x:220,y:120},{x:110,y:80},{x:110,y:180},{x:170,y:180},{x:140,y:140},{x:140,y:220},{x:200,y:200}].map((n,i)=>(
          <g key={i} filter="url(#glowTL)">
            <circle cx={n.x} cy={n.y} r="4.2" fill={accent} opacity={opacity} />
            <circle cx={n.x} cy={n.y} r="7" fill="none" stroke={accent} strokeOpacity="0.25" />
            <circle cx={n.x} cy={n.y} r="4.2" className={styles.pulse} />
          </g>
        ))}
      </svg>

      {/* Cluster base-direita */}
      <svg className={`${styles.cluster} ${styles.bottomRight}`} viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glowBR">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor={accent} floodOpacity="0.35" />
          </filter>
        </defs>

        <path d="M270 260 L160 260 L160 180 L90 180" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>
        <path d="M270 220 L200 220 L200 120 L130 120" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>
        <path d="M240 160 L160 160 L160 80" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>
        <path d="M210 100 L100 100" stroke={accent} strokeOpacity={opacity} strokeWidth="2" fill="none" className={styles.dash}/>

        {[{x:160,y:260},{x:160,y:180},{x:90,y:180},{x:200,y:220},{x:200,y:120},{x:130,y:120},{x:160,y:160},{x:160,y:80},{x:100,y:100}].map((n,i)=>(
          <g key={i} filter="url(#glowBR)">
            <circle cx={n.x} cy={n.y} r="4.2" fill={accent} opacity={opacity} />
            <circle cx={n.x} cy={n.y} r="7" fill="none" stroke={accent} strokeOpacity="0.25" />
            <circle cx={n.x} cy={n.y} r="4.2" className={styles.pulse} />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedCircuitBackground;
