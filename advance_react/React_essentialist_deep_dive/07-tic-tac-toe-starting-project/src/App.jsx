import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => {
      return curActivePlayer === "X" ? "O" : "X";
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
        />
      </div>
      Log
    </main>
  );
}

export default App;
