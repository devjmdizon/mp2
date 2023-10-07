import "./style.css";
import fetchData from "./src/fetchData";
import changeBackground from "./src/changeBackground";
import changeGreeting from "./src/changeGreeting";

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("quote-author");
const form = document.querySelector("form");
const tempLabel = document.getElementById("tempLabel");

window.addEventListener("load", async () => {
  const quoteData = await fetchData("https://dummyjson.com/quotes");
  const quotesArray = quoteData.quotes;
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quote = quoteData.quotes[randomIndex].quote;
  const author = quoteData.quotes[randomIndex].author;
  quoteText.textContent = `" ${quote} "`;
  authorText.textContent = `- ${author}`;
});

async function main(e) {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const weatherApiKey = "dcd6046ddeb23f20f5c953f9d404473d";
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`;
  const weatherData = await fetchData(weatherApi);
  console.log(weatherData);

  const temp = parseInt(weatherData.main.temp - 273.15).toFixed(1);
  tempLabel.textContent = `${temp}°C`;
  const lat = weatherData.coord.lat;
  const long = weatherData.coord.lon;
  const timeApiKey = "3d6c2a4ea16c430888e211d2604d23fd";
  const timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${timeApiKey}&lat=${lat}&long=${long}`;

  const timeData = await fetchData(timeApi);
  const time = document.getElementById("time");
  time.textContent = timeData.time_24;
  changeBackground(time.textContent);

  const timeZone = document.getElementById("timezone");
  timeZone.textContent = `${timeData.timezone}`;

  const week = document.getElementById("week");
  week.textContent = `${timeData.week}`;

  const dateToday = document.getElementById("dateToday");
  dateToday.textContent = `${timeData.date}`;

  console.log(timeData);

  const moreBtn = document.getElementById("more-btn");
  const weatherDescript = document.getElementById("weather-descript");
  const container = document.getElementById("container");
  const detailsContainer = document.getElementById("detailsContainer");
  const topContainer = document.getElementById("topContainer");
  const originalMargin = detailsContainer.style.margin;
  const originalTop = topContainer.style.margin;

  const dayofWeek = document.getElementById("dayofWeek");
  dayofWeek.textContent = `${timeData.date_time_wti}`;
  dayofWeek.textContent = dayofWeek.textContent.substring(
    0,
    dayofWeek.textContent.indexOf(",")
  );

  moreBtn.addEventListener("click", () => {
    const arrowDownHTML = "\u2193";
    if (weatherDescript.style.display === "none") {
      weatherDescript.style.display = "flex";
      container.style.display = "flex";
      detailsContainer.style.margin = `40px 0 0px 20px`;
      topContainer.style.margin = `100px 15px 0`;
      moreBtn.textContent = `LESS ${arrowDownHTML}`;
    } else {
      weatherDescript.style.display = "none";
      detailsContainer.style.margin = originalMargin;
      topContainer.style.margin = originalTop;
      moreBtn.textContent = `MORE ${arrowDownHTML}`;
    }
  });
}

form.addEventListener("submit", main);
