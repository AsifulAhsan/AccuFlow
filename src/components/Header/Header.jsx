import React from "react";
import styles from "./Header.module.css";
import { Building2 } from "lucide-react";

function Header() {
  return (
    <div className="bg-[#33658A]">
      <header className="flex p-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-black rounded-lg p-2">
            <Building2 size={22} color="white" />
          </div>
          <h1 className="text-xl text-white font-bold">AccuFlow</h1>
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
