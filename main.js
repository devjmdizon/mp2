import "./style.css";
import fetchQuoteData from "./src/fetchQuoteData";

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("quote-author");

window.addEventListener("load", async () => {
  const quoteData = await fetchQuoteData("https://dummyjson.com/quotes");
  const quotesArray = quoteData.quotes;
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quote = quoteData.quotes[randomIndex].quote;
  const author = quoteData.quotes[randomIndex].author;
  quoteText.textContent = `" ${quote} "`;
  authorText.textContent = author;
});
