import _ from "lodash"
import "./assets/style.css";
import pain from "./assets/pain.jpg";
import jsonData from "./data/data.json";
import yamlData from "./data/data.yaml";
import text from "./data/text.txt";
const painImageWithURL = new URL('./assets/pain.jpg', import.meta.url);
import { sum, factorial } from "./utilities";

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