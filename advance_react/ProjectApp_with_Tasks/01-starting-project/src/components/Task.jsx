import React from "react";

function Task({task, id, deleteTask}) {

  return (
    <div className="flex justify-between items-baseline my-5">
      <p className="font-medium text-lg">{task}</p>
      <button className=" text-base hover:text-red-500" onClick={() => deleteTask(id)}>Clear</button>
    </div>
  );
}

export default Task;
