import React from "react";

import Project from "./Project";

import styles from "../css/ProjectList.module.scss";

const ProjectList = ({ projects }) => {
  return (
    <div>
      <div className={styles.intro}>
        <p>
          Listed below are some of my public projects, spread over 2 separate
          GitHub accounts. some are complete, others still in progress and some
          barely started. Each has a link to the relevant GitHub repository and
          a live example if appliciable. The source code for this page (written
          in React) is availiable from it&apos;s public repository.
        </p>
      </div>
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
