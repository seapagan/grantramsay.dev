import React from "react";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../css/Header.module.scss";

const Header = ({ user }) => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.badge}>Open Source projects</div>
        <ul className={styles.menuItems}>
          <li className={styles.iconLink}>
            {user.website ? (
              <>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
                &nbsp;
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer">
                  {user.name}
                </a>
              </>
            ) : (
              user.name
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.user}></div>
    </div>
  );
};

export default Header;
