import "./App.css";
import Clicker from "./Components/Clicker";
import Header from "./Components/Header";

function App() {
  
  return (
    <div className="App">
      <Header />
      <section className="Body">
        <Clicker />      
      </section>
    </div>
  );
}

export default App;
