import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayer, setEnteredPlayer] = useState("Unknown Entity");

  function handleClick() {
    setEnteredPlayer(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
