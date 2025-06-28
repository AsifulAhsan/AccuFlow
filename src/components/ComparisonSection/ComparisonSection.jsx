import React from "react";
import styles from "../ComparisonSection/ComparisonSection.module.css";

function ComparisonSection() {
  return (
    <div>
      <div className={styles.sectionDiv}>
        <h1 className={styles.sectionH1}>Why choose AccuFlow?</h1>
        <p className={styles.sectionP}>
          See how AccuFlow compares to other solutions in the market
        </p>
      </div>
    </div>
  );
}

export default ComparisonSection;
