
// DARK AND LIGHT MODE TOGGLE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggle.textContent = "Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    }
});

 // SCROLLREVEAL ANIMATIONS

ScrollReveal().reveal("section", {
    distance: "60px",
    duration: 1200,
    origin: "bottom",
    interval: 300,
    reset: true,
    opacity: 0,
    scale: 0.95
});
