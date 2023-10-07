import changeGreeting from "./changeGreeting";

export default async function changeBackground(time) {
  if (time >= "00:00:00" && time < "05:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("../images/midnight-image.jpg")');
  } else if (time >= "05:00:00" && time < "12:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("../images/morning-image.jpeg")');
  } else if (time >= "12:00:00" && time < "13:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("../images/lunch-image.png")');
  } else if (time > "13:00:00" && time < "17:00:00") {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("../images/afternoon-image.png")');
  } else {
    changeGreeting(time);
    return (document.body.style.backgroundImage =
      'url("../images/night-image.jpg")');
  }
}
