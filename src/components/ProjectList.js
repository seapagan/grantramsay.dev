import React from "react";

import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <div>
      ProjectList
      {projects.map((project, index) => {
        return <Project key={index} project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
