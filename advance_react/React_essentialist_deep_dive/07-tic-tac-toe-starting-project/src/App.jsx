import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/log";

function setActivePlayer(gameTurns) {
  let activePlayer = "X";

  gameTurns.length > 0 && gameTurns[0].player === "X"
    ? (activePlayer = "O")
    : (activePlayer = "X");

  return activePlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = setActivePlayer(gameTurns);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setActivePlayer((curActivePlayer) => {
  //     return curActivePlayer === "X" ? "O" : "X";
  //   });

  function handleSelectSquare(rowIndex, colIndex) {

    // let currPlayer = "X";

    setGameTurns((prevTurns) => {

      let currPlayer = setActivePlayer(prevTurns)
      // prevTurns.length > 0 && prevTurns[0].player === "X"
      //   ? (currPlayer = "O")
      //   : (currPlayer = "X");

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            intialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
