import React from "react";
import NavBar from "../../Components/NavBar";
import ProjectCard from '../../Components/projectCard'
import ProCard from '../../Components/proCards'
import "./Project.css";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="upper">
      <h1 className="HiFORNAME">
        Hi, <span className="HiName">Suman</span>
      </h1>
      <div className="subtitleProjectContainer">
        <div>
          <h2 className="findallyourproject">Find all your projects here</h2>
          <p className="paragraphfindallproj">
            You can click on create project button to create new projects, You
            can view your added project in <b>My Projects</b> section. You can
            view shared project by others in the <b>Shared with me</b> section.{" "}
          </p>
        </div>
        <button id="newProject" type="button" className="ant-btn ant-btn-primary">
          <span> Create Project </span>
        </button>
      </div>
      </div>
      <h2 className="myProjects">My Projects</h2>
      <div className="lower">
          <ProCard/>

      </div>
      </div>
    </>
  );
};

export default Projects;
