import React from "react";

const TechWires: React.FC<{ accent?: string; opacity?: number }> = ({ accent = "#7200fe", opacity = 0.18 }) => (
    <svg
        aria-hidden
        style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >

        <defs>
            <linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0" />
                <stop offset="50%" stopColor={accent} stopOpacity={opacity} />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
        </defs>

        {/* diagonais leves */}
        <path d="M-10 20 L110 80" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" />
        <path d="M-10 10 L110 60" stroke="url(#wireGrad)" strokeWidth="0.6" fill="none" />
        <path d="M-10 40 L110 95" stroke="url(#wireGrad)" strokeWidth="0.6" fill="none" />
        <path d="M-5 70 L105 20" stroke="url(#wireGrad)" strokeWidth="0.7" fill="none" />
    </svg>
);

export default TechWires;
