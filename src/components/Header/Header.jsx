import React from "react";
import styles from "./Header.module.css";
import { ChartColumn } from "lucide-react";

function Header() {
  return (
    <div className={styles.mainDiv}>
      <header className="flex p-4 justify-between shadow-sm shadow-[#CDD5DC]">
        <div className="flex items-center gap-2">
          <div className="bg-[#33658A] rounded-md p-2">
            <ChartColumn color="white" size={18}/>
          </div>
          <h1 className={styles.navTitle}>AccuFlow</h1>
        </div>
        <div className={styles.navLinks}>
          <p className={styles.navItems}>Features</p>
          <p className={styles.navItems}>Pricing</p>
          <p className={styles.navItems}>About</p>
          <p className={styles.navItems}>Contact</p>
        </div>
        <button className={styles.signInBtn}>Sign In</button>
        <button className={styles.getStartBtn}>Get Started</button>
      </header>
    </div>
  );
}

export default Header;
