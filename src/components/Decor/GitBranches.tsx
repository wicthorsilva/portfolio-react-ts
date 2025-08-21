import React from "react";
import styles from "./GitBranches.module.css";

type Props = {
  accent?: string;   // cor das linhas
  opacity?: number;  // opacidade global do decor
  side?: "both" | "left" | "right";
};

const GitBranches: React.FC<Props> = ({ accent = "#7200fe", opacity = 0.35, side = "both" }) => {
  // strokeWidth e dash controlam “peso” e animação
  const strokeWidth = 1.2;

  return (
    <div className={styles.wrapper} aria-hidden>
      {(side === "both" || side === "left") && (
        <svg className={`${styles.svg} ${styles.left}`} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradLeft" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0" />
              <stop offset="60%" stopColor={accent} stopOpacity={opacity} />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
            <filter id="glowLeft">
              <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor={accent} floodOpacity="0.25"/>
            </filter>
          </defs>

          {/* “trunk” vertical */}
          <path
            d="M22,2 L22,98"
            stroke="url(#gradLeft)"
            strokeWidth={strokeWidth}
            className={styles.dashed}
            filter="url(#glowLeft)"
            fill="none"
          />

          {/* branches */}
          <path d="M22,15 C22,15 14,18 8,25" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>
          <path d="M22,34 C22,34 12,38 6,46" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>
          <path d="M22,53 C22,53 12,58 5,66" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>
          <path d="M22,72 C22,72 12,78 5,86" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>

          {/* nodes */}
          {[15,34,53,72].map((y,i)=>(
            <circle key={i} cx="22" cy={y} r="1.8" fill={accent} opacity={opacity} />
          ))}
        </svg>
      )}

      {(side === "both" || side === "right") && (
        <svg className={`${styles.svg} ${styles.right}`} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradRight" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0" />
              <stop offset="60%" stopColor={accent} stopOpacity={opacity} />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
            <filter id="glowRight">
              <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor={accent} floodOpacity="0.25"/>
            </filter>
          </defs>

          <path
            d="M78,2 L78,98"
            stroke="url(#gradRight)"
            strokeWidth={strokeWidth}
            className={styles.dashed}
            filter="url(#glowRight)"
            fill="none"
          />

          <path d="M78,20 C78,20 88,24 95,31" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>
          <path d="M78,39 C78,39 88,44 96,52" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>
          <path d="M78,58 C78,58 88,64 96,72" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>
          <path d="M78,77 C78,77 88,84 96,92" stroke={accent} strokeOpacity={opacity} strokeWidth={strokeWidth} className={styles.dashed} fill="none"/>

          {[20,39,58,77].map((y,i)=>(
            <circle key={i} cx="78" cy={y} r="1.8" fill={accent} opacity={opacity} />
          ))}
        </svg>
      )}
    </div>
  );
};

export default GitBranches;
