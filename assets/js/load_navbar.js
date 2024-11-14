// Fetch the navbar.html and insert its content into the placeholder
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Add toggle button functionality after navbar is loaded
      const toggle = document.createElement("div");
      toggle.classList.add("navbar-toggle");
      toggle.innerHTML = "☰"; // Hamburger icon
      const navbar = document.querySelector(".navbar");
      const menu = navbar.querySelector("ul");

      // Add toggle button to the navbar
      navbar.prepend(toggle);

      // Toggle the menu visibility
      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    })
    .catch((error) => console.log("Error loading navbar:", error));
});
