import Welcome from "./welcome";

function App() {
  const greet = "HolaAmigo!";
  return (
    <>
      <h1> {greet} </h1>
      <Welcome />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        atque dolorem voluptas dignissimos corporis cumque debitis nemo quas
        quibusdam quis?
      </p>
    </>
  );
}
export default App;
