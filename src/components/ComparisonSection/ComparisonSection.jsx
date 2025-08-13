import React from "react";
import styles from "../ComparisonSection/ComparisonSection.module.css";
import { CircleCheckBig, BoxSelectIcon, MoveRight } from "lucide-react";

const DesktopTable = () => (
  <div className={styles.desktopTable}>
    <div className={styles.tableCol}>
      <div className={styles.cellHead}>
        <h1 className={styles.cellH1}>Features</h1>
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
      <div className={styles.c2CellA}>$30/month</div>
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
        <BoxSelectIcon className={styles.boxBtn} color="black" />
      </div>
      <div className={styles.c2Cell}>
        <BoxSelectIcon className={styles.boxBtn} color="black" />
      </div>
      <div className={styles.c2Cell}>
        <BoxSelectIcon className={styles.boxBtn} color="black" />
      </div>
      <div className={styles.c2Cell}>
        <BoxSelectIcon className={styles.boxBtn} color="black" />
      </div>
      <div className={styles.c2Cell}>
        <CircleCheckBig className={styles.okBtn} />
      </div>
      <div className={styles.c2Cell}>
        <CircleCheckBig className={styles.okBtn} />
      </div>
      <div className={styles.c2CellA}>1-2 weeks</div>
      <div className={styles.c2CellA}>$49/month</div>
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
        <BoxSelectIcon className={styles.boxBtn} color="black" />
      </div>
      <div className={styles.c2Cell}>
        <CircleCheckBig className={styles.okBtn} />
      </div>
      <div className={styles.c2CellA}>6-12 months</div>
      <div className={styles.c2CellA}>$150/month</div>
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
      <div className={styles.c2CellA}>3-6 months</div>
      <div className={styles.c2CellA}>$99/month</div>
    </div>
  </div>
);

const TableColumn = ({ header, subHeader, data, isAccuFlow }) => (
  <div className={`${styles.tableCol} ${isAccuFlow ? styles.accuFlowCol : ""}`}>
    <div className={isAccuFlow ? styles.cellHead2 : styles.cellHead}>
      <h1 className={styles.cellH1}>{header}</h1>
      <p className={styles.cellP}>{subHeader}</p>
    </div>
    {data.map((item, index) => (
      <div
        key={index}
        className={
          item.value === "✓"
            ? styles.c2Cell
            : item.value === "✗"
            ? styles.c2Cell
            : styles.c2CellA
        }
      >
        <span className={styles.cellText}>{item.feature}</span>
        {item.value === "✓" ? (
          <CircleCheckBig className={styles.okBtn} />
        ) : item.value === "✗" ? (
          <BoxSelectIcon className={styles.boxBtn} color="black" />
        ) : (
          item.value
        )}
      </div>
    ))}
  </div>
);

function ComparisonSection() {
  const accuFlowData = [
    { feature: "Financial Management", value: "✓" },
    { feature: "Inventory Management", value: "✓" },
    { feature: "HR & Payroll", value: "✓" },
    { feature: "CRM Integration", value: "✓" },
    { feature: "Advanced Analytics", value: "✓" },
    { feature: "Mobile App", value: "✓" },
    { feature: "API Access", value: "✓" },
    { feature: "Setup Time", value: "2-4 weeks" },
    { feature: "Starting Price", value: "$30/month" },
  ];

  const quickBooksData = [
    { feature: "Financial Management", value: "✓" },
    { feature: "Inventory Management", value: "✗" },
    { feature: "HR & Payroll", value: "✗" },
    { feature: "CRM Integration", value: "✗" },
    { feature: "Advanced Analytics", value: "✗" },
    { feature: "Mobile App", value: "✓" },
    { feature: "API Access", value: "✓" },
    { feature: "Setup Time", value: "1-2 weeks" },
    { feature: "Starting Price", value: "$49/month" },
  ];

  const sapData = [
    { feature: "Financial Management", value: "✓" },
    { feature: "Inventory Management", value: "✓" },
    { feature: "HR & Payroll", value: "✓" },
    { feature: "CRM Integration", value: "✓" },
    { feature: "Advanced Analytics", value: "✓" },
    { feature: "Mobile App", value: "✗" },
    { feature: "API Access", value: "✓" },
    { feature: "Setup Time", value: "6-12 months" },
    { feature: "Starting Price", value: "$150/month" },
  ];

  const netSuiteData = [
    { feature: "Financial Management", value: "✓" },
    { feature: "Inventory Management", value: "✓" },
    { feature: "HR & Payroll", value: "✓" },
    { feature: "CRM Integration", value: "✓" },
    { feature: "Advanced Analytics", value: "✓" },
    { feature: "Mobile App", value: "✓" },
    { feature: "API Access", value: "✓" },
    { feature: "Setup Time", value: "3-6 months" },
    { feature: "Starting Price", value: "$99/month" },
  ];

  return (
    <div className={styles.mainDiv}>
      <div className={styles.headDiv}>
        <h1 className={styles.sectionH1}>Why choose AccuFlow?</h1>
        <p className={styles.sectionP}>
          See how AccuFlow compares to other solutions in the market
        </p>
      </div>
      <DesktopTable />
      <div className={styles.table}>
        <TableColumn
          header="AccuFlow"
          subHeader="Complete Solution"
          data={accuFlowData}
          isAccuFlow={true}
        />
        <TableColumn
          header="QuickBooks"
          subHeader="Accounting Only"
          data={quickBooksData}
        />
        <TableColumn header="SAP" subHeader="Enterprise" data={sapData} />
        <TableColumn
          header="NetSuite"
          subHeader="Cloud ERP"
          data={netSuiteData}
        />
      </div>
      <div className={styles.trialBtnDiv}>
        <button className={styles.trialBtn}>
          Start your free trial <MoveRight size={24} />
        </button>
      </div>
      <p className={styles.btnText}>
        No credit card required • Full access for 14 days
      </p>
    </div>
  );
}

export default ComparisonSection;