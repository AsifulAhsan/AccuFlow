import React from 'react';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

function Header() {


  return (
    <div className={styles.mainDiv}>
      <header className={styles.header}>
        <div className={styles.logoDiv}>
          <img src='./finext-icon.png' alt='finext logo' className='size-8' />
          <h1 className={styles.navTitle}>AccuFlow</h1>
        </div>
        <div className={styles.navLinks}>
          <p className={styles.navItems}>Features</p>
          <p className={styles.navItems}>Pricing</p>
          <p className={styles.navItems}>About</p>
          <p className={styles.navItems}>Contact</p>
        </div>
        <button className={styles.signInBtn}>Sign In</button>
        <button className={styles.getStartBtn}>Get Started</button>
        <button className={styles.burgerMenu}>
          <Menu />
        </button>
      </header>
    </div>
  );
}

export default Header;