import React, { useState } from "react";
import TodoItem from "./todoItem";
import InputArea from "./InputArea";

function App() {
  const [notes, setNotes] = useState([]) 

  function addClicked(inputValue, setInputValue){
    setNotes(prevItems => [...prevItems,inputValue])
    setInputValue('')
  }

  function deleteFunc(id){
    setNotes((prevItems) =>{
      return (prevItems.filter((value,index) =>{
        return index !== id
      }))
    })
    console.log('delete clicked '+ id)
    console.log(notes);
  }



  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea addClickedFunc = {addClicked}/>

      <div>
        <ul>
          {notes.map((note,index) => {
            return (<TodoItem
              key = {index}
              id = {index}
              text = {note}
              delClicked = {deleteFunc}
            />
            )
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
