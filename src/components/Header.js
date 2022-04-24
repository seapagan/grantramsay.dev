import React from "react";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../css/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.badge}>Grant Ramsay</div>
        <ul className={styles.menuItems}>
          <li className={styles.iconLink}>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
            <a
              href="https://www.gnramsay.com"
              target="_blank"
              rel="noopener noreferrer">
              gnramsay.com
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
