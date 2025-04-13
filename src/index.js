import "./styles/global.css";
import "./styles/nav.css";
import "./styles/contact/contact.css";

import { home } from "./home.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";

home();

function clearContent() {
  document.getElementById("content").innerHTML = "";
  console.log("cleared");
}
function clearBoarder() {
  document.getElementById("home").style.border = "2px transparent";
  document.getElementById("menu").style.border = "2px transparent";
  document.getElementById("about").style.border = "2px transparent";
}
function addBorder(idName) {
  document.getElementById(idName).style.border = "2px solid";
  console.log(idName);
}

["home", "menu", "about"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    if (id === "home") {
      clearContent();
      clearBoarder();
      addBorder(id);
      home();
    } else if (id === "menu") {
      clearContent();
      menu();
      clearBoarder();
      addBorder(id);
    } else {
      clearContent();
      contact();
      clearBoarder();
      addBorder(id);
    }
  });
});
