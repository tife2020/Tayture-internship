import React from "react";
import Emojipedia from '../emojipedia'
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map((emoji) => {
          return (
            <Entry
              key = {emoji.id}
              name = {emoji.name} 
              emoji = {emoji.emoji}
              meaning = {emoji.meaning}
            />
          )
        })}
      </dl>
    </div>
  );
}

export default App;
