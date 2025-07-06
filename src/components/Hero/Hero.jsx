import React from "react";
import styles from "../Hero/Hero.module.css";
import Badge from "../Badge/Badge";

function Hero() {
  return (
    <div className={styles.mainDiv}>
      <Badge />
      <div className={styles.subDiv}>
        <h1 className={styles.h1}>Your Business.</h1>
        <h1 className={styles.h1}>Your Data.</h1>
        <h1 className={styles.h1}>Your Future.</h1>
        <p className={styles.p}>
          Own them all on the new ERP and Accounting platform
        </p>
        <div className={styles.btnDiv}>
          <button className={styles.heroBtn1}>
            <p>Explore demos</p>
          </button>
          <button className={styles.heroBtn2}>
            <p>Learn more</p>
          </button>
        </div>
        <div className={styles.heroImgDiv}>
          <img src="./finext-imac.png" alt="Hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
