import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;
          <a
            href="https://github.com/gnramsay/grantramsay.dev"
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank">
            GitHub repository
          </a>
          , &copy;Grant Ramsay 2022
        </div>
        <div className={styles.license}>
          Released under the{" "}
          <a
            className={styles.link}
            href="https://opensource.org/licenses/MIT"
            rel="noopener noreferrer"
            target="_blank">
            MIT
          </a>{" "}
          License.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
