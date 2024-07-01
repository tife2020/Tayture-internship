import React, { useRef } from "react";
import RightSideCont from "./RightSideCont";
import FormInput from "./FormInput";

function CreateProject({ setRightSideItem, projects, setProjects }) {
  function saveProject() {
    setProjects((prevProject) => {
      if (prevProject.length === 0) {
        return [
          {
            title: title.current.value,
            description: description.current.value,
            date: date.current.value,
            tasks: [],
          },
        ];
      } else {
        return [
          ...prevProject,
          {
            title: title.current.value,
            description: description.current.value,
            date: date.current.value,
            tasks: [],
          }
        ];
      }
    });
  }

  function handleSave(event) {
    event.preventDefault();
    setRightSideItem("rightSideDefault");
    saveProject();
    console.log(projects);
  }
  function handleCancel(event) {
    event.preventDefault();
    setRightSideItem("rightSideDefault");
  }

  const title = useRef();
  const description = useRef();
  const date = useRef();

  return (
    <RightSideCont>
      <form className="flex flex-col gap-5 w-full">
        <div className="flex justify-end w-full items-baseline gap-4">
          <button
            onClick={handleCancel}
            className="font-medium  rounded-lg mt-5 text-neutral-700 "
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-neutral-800 font-medium px-7	 py-2 rounded-lg text-white "
          >
            Save
          </button>
        </div>

        <FormInput
          label="Title"
          type="text"
          placeholder="Title"
          Input="input"
          ref={title}
        />
        <FormInput
          label="Description"
          type={null}
          placeholder="Project description"
          Input="textarea"
          ref={description}
        />
        <FormInput
          label="Date"
          type="date"
          Input="input"
          placeholder="mm.dd.yyyy"
          ref={date}
        />
      </form>
    </RightSideCont>
  );
}

export default CreateProject;
