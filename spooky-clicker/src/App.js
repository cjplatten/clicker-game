import "./App.css";
import Clicker from "./Components/Clicker";

function App() {
  let ghosts = 0;
  return (
    <div className="App">
      <header className="App-header">
        <Clicker ghosts={ghosts} />
        <p>Boo</p>
        <p>Ghosts: {ghosts}</p>
      </header>
    </div>
  );
}

export default App;
