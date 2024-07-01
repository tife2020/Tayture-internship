import React from "react";
import RightSideCont from "./RightSideCont";



function RightSideDefault({setRightSideItem}) {
  function handleCreateBtn (){
    setRightSideItem('createProject');
  }
  
  return (
    <RightSideCont>
      <img src="/logo.png" alt="logo" className=" w-24 " />
      <h1 className="text-3xl font-bold text-neutral-600">
        No Project Selected
      </h1>
      <p className="text-neutral-400 text-2xl ">
        Select a project or get started with a new one{" "}
      </p>
      <button onClick = {handleCreateBtn} className="bg-neutral-700 text-xl font-normal px-7 py-4 rounded-lg mt-5 text-neutral-300 ">
        Create new project
      </button>
    </RightSideCont>
  );
}

export default RightSideDefault;
