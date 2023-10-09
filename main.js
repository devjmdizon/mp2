import "./style.css";
import fetchData from "./src/fetchData";
import changeBackground from "./src/changeBackground";
import changeGreeting from "./src/changeGreeting";
import displayQuote from "./src/displayQuote";
import displayWeather from "./src/displayWeather";
import fetchTime from "./src/fetchTime";
import fetchWeather from "./src/fetchWeather";

const form = document.querySelector("form");
const tempLabel = document.getElementById("tempLabel");
const detailsContainer = document.getElementById("detailsContainer");
const weather = document.getElementById("weather");
const moreBtn = document.getElementById("more-btn");
const time = document.getElementById("time");
const timeZone = document.getElementById("timezone");
const dateToday = document.getElementById("dateToday");
const dayofWeek = document.getElementById("dayofWeek");

setInterval(displayQuote, 10000);
async function main(e) {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const weatherData = await fetchWeather(location);
  // console.log(weatherData);
  const temp = parseInt(weatherData.main.temp - 273.15).toFixed(0);
  const lat = weatherData.coord.lat;
  const long = weatherData.coord.lon;
  const timeData = await fetchTime(lat, long);

  tempLabel.textContent = `${temp}°C`;
  weather.textContent = `${weatherData.weather[0].main}`;
  time.textContent = timeData.time_24;
  changeBackground(time.textContent);
  timeZone.textContent = `${timeData.timezone}`;
  dateToday.textContent = `${timeData.date}`;
  dayofWeek.textContent = `${timeData.date_time_wti}`;
  dayofWeek.textContent = dayofWeek.textContent.substring(
    0,
    dayofWeek.textContent.indexOf(",")
  );

  moreBtn.addEventListener("click", () =>
    displayWeather(moreBtn, detailsContainer, tempLabel)
  );
}

form.addEventListener("input", main);
