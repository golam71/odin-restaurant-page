import food1 from "../public/food/1.png";
import food2 from "../public/food/2.png";
import food3 from "../public/food/3.png";
import food4 from "../public/food/4.png";
import food5 from "../public/food/5.png";
import food6 from "../public/food/6.png";
import "./styles/menu/menu.css";

let data = [
  {
    name: "Mutton Biryani",
    image: food1,
    description:
      "Fragrant basmati rice layered with slow-cooked spiced mutton, infused with saffron, fried onions, and traditional herbs. A rich, hearty dish perfect for a full meal.",
    price: 12,
  },
  {
    name: "Chana Masala",
    image: food2,
    description:
      "Soft chickpeas simmered in a thick tomato and onion gravy, seasoned with garam masala, cumin, and fresh coriander. A satisfying vegetarian option full of flavor.",
    price: 8,
  },
  {
    name: "Chicken Curry",
    image: food3,
    description:
      "Bone-in chicken cooked in a rich curry made with ground spices, garlic, ginger, and fresh tomatoes. Best served hot with naan or rice for a complete experience.",
    price: 10,
  },
  {
    name: "Samosa",
    image: food4,
    description:
      "Golden-fried triangular pastry filled with spiced potatoes and peas (or meat), wrapped in a crispy shell. A classic snack, perfect with tamarind or mint chutney.",
    price: 5,
  },
  {
    name: "Naan",
    image: food5,
    description:
      "Freshly baked soft and chewy flatbread, made in a tandoor and brushed with butter or garlic. Ideal for scooping up curries and gravies.",
    price: 3,
  },
  {
    name: "Seekh Kebab",
    image: food6,
    description:
      "Spiced minced meat skewers grilled to perfection, smoky and juicy with bold seasoning. Great as a starter or wrapped in naan for a quick bite.",
    price: 9,
  },
];

export function menu() {
    let container = document.createElement("div");
    container.classList.add("container");
    data.forEach((item) => {
        console.log(item);

        let card = document.createElement("div");
        card.classList.add("card");
        let image = document.createElement("img");

        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let strong = document.createElement("strong");

        h3.innerText = item.name;
        image.src = item.image;
        p.innerText = item.description;
        strong.innerText = item.price;
        card.appendChild(image);p
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(strong);

        container.append(card);
  });
  document.getElementById("content").appendChild(container);
}
