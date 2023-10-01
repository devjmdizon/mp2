export default async function fetchQuoteData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
