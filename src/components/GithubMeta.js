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

  const pluralize = (meta, count) => {
    // return a pluralized string depending on count
    const template = `${count} ${meta}`;

    return count === 1 ? template : `${template}s`;
  };

  const [user, repo] = getUser(project);

  if (data) {
    const projectData = getProjectData(user, repo);

    const parsedData = {
      commits: projectData.defaultBranchRef.target.history.totalCount,
      stars: projectData.stargazerCount,
      pullRequests: projectData.pullRequests.totalCount,
      openIssues: projectData.issues.totalCount,
      watchers: projectData.watchers.totalCount,
      forks: projectData.forkCount,
    };

    return (
      <>
        <div className={styles.githubMeta}>
          <a
            href={`https://github.com/${user}/${repo}/commits`}
            className={styles.metaUnit}
            target="_blank"
            rel="noopener noreferrer">
            <GoGitCommit />
            {pluralize("Commit", parsedData.commits)}
          </a>
          <a
            href={`https://github.com/${user}/${repo}/stargazers`}
            className={styles.metaUnit}
            target="_blank"
            rel="noopener noreferrer">
            <GoStar />
            {pluralize("Star", parsedData.stars)}
          </a>
          <a
            href={`https://github.com/${user}/${repo}/pulls`}
            className={styles.metaUnit}
            target="_blank"
            rel="noopener noreferrer">
            <GoGitPullRequest />
            {pluralize("Pull Request", parsedData.pullRequests)}
          </a>
          <a
            href={`https://github.com/${user}/${repo}/issues`}
            className={styles.metaUnit}
            target="_blank"
            rel="noopener noreferrer">
            <VscIssues />
            {pluralize("Open Issue", parsedData.openIssues)}
          </a>
          <a
            href={`https://github.com/${user}/${repo}/network/members`}
            className={styles.metaUnit}
            target="_blank"
            rel="noopener noreferrer">
            <GoRepoForked />
            {pluralize("Fork", parsedData.forks)}
          </a>
          <a
            href={`https://github.com/${user}/${repo}/watchers`}
            className={styles.metaUnit}
            target="_blank"
            rel="noopener noreferrer">
            <GoEye />
            {pluralize("Watcher", parsedData.watchers)}
          </a>
        </div>
        <div className={styles.footer}>
          <div className={styles.metaUnit}>
            <GoBook />
            {projectData.licenseInfo
              ? projectData.licenseInfo.name
              : "No License"}
          </div>
          <div className={`${styles.metaUnit} ${styles.lastUpdated}`}>
            <GoClock />
            {/* Updated : {projectData.defaultBranchRef.target.authoredDate} */}
            Updated :{" "}
            {new Intl.DateTimeFormat("default", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(
              new Date(projectData.defaultBranchRef.target.authoredDate)
            )}
          </div>
        </div>
        {projectData.isFork && (
          <div className={styles.forked}>
            ( Forked from :&nbsp;
            <a href={projectData.parent.url}>
              <GoRepoForked />
              {projectData.parent.owner.login.toLowerCase()}/
              {projectData.parent.name}
            </a>
            &nbsp;)
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className={styles.loading}>
        Loading repository data from Github ...
      </div>
    );
  }
};
export default GithubMeta;
