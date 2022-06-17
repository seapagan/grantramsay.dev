import React from "react";

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
    const project_data = getProjectData(user, repo);
    console.log(project_data);

    return (
      <div className={styles.githubMeta}>
        <div className={styles.commits}>
          {project_data.defaultBranchRef.target.history.totalCount} Commits
        </div>
        <div className={styles.stars}>{project_data.stargazerCount} Stars</div>
        <div className={styles.pullRequests}>
          {project_data.defaultBranchRef.associatedPullRequests.totalCount} Pull
          Requests
        </div>
        <div className={styles.forks}>{project_data.forkCount} Forks</div>
        <div className={styles.watchers}>
          {project_data.watchers.totalCount} Watchers
        </div>
        {
          <div className={styles.license}>
            {project_data.licenseInfo
              ? project_data.licenseInfo.name
              : "No License"}
          </div>
        }
        <div className={styles.lastUpdated}>
          Updated : {project_data.updatedAt}
        </div>
      </div>
    );
  }

  // console.log(project_data);
};

export default GithubMeta;
