import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Wicthor Dev</div>
      <ul className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <li><a href="#header">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <FaBars className={styles.hamburger} onClick={toggleMenu} />

      <div className={`${styles.modal} ${isOpen ? styles.show : ''}`}>
        <AiOutlineClose className={styles.closeIcon} onClick={toggleMenu} />
        <ul className={styles.modalMenu}>
          <li onClick={toggleMenu}><a href="#header">Início</a></li>
          <li onClick={toggleMenu}><a href="#about">Sobre</a></li>
          <li onClick={toggleMenu}><a href="#projects">Projetos</a></li>
          <li onClick={toggleMenu}><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
