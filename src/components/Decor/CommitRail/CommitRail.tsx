import React from "react";
import styles from "./CommitRail.module.css";

type CommitRailProps = {
  accent?: string;          // cor principal (seu roxo)
  opacity?: number;         // opacidade do traço
  nodes?: number[];         // posições (em %) dos nós ao longo da seção
  merges?: Array<{ y: number; side: "left" | "right" }>; // arcos de merge
};

const CommitRail: React.FC<CommitRailProps> = ({
  accent = "#7200fe",
  opacity = 0.45,
  nodes = [10, 35, 60, 85],
  merges = [{ y: 30, side: "left" }, { y: 70, side: "right" }],
}) => {
  return (
    <div className={styles.rail} aria-hidden>
      <svg className={styles.svg} viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="railGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0"/>
            <stop offset="15%" stopColor={accent} stopOpacity={opacity}/>
            <stop offset="85%" stopColor={accent} stopOpacity={opacity}/>
            <stop offset="100%" stopColor={accent} stopOpacity="0"/>
          </linearGradient>
          <filter id="railGlow">
            <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor={accent} floodOpacity="0.25"/>
          </filter>
        </defs>

        {/* linha principal */}
        <path
          d="M50 1 L50 99"
          stroke="url(#railGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          className={styles.dashed}
          filter="url(#railGlow)"
          fill="none"
        />

        {/* merges laterais */}
        {merges.map((m, i) => {
          const dir = m.side === "left" ? -1 : 1;
          // Arco suave tipo “branch”
          const d = `M50 ${m.y} C ${50 + 12*dir} ${m.y-6}, ${50 + 12*dir} ${m.y+6}, 50 ${m.y+12}`;
          return (
            <path
              key={i}
              d={d}
              stroke={accent}
              strokeOpacity={opacity}
              strokeWidth="1.4"
              fill="none"
              className={styles.dashed}
            />
          );
        })}

        {/* nós */}
        {nodes.map((y, i) => (
          <g key={i}>
            <circle cx="50" cy={y} r="3.2" fill={accent} opacity={opacity}/>
            <circle cx="50" cy={y} r="5.4" fill="none" stroke={accent} strokeOpacity={0.2}/>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default CommitRail;
