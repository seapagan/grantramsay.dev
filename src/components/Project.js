import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Wrapper from "./Wrapper";

import styles from "../css/Project.module.scss";

const Project = ({ project }) => {
  return (
    <Wrapper className={styles.projectContainer}>
      <div className={styles.left}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.summary}>{project.summary}</div>
        {project.github && (
          <div className={styles.github}>
            <FontAwesomeIcon icon={faGithub} />
            <a
              href={`https://www.github.com/${project.github}`}
              target="_blank"
              rel="noopener noreferrer">
              {project.github}
            </a>
          </div>
        )}
        {project.website && (
          <div className={styles.website}>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              {project.website}
            </a>
          </div>
        )}
        <div className={styles.tech}>{project.tech}</div>
      </div>
      <div className={styles.right}>
        <img src={project.image} alt="" />
      </div>
    </Wrapper>
  );
};

export default Project;
