import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard name={"LemonTea"} price={60} />
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
}

export default App;
