import Header from "./components/header.jsx";
import Core from "./components/core-Concepts.jsx";
import Examples from "./components/examples.jsx";
const user = {
  firstName: "Ziad",
  lastName: "gamal",
  age: 22,
  location: "Alexandria",
  job: "Front end developer",
};
// const obj = {
//   image: CORE_CONCEPTS[0].image,
//   title: CORE_CONCEPTS[0].title,
//   description: CORE_CONCEPTS[0].description,
// }
function Greet() {
  return (
    <>
      <button
        id="user"
        onClick={() => window.open("https://github.com/ziadgamal1", "_blank")}
      >
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>{user.job}</p>
      </button>
      <p>
        project by{" "}
        <a href="https://github.com/mschwarzmueller">
          @maxmillian schwarzmueller
        </a>
      </p>
    </>
  );
}

function MainGoal() {
  return <p>My main goal: Learn React from the ground up.</p>;
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Core />
        <Examples />
        <MainGoal />
        <Greet />
      </main>
    </div>
  );
}

export default App;
