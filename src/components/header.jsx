import reactImg from "../assets/react-core-concepts.png";
import "./header.css";
function genRandomDescrption() {
  return reactDescrption[Math.floor(Math.random() * reactDescrption.length)];
}
export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {genRandomDescrption()} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}
const reactDescrption = ["fundamental", "crucial", "core"];
