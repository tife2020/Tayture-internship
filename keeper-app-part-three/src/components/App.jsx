import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [notes, setNotes] = useState([]) 

  function getValue(e){
    let {value} = e.target;
    setInputValue(value)
  }

  function addClicked(){
    setNotes([...notes,inputValue])
    setInputValue('')
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getValue} value={inputValue}/>
        <button onClick={addClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {notes.map(note => {
            return (<li>{note}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
