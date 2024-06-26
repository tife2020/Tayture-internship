import { useState } from "react";
import CreateProject from "./components/CreateProject";
import LeftSide from "./components/LeftSide";
import RightSideDefault from "./components/RightSideDefault";
import ProjectTask from "./components/ProjectTask";

function App() {
  const [projects, setProjects] = useState([]);
  const [rightSideItem, setRightSideItem] = useState("rightSideDefault");

  const rightSideContents = {
    rightSideDefault: <RightSideDefault setRightSideItem={setRightSideItem} />,
    createProject: (
      <CreateProject
        setRightSideItem={setRightSideItem}
        projects={projects}
        setProjects={setProjects}
      />
    ),
    projectTask: <ProjectTask projects={projects} setProjects={setProjects} />,
  };


  return (
    <>
      <div className="flex">
        <LeftSide setRightSideItem={setRightSideItem} projects={projects} />
        {rightSideContents[rightSideItem]}
      </div>
    </>
  );
}

export default App;
