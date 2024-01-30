import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function submitNote(note) {
    setNotes((prevNotes) => {
      if (note.title === "" && note.content === "") {
        alert('fill both inputs')
        return prevNotes
      } else {
        return [
          ...prevNotes,
          note
        ];
      }
    });

  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea submitNoteFunc={submitNote} />
      {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              deleteNote={deleteNote}
            />
          );
      })}
      <Footer />
    </div>
  );
}

export default App;
