import React from "react";
import styles from "../IntegratesSection/IntegratesSection.module.css";

function IntegratesSection() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionH1}>Connects with your existing tools</h1>
        <p className={styles.sectionP}>
          Seamlessly integrate with 200+ popular business applications
        </p>
      </div>
      <div className={styles.trailContainer}>
        <div className={styles.trail}>
          <div className={styles.card}>
            <p className={styles.cardText}>Shopify</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Slack</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Salesforce</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Google Workspace</p>
          </div>
          {/* Duplicate */}
          <div className={styles.card}>
            <p className={styles.cardText}>Shopify</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Slack</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Salesforce</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Google Workspace</p>
          </div>
          {/* Duplicate */}
          <div className={styles.card}>
            <p className={styles.cardText}>Shopify</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Slack</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Salesforce</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Google Workspace</p>
          </div>
          {/* Duplicate */}
          <div className={styles.card}>
            <p className={styles.cardText}>Shopify</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Slack</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Salesforce</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardText}>Google Workspace</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegratesSection;
