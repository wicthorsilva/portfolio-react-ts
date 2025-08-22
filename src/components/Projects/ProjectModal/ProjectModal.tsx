import React, { useEffect, useMemo, useState } from "react";
import styles from "./ProjectModal.module.css";

export type ProjectItem = {
    title: string;
    description: string;
    images?: string[];
    tags: string[];
    github?: string;
    demo?: string;
    details?: string; // texto longo opcional
};

type Props = {
    open: boolean;
    onClose: () => void;
    project?: ProjectItem | null;
};

const ProjectModal: React.FC<Props> = ({ open, onClose, project }) => {
    const images = useMemo(() => project?.images ?? [], [project]);
    const [idx, setIdx] = useState(0);

    // reset índice quando trocar de projeto
    useEffect(() => { setIdx(0); }, [project]);

    // fechar com ESC
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight" && images.length) setIdx(i => (i + 1) % images.length);
            if (e.key === "ArrowLeft" && images.length) setIdx(i => (i - 1 + images.length) % images.length);
        };
        document.addEventListener("keydown", onKey);
        // travar scroll do body
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open, images.length, onClose]);

    if (!open || !project) return null;

    const hasGallery = images && images.length > 0;

    const next = () => hasGallery && setIdx(i => (i + 1) % images.length);
    const prev = () => hasGallery && setIdx(i => (i - 1 + images.length) % images.length);

    return (
        <div className={styles.backdrop} onClick={onClose} aria-modal="true" role="dialog">
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <header className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>
                    {/* <button className={styles.close} onClick={onClose} aria-label="Fechar">✕</button> */}
                </header>

                <div className={styles.content}>
                    {/* Galeria */}
                    {hasGallery ? (
                        <div className={styles.gallery}>
                            <span className={styles.navLeft} onClick={prev} aria-label="Imagem anterior"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                            </svg></span>
                            <img
                                src={images[idx]}
                                alt={`${project.title} - imagem ${idx + 1}`}
                                className={styles.hero}
                            />
                            <span className={styles.navRight} onClick={next} aria-label="Próxima imagem">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </span>

                            {images.length > 1 && (
                                <div className={styles.thumbs}>
                                    {images.map((src, i) => (
                                        <button
                                            key={src + i}
                                            className={`${styles.thumbBtn} ${i === idx ? styles.active : ""}`}
                                            onClick={() => setIdx(i)}
                                            aria-label={`Selecionar imagem ${i + 1}`}
                                        >
                                            <img src={src} className={styles.thumb} alt={`${project.title} - miniatura ${i + 1}`} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className={styles.noImage}>Sem imagens cadastradas</div>
                    )}

                    {/* Descrições */}
                    <div className={styles.texts}>
                        <p className={styles.shortDesc}>{project.description}</p>
                        {project.details && <p className={styles.longDesc}>{project.details}</p>}

                        <div className={styles.tags}>
                            {project.tags.map((t, i) => (
                                <span key={i} className={styles.tag}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.links}>
                        {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                        {project.demo && project.demo !== "#" && (
                            <a href={project.demo} target="_blank" rel="noreferrer">Visitar</a>
                        )}
                    </div>
                    <button className={styles.primary} onClick={onClose}>Fechar</button>
                </footer>
            </div>
        </div>
    );
};

export default ProjectModal;
