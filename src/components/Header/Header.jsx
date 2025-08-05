import React from "react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

function Header() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial dimensions

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.mainDiv}>
      <header className={styles.header}>
        <div className={styles.logoDiv}>
          <img src="./finext-icon.png" alt="finext logo" className="size-8" />
          <h1 className={styles.navTitle}>AccuFlow</h1>
          <p className={styles.dimension}>
            {dimensions.width} x {dimensions.height}
          </p>
        </div>
        <div className={styles.navLinks}>
          <p className={styles.navItems}>Features</p>
          <p className={styles.navItems}>Pricing</p>
          <p className={styles.navItems}>About</p>
          <p className={styles.navItems}>Contact</p>
        </div>
        <button className={styles.signInBtn}>Sign In</button>
        <button className={styles.getStartBtn}>Get Started</button>
      </header>
    </div>
  );
}

export default Header;
