import "./App.css";
import { Table } from "./components/table/table";
import { CardDetails } from "./components/card-details/card-details";

function App() {
  return (
    <div>
      <header className="App-header">Bridge Game</header>
      <div className="App">
        <Table />
        <CardDetails />
      </div>
    </div>
  );
}

export default App;
