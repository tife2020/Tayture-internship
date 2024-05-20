import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = initialGameBoard;



  for (const combination of WINNING_COMBINATIONS ){
    const firstSymbol;
    const secondSymbol;
    const thirdSymbol;
  }

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

  for (const turn of gameTurns){
    const {square, player} = turn;
    const {row , col} = square

    gameBoard[row][col] = player
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
          board = {gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
