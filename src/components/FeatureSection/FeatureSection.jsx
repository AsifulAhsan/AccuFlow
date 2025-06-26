import React from "react";
import styles from "../FeatureSection/FeatureSection.module.css";
import { ChartBar } from "lucide-react";

function FeatureSection() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.mainDivHeading}>
        <h1 className={styles.headingH1}>
          Everything you need to run your business
        </h1>
        <p className={styles.headingP}>
          Comprehensive tools designed to streamline operations and drive growth
        </p>
      </div>

      <div className={styles.featureSection}>
        <div className={styles.featureSectionIcon}>
          <ChartBar color="white" />
        </div>
        <div className={styles.featureSectionBody}>
          <h1 className={styles.bodyH1}>Financial Management</h1>
          <p className={styles.bodyP}>
            Complete accounting suite with real-time reporting and analytics
            that gives you full control over your finances.
          </p>
          <p className={styles.bodyItems}>
            Automated bookkeeping with bank reconciliation
          </p>
          <p className={styles.bodyItems}>
            Tax compliance and preparation tools
          </p>
          <p className={styles.bodyItems}>
            Advanced financial forecasting and budgeting
          </p>
        </div>
        <img
          src="./bigplaceholder.svg"
          alt="feature section image"
          className={styles.featureSectionImg}
        />
      </div>
    </div>
  );
}

export default FeatureSection;
