import React from "react";
import styles from "../Banner/Banner.module.css";

function Banner() {
  return (
    <div className={styles.myBanner}>
      <h1 className={styles.bannerTitle}>Powering Business Growth Worldwide</h1>
      <p className={styles.bannerSubtitle}>
        Join thousands of companies that trust AccuFlow
      </p>
      <div className={styles.bannerItemsDiv}>
      <div className={styles.bannerItems}>
        <h1 className={styles.bannerItemTitle}>10,000+</h1>
        <p className={styles.bannerItemSubtitle}>ACTIVE USERS</p>
      </div>
      <div className={styles.bannerItems}>
        <h1 className={styles.bannerItemTitle}>99.9%</h1>
        <p className={styles.bannerItemSubtitle}>UPTIME</p>
      </div>
      <div className={styles.bannerItems}>
        <h1 className={styles.bannerItemTitle}>$2.5B+</h1>
        <p className={styles.bannerItemSubtitle}>Transactions Processed</p>
      </div>
      <div className={styles.bannerItems}>
        <h1 className={styles.bannerItemTitle}>150+</h1>
        <p className={styles.bannerItemSubtitle}>Countries</p>
      </div>
      </div>
      
    </div>
  );
}

export default Banner;
