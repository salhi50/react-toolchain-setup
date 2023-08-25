import _ from "_";
import "./assets/style.css";
import pain from "./assets/pain.jpg";
import jsonData from "data/data.json";
import yamlData from "data/data.yaml";
import text from "data/text.txt";
const painImageWithURL = new URL('./assets/pain.jpg', import.meta.url);
import { sum, factorial } from "utils";
import { Numbers } from "utils";
import React from "react";
import ReactDOM from "react-dom/client";

console.log(_.camelCase("mohammed ali essalihi"));
console.log(_.capitalize("mohammed ali essalihi"));
console.log(_.add(8,9));
console.log(pain);
console.log(jsonData);
console.log(yamlData);
console.log(text);
console.log(painImageWithURL);
console.log(sum(5,6));
console.log(factorial(4));
console.log(process.env.NODE_ENV);
console.log(Numbers.one, Numbers.two, Numbers.three);

// React App

function App() {
  const [count, setCount] = React.useState(0);

  const increase = () => setCount(c => c + 1);
  const decrease = () => setCount(c => c - 1);

  return <>
    <button onClick={decrease}>-</button>
    <span>{count}</span>
    <button onClick={increase}>+</button>
  </>
}

const rootEl = document.getElementById("app") as HTMLDivElement;
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);