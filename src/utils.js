import fetchData from "./fetchData";
import changeBackground from "./changeBackground";

export async function fetchQuotes() {
  const quoteData = await fetchData("https://dummyjson.com/quotes");
  return quoteData.quotes;
}

export async function fetchWeather(location) {
  const weatherApiKey = "dcd6046ddeb23f20f5c953f9d404473d";
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`;
  return await fetchData(weatherApi);
}

export async function fetchTime(lat, long) {
  const timeApiKey = "3d6c2a4ea16c430888e211d2604d23fd";
  const timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${timeApiKey}&lat=${lat}&long=${long}`;
  return await fetchData(timeApi);
}

export function updateQuoteUI(quote, author) {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("quote-author");
  quoteText.textContent = `" ${quote} "`;
  authorText.textContent = `- ${author}`;
}

export function updateWeatherUI(weatherData) {
  const tempLabel = document.getElementById("tempLabel");
  const time = document.getElementById("time");
  const timeZone = document.getElementById("timezone");
  const weather = document.getElementById("weather");
  const dateToday = document.getElementById("dateToday");

  const temp = parseInt(weatherData.main.temp - 273.15).toFixed(0);
  tempLabel.style.display = "block";
  tempLabel.textContent = `${temp}°C`;

  time.textContent = weatherData.time_24;
  changeBackground(time.textContent);

  timeZone.textContent = `${weatherData.timezone}`;
  weather.textContent = `${weatherData.weather[0].main}`;
  dateToday.textContent = `${weatherData.date_time_wti.split(",")[0]}`;
}

export function toggleWeatherDetails() {
  const moreBtn = document.getElementById("more-btn");
  const weatherDescript = document.getElementById("weather-descript");
  const container = document.getElementById("container");
  const detailsContainer = document.getElementById("detailsContainer");
  const topContainer = document.getElementById("topContainer");
  const arrowDownHTML = "\u2193";

  if (weatherDescript.style.display === "none") {
    weatherDescript.style.display = "flex";
    container.style.display = "flex";
    detailsContainer.style.margin = `40px 0 0px 20px`;
    topContainer.style.margin = `100px 15px 0`;
    moreBtn.textContent = `LESS ${arrowDownHTML}`;
  } else {
    weatherDescript.style.display = "none";
    detailsContainer.style.margin = "originalMargin";
    topContainer.style.margin = "originalTop";
    moreBtn.textContent = `MORE ${arrowDownHTML}`;
  }
}
