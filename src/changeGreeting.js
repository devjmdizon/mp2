export default async function changeGreeting(time) {
  const greet = document.getElementById("greeting");
  if (time >= "00:00:00" && time < "05:00:00") {
    return (greet.textContent = "MIDNIGHT, IT'S CURRENTLY");
  } else if (time >= "05:00:00" && time < "12:00:00") {
    return (greet.textContent = "GOOD MORNING, IT'S CURRENTLY");
  } else if (time >= "12:00:00" && time < "13:00:00") {
    return (greet.textContent = "LUNCH TIME, IT'S CURRENTLY");
  } else if (time > "13:00:00" && time < "17:00:00") {
    return (greet.textContent = "GOOD AFTERNOON, IT'S CURRENTLY");
  } else {
    return (greet.textContent = "GOOD EVENING, IT'S CURRENTLY");
  }
}
