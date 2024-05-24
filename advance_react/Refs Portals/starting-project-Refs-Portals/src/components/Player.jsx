import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const imageSelector = useRef();
  const [enteredPlayer, setEnteredPlayer] = useState("Unknown Entity");

  function handleClick() {
    setEnteredPlayer(playerName.current.value);
    playerName.current.value = "";
    console.log(imageSelector.current.accept);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "Unknown Entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
      {/* making a button trigger the click action in another element (input type = 'file')  Start*/}
      {/* <p
        style={{
          borderRadius: "50%",
          height: "100px",
          width: "100px",
          backgroundColor: "rgba(255,255,255,0.9)",
          margin: "auto",
        }}
      >
        <input
          type="file"
          ref={imageSelector}
          style={{
            display: "none",
          }}
        />
        <button
          onClick={() => imageSelector.current.click()}
          style={{
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px",
          }}
        >
          upload
        </button>
      </p> */}
      {/* END */}
    </section>
  );
}
