import "./styles/home/hero.css";
import "./styles/home/time.css";
import "./styles/home/location.css";
import foodImg from "../public/food.png";

function flexHeroFunc() {
  let imgx = document.createElement("img");
  imgx.setAttribute("src", foodImg);

  let p = document.createElement("p");
  p.innerText =
    "Step into a world where the rich traditions of Asian cuisine meet modern culinary artistry. From the bold spices of Thai curries to the delicate balance of Japanese sushi, every dish is crafted with passion and precision. At our restaurant, we celebrate the diversity of Asia’s flavors, offering dining experience.";

  let svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <path fill="currentColor" d="M22 11h-2.3c-.3-1.1-.8-2.2-1.5-3l3.4-5.4l-1.7-1.1l-3.2 5.1c-.4-.3-.7-.5-1.2-.7l.9-3.6l-1.9-.5l-.8 3.4c-.6-.1-1.1-.2-1.7-.2c-3.7 0-6.8 2.6-7.7 6H2c0 4.1 2.5 7.6 6 9.2V22h8v-1.8c3.5-1.6 6-5.1 6-9.2M12 7c2.6 0 4.8 1.7 5.6 4H6.4c.8-2.3 3-4 5.6-4" /> </svg>';
  let svgWrapper = document.createElement("span");
  svgWrapper.innerHTML = svg;
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

  h1.appendChild(bold);
  h1.appendChild(svgWrapper);
  heroText.appendChild(h1);
  heroText.appendChild(p);

  flexHero.appendChild(heroText);
  flexHero.appendChild(imgx);
  document.getElementById("content").append(flexHero);
}

function timeTablefunc() {
  let timeTableJsonData = [
    {
      day: "Monday",
      opening: "11:00 AM",
      closing: "10:00 PM",
    },
    {
      day: "Tuesday",
      opening: "11:00 AM",
      closing: "10:00 PM",
    },
    {
      day: "Wednesday",
      opening: "11:00 AM",
      closing: "10:00 PM",
    },
    {
      day: "Thursday",
      opening: "11:00 AM",
      closing: "10:00 PM",
    },
    {
      day: "Friday",
      opening: "11:00 AM",
      closing: "11:00 PM",
    },
    {
      day: "Saturday",
      opening: "12:00 PM",
      closing: "11:00 PM",
    },
    {
      day: "Sunday",
      opening: "12:00 PM",
      closing: "10:00 PM",
    },
  ];

  let time = document.createElement("div");
  time.classList.add("time");
  let h3 = document.createElement("h3");
  h3.innerText = "Time Table";
  const calendarIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 14q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m4 0q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m4 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></svg>';
  let calendarSpan = document.createElement("span");
  calendarSpan.innerHTML = calendarIcon;
  h3.appendChild(calendarSpan);
  let data = document.createElement("div");
  data.classList.add("data");
  let datesDiv = document.createElement("div");
  timeTableJsonData.forEach((item) => {
    let p = document.createElement("p");
    p.innerText = item.closing;
    datesDiv.appendChild(p);
  });
  let startDiv = document.createElement("div");
  timeTableJsonData.forEach((item) => {
    let p = document.createElement("p");
    p.innerText = item.closing;
    startDiv.appendChild(p);
  });
  let closingDiv = document.createElement("div");
  timeTableJsonData.forEach((item) => {
    let p = document.createElement("p");
    p.innerText = item.closing;
    closingDiv.appendChild(p);
  });

  data.appendChild(datesDiv);
  data.appendChild(startDiv);
  data.appendChild(closingDiv);
  time.appendChild(h3);
  time.appendChild(data);
  document.getElementById("content").append(time);
  return;
}

function locationFunc() {
  let locationDiv = document.createElement("div");
  locationDiv.classList.add("location");
  let h3 = document.createElement("h3");
  h3.innerText = "Location";
  const locationIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg>';
  const span = document.createElement("span");
  span.innerHTML = locationIcon;
  h3.appendChild(span);

  let p = document.createElement("p");
  p.innerText =
    "House number 123 on Forest Drive, a quiet residential street Located in the heart of Forestville, a peaceful wooded town Situated within the scenic state of Maine, known for its forests and coastline United States of America — nestled in the northeastern region of the country";
  locationDiv.appendChild(h3);
  locationDiv.appendChild(p);
  document.getElementById("content").append(locationDiv);
}

export function home() {
  flexHeroFunc();
  timeTablefunc();
  locationFunc();
}
