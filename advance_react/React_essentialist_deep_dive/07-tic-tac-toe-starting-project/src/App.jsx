import GameBoard from "./component/GameBoard";
import Player from "./component/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player intialName='Player 1' symbol='X'/>
        <Player intialName='Player 2' symbol='O'/>
        </ol>
        <GameBoard />
      </div>
      Log
    </main>
  );
}

export default App;
