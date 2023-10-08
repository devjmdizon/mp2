import changeGreeting from "./changeGreeting";

export default async function changeBackground(time) {
  try {
    changeGreeting(time);

    let backgroundImageUrl;
    if (time >= "00:00:00" && time < "05:00:00") {
      backgroundImageUrl = "./src/asset/midnight-image.jpg";
    } else if (time >= "05:00:00" && time < "12:00:00") {
      backgroundImageUrl = "./src/asset/morning-image.jpeg";
    } else if (time >= "12:00:00" && time < "13:00:00") {
      backgroundImageUrl = "./src/asset/lunch-image.png";
    } else if (time > "13:00:00" && time < "17:00:00") {
      backgroundImageUrl = "./src/asset/afternoon-image.png";
    } else {
      backgroundImageUrl = "./src/asset/night-image.jpg";
    }

    const image = new Image();
    image.src = backgroundImageUrl;
    image.onload = function () {
      document.body.style.background = `url(${backgroundImageUrl})`;
    };
    image.onerror = function () {
      console.error("Error loading background image:", backgroundImageUrl);
    };
  } catch (error) {
    console.error("Error changing background:", error);
  }
}
