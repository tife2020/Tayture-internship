import { useState } from "react";

export default function Player() {

  const [enteredPlayerName, setentEredPlayerName] = useState('')
  const [player, setPlayer] = useState('Unknown Entity')

  function handleChange (event){
    const {value} = event.target
    setentEredPlayerName(value)
  }

  function handleClick(){
    setPlayer(enteredPlayerName)
    setentEredPlayerName('')
  }
  return (
    <section id="player">
      <h2>Welcome {player}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
