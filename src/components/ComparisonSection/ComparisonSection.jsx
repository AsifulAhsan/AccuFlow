import React from "react";
import styles from "../ComparisonSection/ComparisonSection.module.css";
import { CircleCheckBig, BoxSelectIcon } from "lucide-react";

function ComparisonSection() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.headDiv}>
        <h1 className={styles.sectionH1}>Why choose AccuFlow?</h1>
        <p className={styles.sectionP}>
          See how AccuFlow compares to other solutions in the market
        </p>
      </div>
      <div className={styles.table}>
        <div className={styles.tableCol}>
          <div className={styles.cellHead}>
            <h1 className={styles.cell1H1}>Features</h1>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>Financial Management</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>Inventory Management</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>HR & Payroll</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>CRM Integration</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>Advanced Analytics</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>Mobile App</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>API Access</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>Setup Time</p>
          </div>
          <div className={styles.c1Cell}>
            <p className={styles.cellText}>Starting Price</p>
          </div>
        </div>
        <div className={`${styles.tableCol} ${styles.accuFlowCol}`}>
          <div className={styles.cellHead2}>
            <h1 className={styles.cellH1}>AccuFlow</h1>
            <p className={styles.cellP}>Complete Solution</p>
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2CellA}>2-4 weeks</div>
          <div className={styles.c2CellA}>$49/month</div>
        </div>
        <div className={styles.tableCol}>
          <div className={styles.cellHead}>
            <h1 className={styles.cellH1}>QuickBooks</h1>
            <p className={styles.cellP}>Accounting Only</p>
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <BoxSelectIcon className={styles.boxBtn} />
          </div>
          <div className={styles.c2Cell}>
            <BoxSelectIcon className={styles.boxBtn} />
          </div>
          <div className={styles.c2Cell}>
            <BoxSelectIcon className={styles.boxBtn} />
          </div>
          <div className={styles.c2Cell}>
            <BoxSelectIcon className={styles.boxBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>1-2 weeks</div>
          <div className={styles.c2Cell}>$30/month</div>
        </div>
        <div className={styles.tableCol}>
          <div className={styles.cellHead}>
            <h1 className={styles.cellH1}>SAP</h1>
            <p className={styles.cellP}>Enterprise</p>
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <BoxSelectIcon className={styles.boxBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>6-12 months</div>
          <div className={styles.c2Cell}>$150/month</div>
        </div>
        <div className={styles.tableCol}>
          <div className={styles.cellHead}>
            <h1 className={styles.cellH1}>NetSuite</h1>
            <p className={styles.cellP}>Cloud ERP</p>
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>
            <CircleCheckBig className={styles.okBtn} />
          </div>
          <div className={styles.c2Cell}>3-6 months</div>
          <div className={styles.c2Cell}>$99/month</div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonSection;
