import React from "react";
import ProjectLeftSide from "./ProjectLeftSide";

function LeftSide({ setRightSideItem, projects, setSelectedProject }) {

  function handleAddProBtn(){
    setRightSideItem('createProject')
  }
  return (
    <div className="w-1/4 bg-neutral-800 rounded-tr-2xl h-screen text-white pt-20 px-10 mt-14">
      <h1 className="text-3xl font-bold uppercase mb-5">Your Projects</h1>
      <button
        onClick={handleAddProBtn}
        className="bg-neutral-700 hover:bg-neutral-600 text-xl font-medium px-7 py-4 rounded-lg mt-5 text-neutral-300 "
      >
        + Add Project
      </button>

      <div className="mt-10">
        {projects.map((project) => (
          <ProjectLeftSide key={project.id} title={project.title} id = {project.id} setSelectedProject = {setSelectedProject} setRightSideItem={setRightSideItem}/>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
