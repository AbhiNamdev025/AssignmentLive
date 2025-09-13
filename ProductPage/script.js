// Mobile menu toggle functionality
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

// Dropdown menu functionality for mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle("active");
    }
  });
});

// Close modals when clicking outside
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("overlay")) {
    e.target.style.visibility = "hidden";
    e.target.style.opacity = "0";
  }

  if (e.target.classList.contains("modal")) {
    e.target.style.visibility = "hidden";
    e.target.style.opacity = "0";
  }
});
