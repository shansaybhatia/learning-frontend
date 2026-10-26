import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(11);
  const [message, setMessage] = useState("");

  const incrementValue = () => {
    const nextValue = counter + 1;

    if (nextValue <= 20) {
      setCounter(nextValue);
    }

    if (nextValue >= 20) {
      setMessage("Maximum Value Reached!");
    } else {
      setMessage("");
    }
  };

  const decrementValue = () => {
    const prevValue = counter - 1;

    if (prevValue >= 0) {
      setCounter(prevValue);
    }

    if (prevValue <= 0) {
      setMessage("Minimum Value Reached!");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <section id="center">
        <h1>Counter!</h1>
        <h2>Counter Value: {counter}</h2>
        <span>
          <button onClick={incrementValue} className="counter">
            Increment value {counter}
          </button>
          <button onClick={decrementValue} className="counter">
            Decrement value {counter}
          </button>
        </span>
        <h3>{message}</h3>
      </section>
    </>
  );
}

export default App;
