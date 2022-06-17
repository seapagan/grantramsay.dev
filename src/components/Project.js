import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GithubMeta from "./GithubMeta";
import Wrapper from "./Wrapper";

import styles from "../css/Project.module.scss";

const Project = ({ project, data }) => {
  return (
    <Wrapper className={styles.projectContainer}>
      <div>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.summary}>{project.summary}</div>
      </div>
      {project.image && (
        <div>
          <img className={styles.image} src={project.image} alt="" />
        </div>
      )}
      <div className={styles.linksWrapper}>
        {project.github && (
          <span className={styles.github}>
            <FontAwesomeIcon icon={faGithub} />
            <a
              href={`https://www.github.com/${project.github}`}
              target="_blank"
              rel="noopener noreferrer">
              {project.github}
            </a>
          </span>
        )}
        {project.website && (
          <span className={styles.website}>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              {project.websiteTitle ? project.websiteTitle : project.website}
            </a>
          </span>
        )}
      </div>
      <GithubMeta data={data} project={project} />
      <div className={styles.tech}>{project.tech}</div>
    </Wrapper>
  );
};

export default Project;
