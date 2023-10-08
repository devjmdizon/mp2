import changeGreeting from "./changeGreeting";

export default async function changeBackground(time) {
  if (time >= "00:00:00" && time < "05:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("https://images.hdqwalls.com/wallpapers/midnight-sunrise-4k-b1.jpg")');
  } else if (time >= "05:00:00" && time < "12:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("https://wallpapercave.com/wp/wp10712591.jpg")');
  } else if (time >= "12:00:00" && time < "13:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("https://img.gltuae.com/ContentImages/KOREA-JAPAN-0-2048x1217.jpeg")');
  } else if (time > "13:00:00" && time < "17:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("https://wallpapercave.com/wp/wp9123824.jpg")');
  } else {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("https://wallpapercave.com/wp/wp2737727.jpg")');
  }
}
