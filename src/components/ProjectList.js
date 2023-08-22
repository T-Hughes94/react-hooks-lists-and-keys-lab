import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // create a const that is our .map of each individual project, we create a projectitem for each or project
  const eachObj = projects.map((project)=>(
    <ProjectItem key={project.id} name={project.name} about ={project.about} technologies={project.technologies}/>
  ))

  console.log(eachObj)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{eachObj}</div>
    </div>
  );
}

export default ProjectList;
