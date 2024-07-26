import { useState } from "react";
import CreateProject from "./components/CreateProject";
import LeftSide from "./components/LeftSide";
import RightSideDefault from "./components/RightSideDefault";
import ProjectTask from "./components/ProjectTask";

function App() {
  const [projectState, setProjectState] = useState({
    rightSideItem: "rightSideDefault",
    projects: [],
  });

  function setRightSideItem(item) {
    setProjectState((prevState) => ({
      ...prevState,
      rightSideItem: item,
    }));
  }

  function addProject(newProject) {
    setProjectState((prevState) => {
      let project = {
        ...newProject,
        tasks: [],
        id: prevState.projects.length,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, project],
      };
    });
  }

  // selectedProjectId
  const [selectedProjectId, setSelectedProjectId] = useState("");

  // selectedProject
  const selectedProject = projectState.projects[selectedProjectId];

  function deleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter(
        (project) => project.id !== selectedProjectId
      ),
    }));
    setRightSideItem("rightSideDefault");
  }

  function addTask(taskValue) {
    if (!taskValue) {
      return;
    } else {
      setProjectState((prevState) => ({
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === selectedProjectId) {
            return {
              ...project,
              tasks: [...project.tasks, taskValue],
            };
          } else {
            return project;
          }
        }),
      }));
    }
  }

  function deleteTask(taskIndex) {
    setProjectState((prevState) => ({
      ...prevState,
      projects: prevState.projects.map((project) => {
        if (project.id === selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task, index) => index !== taskIndex),
          };
        } else {
          return project;
        }
      }),
    }));
  }

  const rightSideContents = {
    rightSideDefault: <RightSideDefault setRightSideItem={setRightSideItem} />,
    createProject: (
      <CreateProject
        setRightSideItem={setRightSideItem}
        addProject={addProject}
      />
    ),
    projectTask: (
      <ProjectTask
        selectedProject={selectedProject}
        deleteProject={deleteProject}
        addTask={addTask}
        deleteTask={deleteTask}
      />
    ),
  };

  return (
    <>
      <div className="flex">
        <LeftSide
          setRightSideItem={setRightSideItem}
          projects={projectState.projects}
          setSelectedProjectId={setSelectedProjectId}
          selectedProjectId={selectedProjectId}
        />
        {rightSideContents[projectState.rightSideItem]}
      </div>
    </>
  );
}

export default App;
