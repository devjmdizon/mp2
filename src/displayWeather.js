import "../style.css";
export default async function displayWeather(
  moreBtn,
  detailsContainer,
  tempLabel
) {
  const arrowDownHTML = "\u2193";
  const weatherDescript = document.getElementById("weather-descript");
  const container = document.getElementById("container");
  const topContainer = document.getElementById("topContainer");
  const originalTop = topContainer.style.margin;
  const originalMargin = detailsContainer.style.margin;

  if (weatherDescript.style.display === "none") {
    weatherDescript.style.display = "flex";
    container.style.display = "flex";
    tempLabel.style.display = "block";
    detailsContainer.style.margin = `40px 0 0px 20px`;
    topContainer.style.margin = `100px 15px 0`;
    moreBtn.textContent = `LESS ${arrowDownHTML}`;
  } else {
    weatherDescript.style.display = "none";
    detailsContainer.style.margin = originalMargin;
    topContainer.style.margin = originalTop;
    moreBtn.textContent = `MORE ${arrowDownHTML}`;
  }
}
