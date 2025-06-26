import React from "react";
import styles from "../Hero/Hero.module.css";
import Badge from "../Badge/Badge";

function Hero() {
  return (
    <div className="flex flex-col gap-4 mt-10 justify-center items-center min-h-80">
      <Badge />
      <div className="flex flex-col gap-3 mt-6">
        <h1 className="text-7xl text-center font-medium">Your Business.</h1>
        <h1 className="text-7xl text-center font-semibold text-[#223548]">
          Your Data.
        </h1>
        <h1 className="text-7xl text-center font-semibold text-[#33658A]">
          Your Future.
        </h1>
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
          <img
            src="./bigplaceholder.svg"
            alt="place holder image"
            className="mt-8 mb-6 rounded-2xl shadow-xl shadow-gray-400 size-5/6 self-center"
          />
      </div>
    </div>
  );
}

export default Hero;
