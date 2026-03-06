// A simple random quote generator
const quotes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "I told my computer I needed a break, and now it won't stop sending me Kit-Kats.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Why don't programmers like nature? It has too many bugs.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display a random quote in the console every 3 seconds
setInterval(() => {
  console.log(getRandomQuote());
}, 3000);

// A random color generator function
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Changing the background color randomly every 5 seconds
setInterval(() => {
  document.body.style.backgroundColor = generateRandomColor();
}, 5000);

// A simple interactive button that changes text on click
const button = document.createElement('button');
button.innerHTML = 'Click me for randomness!';
document.body.appendChild(button);

button.addEventListener('click', () => {
  button.innerHTML = getRandomQuote();
});
