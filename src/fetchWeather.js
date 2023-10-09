import fetchData from "./fetchData";

export default async function fetchWeather(location) {
  const weatherApiKey = "dcd6046ddeb23f20f5c953f9d404473d";
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`;
  return await fetchData(weatherApi);
}
