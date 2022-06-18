import React from "react";

import {
  GoBook,
  GoClock,
  GoEye,
  GoGitCommit,
  GoGitPullRequest,
  GoRepoForked,
  GoStar,
} from "react-icons/go";
import { VscIssues } from "react-icons/vsc";

import styles from "../css/GithubMeta.module.scss";

const GithubMeta = ({ data, project }) => {
  const getUser = project => {
    return project.github ? project.github.split("/") : null;
  };

  const getProjectData = (user, repository) => {
    const userData = data[user];
    const thisProjectData = userData.repositories.nodes.filter(repo => {
      return repository === repo.name;
    });

    return thisProjectData[0];
  };

  const [user, repo] = getUser(project);
  // console.log(user, repo);
  if (data) {
    const projectData = getProjectData(user, repo);

    return (
      <div className={styles.githubMeta}>
        <div className={styles.metaUnit}>
          <GoGitCommit />
          {projectData.defaultBranchRef.target.history.totalCount} Commits
        </div>
        <div className={styles.metaUnit}>
          <GoStar />
          {projectData.stargazerCount} Stars
        </div>
        <div className={styles.metaUnit}>
          <GoGitPullRequest />
          {projectData.pullRequests.totalCount} Pull Requests
        </div>
        <div className={styles.metaUnit}>
          <VscIssues />
          {projectData.issues.totalCount} Open Issues
        </div>
        <div className={styles.metaUnit}>
          <GoRepoForked />
          {projectData.forkCount} Forks
        </div>
        <div className={styles.metaUnit}>
          <GoEye />
          {projectData.watchers.totalCount} Watchers
        </div>
        {
          <div className={styles.metaUnit}>
            <GoBook />
            {projectData.licenseInfo
              ? projectData.licenseInfo.name
              : "No License"}
          </div>
        }
        <div className={`${styles.metaUnit} ${styles.lastUpdated}`}>
          <GoClock />
          {/* Updated : {projectData.defaultBranchRef.target.authoredDate} */}
          Updated :{" "}
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(projectData.defaultBranchRef.target.authoredDate))}
        </div>
      </div>
    );
  }

  // console.log(project_data);
};

export default GithubMeta;
