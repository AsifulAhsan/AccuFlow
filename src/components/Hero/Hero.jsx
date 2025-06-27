import React from "react";
import styles from "../Hero/Hero.module.css";
import Badge from "../Badge/Badge";

function Hero() {
  return (
    <div className="flex flex-col gap-4 mt-10 justify-center items-center min-h-80">
      <Badge />
      <div className="flex flex-col gap-3 mt-6">
        <h1 className="text-7xl text-center font-medium">Your Business.</h1>
        <h1 className="text-7xl text-center font-semibold">Your Data.</h1>
        <h1 className="text-7xl text-center font-semibold">Your Future.</h1>
        <p className="text-center text-2xl mt-6">
          Own them all on the new ERP and Accounting platform
        </p>
        <div className="flex justify-center items-center gap-6 mt-4 mb-6">
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
