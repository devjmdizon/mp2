import fetchData from "./fetchData";
export default async function displayQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("quote-author");
  const quoteData = await fetchData("https://dummyjson.com/quotes");
  const quotesArray = quoteData.quotes;
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quote = quoteData.quotes[randomIndex].quote;
  const author = quoteData.quotes[randomIndex].author;
  quoteText.textContent = `" ${quote} "`;
  authorText.textContent = `- ${author}`;
}
