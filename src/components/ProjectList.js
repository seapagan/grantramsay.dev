import React from "react";

import { gql, useQuery } from "@apollo/client";

import Project from "./Project";

import styles from "../css/ProjectList.module.scss";

const ProjectList = ({ settings }) => {
  const { header, projects } = settings;

  const githubApiQuery = gql`
    {
      seapagan: user(login: "seapagan") {
        ...UserFragment
      }
      gnramsay: user(login: "gnramsay") {
        ...UserFragment
      }
    }

    fragment UserFragment on User {
      login
      websiteUrl
      repositories(privacy: PUBLIC, first: 100) {
        nodes {
          forkCount
          name
          isArchived
          isFork
          stargazerCount
          primaryLanguage {
            name
            color
          }
          url
          updatedAt
          licenseInfo {
            name
          }
          defaultBranchRef {
            associatedPullRequests {
              totalCount
            }
            name
            target {
              ... on Commit {
                history {
                  totalCount
                }
              }
            }
          }
          watchers {
            totalCount
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(githubApiQuery);

  if (error)
    return (
      <section>
        <div>{`Error! ${error.message}`}</div>
      </section>
    );

  if (!loading) {
    console.log(data);
  }

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
