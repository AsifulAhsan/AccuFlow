import React from "react";
import styles from "../CardSection/CardSection.module.css";
import { Handshake, Factory, HeartPlus, Dot, ShoppingBag } from "lucide-react";

function CardSection() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.sectionHeadingDiv}>
        <h1 className={styles.h1}>Built for your industry</h1>
        <p className={styles.p}>
          Tailored solutions that understand the unique challenges of your
          business sector
        </p>
      </div>
      <div className={styles.cardDiv}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Factory size={32} />
          </div>
          <h1 className={styles.cardH1}>Manufacturing</h1>
          <p className={styles.cardP}>
            Inventory management, production planning, and supply chain
            optimization
          </p>
          <div>
            <p className={styles.cardList}>
              <Dot color="green" />
              Bill of Materials (BOM)
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Work Order Management
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Quality Control
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <ShoppingBag size={32} />
          </div>
          <h1 className={styles.cardH1}>Retail & E-commerce</h1>
          <p className={styles.cardP}>
            Multi-channel sales, inventory sync, and customer management
          </p>
          <div>
            <p className={styles.cardList}>
              <Dot color="green" />
              POS Integration
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Multi-location Inventory
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Customer Analytics
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <HeartPlus size={32} />
          </div>
          <h1 className={styles.cardH1}>Healthcare</h1>
          <p className={styles.cardP}>
            HIPAA compliance, patient billing, and regulatory reporting
          </p>
          <div>
            <p className={styles.cardList}>
              <Dot color="green" />
              HIPAA Compliance
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Insurance Claims
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Audit Trails
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Handshake size={32} />
          </div>
          <h1 className={styles.cardH1}>Professional Services</h1>
          <p className={styles.cardP}>
            Project tracking, time billing, and resource management
          </p>
          <div>
            <p className={styles.cardList}>
              <Dot color="green" />
              Time Tracking
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Project Profitability
            </p>
            <p className={styles.cardList}>
              <Dot color="green" />
              Resource Planning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
