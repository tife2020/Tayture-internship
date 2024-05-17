import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({onSelectSquare,activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectedSquare(rowIndex,colIndex) {
    setGameBoard((prevGameBoard) => {

      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      const updatedGameBoard2 = [...prevGameBoard];

      // When you need to update nested arrays (e.g., a 2D game board), 
      //it's important to ensure that you create a deep copy of the original array. This prevents unintended mutation of the original state.

      // 1. `const updateGameBoard = [...prevGameBoard]`: This line creates a shallow copy of the `prevGameBoard` array.
      // It copies the outer array but maintains references to the same inner arrays. If you modify the elements of `updateGameBoard`, 
      // the corresponding elements in `prevGameBoard` will also be modified, as they share references.

      // 2. `const updateGameBoard2 = [...prevGameBoard.map(innerArray => [...innerArray])]`: This line creates a deep copy of the `prevGameBoard`
      // array. It maps over each inner array (`innerArray`) in `prevGameBoard`, spreads its elements into a new array (`[...innerArray]`), 
      // and then spreads those new arrays into another array (`[...prevGameBoard.map(...)]`). This ensures that both the outer array and inner
      // arrays are copied, and any modifications to `updateGameBoard2` won't affect `prevGameBoard`.

      // In summary, `updateGameBoard` is a shallow copy and `updateGameBoard2` is a deep copy of `prevGameBoard`.
      // Depending on your use case, you may choose one approach over the other. If you need to modify the inner arrays without affecting
      // the original state, you should use a deep copy like `updateGameBoard2`.

      console.log(updatedGameBoard2);
      console.log(updatedGameBoard); //the console.log output of the 2 are the same the difference is in the explanation above

      
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
      
      
      return updatedGameBoard
      
    });
    onSelectSquare()
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectedSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
