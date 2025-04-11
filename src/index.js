import "./styles/global.css";
import "./styles/nav.css";
import "./styles/contact/contact.css";

import { home } from "./home.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";

home();
// menu();
// contact();

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

["home", "menu", "about"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    if (id === "home") {
      clearContent();
      home();
    } else if (id === "menu") {
      clearContent();
      menu();
    } else {
      clearContent();
      contact();
    }
  });
});
