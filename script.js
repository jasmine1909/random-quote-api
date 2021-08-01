const quoteText = document.getElementById("quote-text");
const quoteTags = document.getElementById("quote-tags");
const quoteAuthor = document.getElementById("quote-author");
const quoteBtn = document.getElementById("gen-btn");

//luke peavey quote
function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteTags.textContent = data.tags;
      quoteAuthor.textContent = `--${data.author}`;
    });
}
randomQuote();
quoteBtn.addEventListener("click", () => {
  randomQuote();
});
