import React from "react";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { settings } from "../configure/settings";

import styles from "../css/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.badge}>Open Source projects</div>
        <ul className={styles.menuItems}>
          <li className={styles.iconLink}>
            {settings.user.website ? (
              <>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                &nbsp;
                <a
                  href={settings.user.website}
                  target="_blank"
                  rel="noopener noreferrer">
                  {settings.user.name}
                </a>
              </>
            ) : (
              settings.user.name
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.user}></div>
    </div>
  );
};

export default Header;
