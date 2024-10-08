const values = [
  "AI and Innovation",
  "Healthcare Solutions",
  "Education Technology",
  "Environmental Sustainability",
  "Cutting-edge Development",
];
let index = 0;

function changeText() {
  document.getElementById("changingText").textContent = values[index];
  index = (index + 1) % values.length; // Cycle through the array
}

// Change text every 2.5 seconds
setInterval(changeText, 2500);

// Initialize the first text
changeText();
