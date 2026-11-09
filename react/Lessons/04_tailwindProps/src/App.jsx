import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    name: "Shansay",
    age: 19,
  };

  let newArray = [1, 2, 4];

  return (
    <>
      <section id="center">
        <h1 className="bg-green-400 p-5 text-black! rounded-xl">
          Tailwind Test
        </h1>

        <Card userName="Paint" id="#1" obj={myObj} arr={newArray} />
        <Card userName="Design" id="#2" />
      </section>
    </>
  );
}

export default App;
