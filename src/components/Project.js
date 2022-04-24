import React from "react";

import Wrapper from "./Wrapper";

import styles from "../css/Project.module.scss";

const Project = ({ project }) => {
  return (
    <Wrapper className={styles.projectContainer}>
      <div className={styles.left}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.summary}>{project.summary}</div>
        <div className={styles.github}>{project.github}</div>
        <div className={styles.website}>{project.website}</div>
      </div>
      <div className={styles.right}>
        <img src={project.image} alt="" />
      </div>
    </Wrapper>
  );
};

export default Project;
