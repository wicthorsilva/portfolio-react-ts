import React from "react";
import styles from "./Philosophy.module.css";

const Philosophy = () => {
    return (
        <section id="philosophy" className={styles.section}>
            <h2>
                <span className={styles.hash}>#</span> Filosofia de Desenvolvimento
            </h2>

            <p className={styles.text}>
                Acredito que o desenvolvimento de software vai além de escrever código funcional — envolve escrever código que seja claro, eficiente, colaborativo e que agregue valor real.
                Gosto de construir soluções que resolvem problemas de forma inteligente e escalável, mantendo o foco em performance, segurança e boas práticas.
            </p>

            <p className={styles.text}>
                Valorizo um ambiente de trabalho onde a comunicação é aberta, o aprendizado é constante e todos compartilham conhecimento.
            </p>

            <p className={styles.text}>
                Minha filosofia se resume a três pilares: <strong>clareza, propósito e evolução</strong>.
            </p>

            <pre className={styles.codeBlock}>
                <code>
                    {`function desenvolverProjeto(clareza, proposito) {
  if (!clareza || !proposito) {
    throw new Error("Precisa buscar clareza e propósito.");
  }

  const base = construirSolução(clareza, proposito);
  const resultado = aplicarMelhorias(base);

  return resultado.comEvolucao();
}`}
                </code>
            </pre>

        </section>
    );
};

export default Philosophy;
