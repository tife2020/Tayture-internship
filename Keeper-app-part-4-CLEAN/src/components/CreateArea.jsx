import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function getValue(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.submitNoteFunc(note, setNote);
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={getValue}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={getValue}
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
