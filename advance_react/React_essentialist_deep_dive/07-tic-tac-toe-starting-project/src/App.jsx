import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./component/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard.map(innerArr => [...innerArr])];

  function setActivePlayer(gameTurns) {
    let activePlayer = "X";
  
    gameTurns.length > 0 && gameTurns[0].player === "X"
      ? (activePlayer = "O")
      : (activePlayer = "X");
  
    return activePlayer;
  }

  let activePlayer = setActivePlayer(gameTurns);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setActivePlayer((curActivePlayer) => {
  //     return curActivePlayer === "X" ? "O" : "X";
  //   });

  function handleSelectSquare(rowIndex, colIndex) {
    // let currPlayer = "X";

    setGameTurns((prevTurns) => {
      let currPlayer = setActivePlayer(prevTurns);
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


  // this sets the symbol in the appropriate square
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // Checks for a COmbination to get winner
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
    }
  }

  // this is to check for Match Draw
  let draw = gameTurns.length === 9 && !winner


  function handleRematch(){
    setGameTurns([])
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
        {(winner || draw) && <GameOver winner = {winner} onClick = {handleRematch}/>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
