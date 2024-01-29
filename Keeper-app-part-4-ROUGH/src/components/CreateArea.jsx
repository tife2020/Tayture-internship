import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState({
    inputName: "",
    inputValue: "",
  });

  function getValueTitle(e) {
    const { name, value } = e.target;
      setInputTitle({ inputName: name, inputValue: value });
    
  }

  const [inputContent, setInputContent] = useState({
    inputName: "",
    inputValue: "",
  });

  function getValueContent(e) {
    const { name, value } = e.target;
      setInputContent({ inputName: name, inputValue: value });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.submitNoteFunc(
            event,
            inputTitle,
            inputContent,
            setInputTitle,
            setInputContent
          );
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={getValueTitle}
          value={inputTitle.inputValue}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={getValueContent}
          value={inputContent.inputValue}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
