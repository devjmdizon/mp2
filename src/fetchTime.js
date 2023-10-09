import fetchData from "./fetchData";

export default async function fetchTime(lat, long) {
  const timeApiKey = "3d6c2a4ea16c430888e211d2604d23fd";
  const timeApi = `https://api.ipgeolocation.io/timezone?apiKey=${timeApiKey}&lat=${lat}&long=${long}`;
  return await fetchData(timeApi);
}
