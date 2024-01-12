import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import allNotes from '../notes'

function App() {
  return (
    <div>
      <Header />
      
      {allNotes.map(note => <Note
        key = {note.key} 
        title = {note.title}
        content = {note.content}
      />)}
      
      <Footer />
    </div>
  );
}

export default App;
