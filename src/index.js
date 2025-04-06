import { greeting } from "./greeting.js";
import "./style.css"
import img from "../public/goblin.png"

console.log(greeting)

const image = document.createElement("img");
image.src = img;

document.body.appendChild(image);
