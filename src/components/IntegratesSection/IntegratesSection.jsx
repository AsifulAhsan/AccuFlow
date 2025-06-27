import React from "react";
import styles from "../IntegratesSection/IntegratesSection.module.css";
import { Brackets, Landmark, BriefcaseBusiness } from "lucide-react";

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
      <div className={styles.prosSection}>
        <div className={styles.prosDiv}>
          <div className={styles.prosIconDiv}>
            <Landmark size={24} />
          </div>
          <p className={styles.prosHeading}>Banking & Payments</p>
          <p className={styles.prosText}>
            Connect with 50+ banks and payment processors
          </p>
        </div>
        <div className={styles.prosDiv}>
          <div className={styles.prosIconDiv}>
            <BriefcaseBusiness size={24} />
          </div>
          <p className={styles.prosHeading}>E-commerce & CRM</p>
          <p className={styles.prosText}>
            Sync with major e-commerce platforms and CRMs
          </p>
        </div>
        <div className={styles.prosDiv}>
          <div className={styles.prosIconDiv}>
            <Brackets size={24} />
          </div>
          <p className={styles.prosHeading}>Productivity Tools</p>
          <p className={styles.prosText}>
            Integrate with team collaboration software
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntegratesSection;
