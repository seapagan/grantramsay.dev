import React from "react";

import Project from "./Project";

import styles from "../css/ProjectList.module.scss";

const ProjectList = ({ settings }) => {
  const { header, projects } = settings;
  return (
    <div>
      <div className={styles.intro}>
        <p>{header}</p>
      </div>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
