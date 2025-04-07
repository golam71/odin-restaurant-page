let imgx = document.createElement("img")
imgx.setAttribute("src", "../public/food.png")

let p = document.createElement("p")
p.innerText = "Step into a world where the rich traditions of Asian cuisine meet modern culinary artistry. From the bold spices of Thai curries to the delicate balance of Japanese sushi, every dish is crafted with passion and precision. At our restaurant, we celebrate the diversity of Asia’s flavors, offering dining experience."

let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <path fill="currentColor" d="M22 11h-2.3c-.3-1.1-.8-2.2-1.5-3l3.4-5.4l-1.7-1.1l-3.2 5.1c-.4-.3-.7-.5-1.2-.7l.9-3.6l-1.9-.5l-.8 3.4c-.6-.1-1.1-.2-1.7-.2c-3.7 0-6.8 2.6-7.7 6H2c0 4.1 2.5 7.6 6 9.2V22h8v-1.8c3.5-1.6 6-5.1 6-9.2M12 7c2.6 0 4.8 1.7 5.6 4H6.4c.8-2.3 3-4 5.6-4" /> </svg>';
let svgWrapper = document.createElement("span")
svgWrapper.innerHTML=svg
let bold = document.createElement("b");
bold.innerText = "Dining";
let h1 = document.createElement("h1");
h1.innerText = "Redefining Asian Fine ";

let heroText = document.createElement("div");
heroText.classList.add("hero-text");

let flexHero = document.createElement("div");
flexHero.classList.add("flex-hero");

let content = document.createElement("div");
content.id = "content";

function flexHeroFunc(){
    h1.appendChild(bold)
    h1.appendChild(svgWrapper)
    heroText.appendChild(h1)
    heroText.appendChild(p)

    flexHero.appendChild(heroText)
    flexHero.appendChild(imgx)
}

export function home() {
    flexHeroFunc()
}