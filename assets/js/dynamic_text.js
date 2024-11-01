const values = [
  "Healthcare Solutions",
  "ML/DL Models",
  "Education Technology",
  "Cross Platform Apps",
  "Environmental Sustainability",
  "AI Agents",
];
let index = Math.floor(Math.random() * values.length);

function changeText() {
  document.getElementById("changingText").textContent = values[index];
  index = (index + 1) % values.length; // Cycle through the array
}

// Change text every 2.5 seconds
setInterval(changeText, 2500);

// Initialize the first text
changeText();
