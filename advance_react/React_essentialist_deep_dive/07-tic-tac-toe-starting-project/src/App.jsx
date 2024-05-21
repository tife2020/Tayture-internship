import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./component/GameOver";

const PLAYER = {
  X: 'Player 1',
  O: 'Player 2'
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveGameBoard (gameTurns){
  let gameBoard = [...initialGameBoard.map((innerArr) => [...innerArr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard
}

function deriveWinner (gameBoard,players){
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
      winner = players[firstSymbol];
    }
  }

  return winner
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYER);

  // let gameBoard = [...initialGameBoard.map((innerArr) => [...innerArr])];

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
  const gameBoard = deriveGameBoard(gameTurns)
  // for (const turn of gameTurns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }

  // Checks for a COmbination to get winner
  // let winner;

  // for (const combination of WINNING_COMBINATIONS) {
  //   const firstSymbol = gameBoard[combination[0].row][combination[0].column];
  //   const secondSymbol = gameBoard[combination[1].row][combination[1].column];
  //   const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

  //   if (
  //     firstSymbol &&
  //     firstSymbol === secondSymbol &&
  //     firstSymbol === thirdSymbol
  //   ) {
  //     winner = players[firstSymbol];
  //   }
  // }
  const winner = deriveWinner(gameBoard,players)
  // this is to check for Match Draw
  let draw = gameTurns.length === 9 && !winner;

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName={PLAYER.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            intialName={PLAYER.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onClick={handleRematch} />
        )}
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
