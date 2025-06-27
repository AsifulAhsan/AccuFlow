import React from "react";
import styles from "../FeatureSection/FeatureSection.module.css";
import {
  ChartNoAxesCombined,
  TrendingUp,
  CircleCheckBig,
  UsersRound,
  MoveRight,
} from "lucide-react";

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
        <div className={styles.featureSectionLeftBodyDiv}>
          <div className={styles.featureSectionIcon}>
            <ChartNoAxesCombined color="white" size={24} />
          </div>
          <div className={styles.featureSectionBody}>
            <h1 className={styles.bodyH1}>Financial Management</h1>
            <p className={styles.bodyP}>
              Complete accounting suite with real-time reporting and analytics
              that gives you full control over your finances.
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Automated bookkeeping with bank reconciliation
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Tax compliance and preparation tools
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Advanced financial forecasting and budgeting
            </p>
          </div>
          <button className={styles.featureSectionBtn}>
            Learn More
            <MoveRight className={styles.rightArrow} />
          </button>
        </div>

        <div className={styles.featureSectionImg}>
          <img
            src="./bigplaceholder.svg"
            alt="feature section image"
            className={styles.sectionImg}
          />
        </div>
      </div>
      <div className={styles.featureSection}>
        <div className={styles.featureSectionImg}>
          <img
            src="./bigplaceholder.svg"
            alt="feature section image"
            className={styles.sectionImg}
          />
        </div>
        <div className={styles.featureSectionRightBodyDiv}>
          <div className={styles.featureSectionIcon}>
            <UsersRound color="white" size={24} />
          </div>
          <div className={styles.featureSectionBody}>
            <h1 className={styles.bodyH1}>Human Resources</h1>
            <p className={styles.bodyP}>
              Streamlined HR processes from hiring to payroll management, all in
              one integrated platform.
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Complete employee onboarding workflows
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Automated payroll with tax calculations
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Performance tracking and reviews
            </p>
          </div>
          <button className={styles.featureSectionBtn}>
            Learn More
            <MoveRight className={styles.rightArrow} />
          </button>
        </div>
      </div>
      <div className={styles.featureSection}>
        <div className={styles.featureSectionLeftBodyDiv}>
          <div className={styles.featureSectionIcon}>
            <TrendingUp color="white" size={24} />
          </div>
          <div className={styles.featureSectionBody}>
            <h1 className={styles.bodyH1}>Business Intelligence</h1>
            <p className={styles.bodyP}>
              Advanced analytics and reporting for data-driven decisions that
              propel your business forward.
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Automated bookkeeping with bank reconciliation
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Tax compliance and preparation tools
            </p>
            <p className={styles.bodyItems}>
              <CircleCheckBig className={styles.okBtn} />
              Advanced financial forecasting and budgeting
            </p>
          </div>
          <button className={styles.featureSectionBtn}>
            Learn More
            <MoveRight className={styles.rightArrow} />
          </button>
        </div>

        <div className={styles.featureSectionImg}>
          <img
            src="./bigplaceholder.svg"
            alt="feature section image"
            className={styles.sectionImg}
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
