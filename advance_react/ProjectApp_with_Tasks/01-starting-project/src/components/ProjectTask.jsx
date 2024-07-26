import React, {useState } from "react";
import RightSideCont from "./RightSideCont";
import Task from "./Task";

function ProjectTask({
  selectedProject,
  deleteProject,
  addTask,
  deleteTask,
}) {

const [taskValue, setTaskValue] = useState('');

function handleChange (event){
  setTaskValue(event.target.value)
}
  
  return (
    <RightSideCont>
      <div className="flex justify-between w-full items-baseline">
        <h1 className="text-4xl text-neutral-700 font-bold">
          {" "}
          {selectedProject.title}
        </h1>
        <button
          className="text-neutral-800 hover:text-red-500 font-medium text-lg"
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>

      <div className="w-full">
        <p className="text-neutral-400 font-medium">
          {" "}
          {selectedProject.date}
        </p>

        <p className="text-xl my-8 font-normal self-start whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </div>

      <div className="border-b-[3px] border-neutral-200 w-full "></div>

      <div className="w-full">
        <h2 className="text-3xl text-neutral-700 font-bold ">Tasks</h2>
      </div>

      <div className="w-full flex items-baseline gap-5">
        <input
          type="text"
          placeholder="Add Task"
          className="bg-neutral-200 text-neutral-800 font-normal w-2/4 rounded-lg px-5 py-4 mt-3"
          onChange={handleChange}
          value={taskValue}
        />
        <button
          className="text-neutral-800 hover:text-blue-500 font-medium text-lg"
          onClick={() => {addTask(taskValue)}}
        >
          Add Task
        </button>
      </div>

      <div className="w-full ">
        {selectedProject.tasks.length > 0 ? (
          <div className="w-full bg-neutral-100 text-neutral-800 font-normal rounded-lg px-5 py-4 mt-3">
            {selectedProject.tasks.map((task, index) => (
              <Task key={task} task={task} id={index} deleteTask={deleteTask} />
            ))}
          </div>
        ) : (
          <p>This project does not have any tasks yet.</p>
        )}
      </div>
    </RightSideCont>
  );
}

export default ProjectTask;
