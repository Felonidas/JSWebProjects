//audio
window.addEventListener('click', () => {
  document.getElementById('video').play();
});

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

//let apiQuotes = [];

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

// Get Quotes From API
// async function getQuotes() {
//  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//  try {
//    const response = await fetch(apiUrl);
//    apiQuotes = await response.json();
//    newQuote();
//  } catch (error) {
//    console.log(error)
//  }
//}

//on load
//getQuotes();
//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);