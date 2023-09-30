export async function displayData(data) {
  const container = document.getElementById("data-container");
  const p = document.createElement("p");
  p.textContent = data.quote;
}
