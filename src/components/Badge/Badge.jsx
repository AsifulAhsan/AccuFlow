import React from "react";
import { Zap } from "lucide-react";
import styles from "../Badge/Badge.module.css";

function Badge() {
  return (
    <div className={styles.mainDiv}>
      <Zap color="white" />
      <p className={styles.badgeText}>
        Trusted by 10,000+ businesses worldwide
      </p>
    </div>
  );
}

export default Badge;
