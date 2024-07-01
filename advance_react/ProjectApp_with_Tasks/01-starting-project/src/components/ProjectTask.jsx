import React from "react";
import RightSideCont from "./RightSideCont";
import FormInput from "./FormInput";

function ProjectTask({ projects, setProjects }) {
  return (
    <RightSideCont>
      <div className="flex justify-between w-full items-baseline">
        <h1 className="text-4xl text-neutral-700 font-bold">{projects[0].title}</h1>
        <button className="text-neutral-800 font-medium text-lg">Delete</button>
      </div>

      <div className="w-full">
        <p className="text-neutral-400 font-medium">{projects[0].date}</p>

        <p className="text-xl my-8 font-normal self-start">
          {projects[0].description}
        </p>
      </div>

      <div className="border-b-[3px] border-neutral-200 w-full "></div>

      <div className="w-full">
        <h2 className="text-3xl text-neutral-700 font-bold ">Tasks</h2>
      </div>

      <div className="w-full flex items-baseline gap-5">
        <input  type = 'text' placeholder = 'Add Task' className="bg-neutral-200 text-neutral-800 font-normal w-2/4 rounded-lg px-5 py-4 mt-3"/>
        <button className="text-neutral-800 font-medium text-lg">Add Task</button>
      </div>

      <div className="w-full ">
        <p>This project does not have any tasks yet.</p>
      </div>
    </RightSideCont>
  );
}

export default ProjectTask;
