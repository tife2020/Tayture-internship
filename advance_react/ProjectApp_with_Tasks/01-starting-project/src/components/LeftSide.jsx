import React from "react";
import ProjectLeftSide from "./ProjectLeftSide";

function LeftSide({ setRightSideItem, projects, setSelectedProjectId,selectedProjectId }) {

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
        {projects.map((project) => {

          let className="text-xl font-normal mb-5 p-2 hover:bg-neutral-700 hover:text-white rounded"

          if (project.id === selectedProjectId){
            className += ' bg-neutral-700 text-white'
          }else{
            className += ' text-neutral-300'
          }
          
          return (
          <ProjectLeftSide className = {className} key={project.id} title={project.title} id = {project.id} setSelectedProjectId = {setSelectedProjectId} setRightSideItem={setRightSideItem}/>
        )})}
      </div>
    </div>
  );
}

export default LeftSide;
