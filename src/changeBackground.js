import changeGreeting from "./changeGreeting";

export default async function changeBackground(time) {
  if (time >= "00:00:00" && time < "05:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("asset/midnight-image.jpg")');
  } else if (time >= "05:00:00" && time < "12:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("asset/morning-image.jpeg")');
  } else if (time >= "12:00:00" && time < "13:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("asset/lunch-image.png")');
  } else if (time > "13:00:00" && time < "17:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("asset/afternoon-image.png")');
  } else {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("asset/night-image.jpg")');
  }
}
