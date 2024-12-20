let time = 90;
const timerElement = document.querySelector(".timer");
const headers = document.querySelectorAll(".header");
const footers = document.querySelectorAll(".footer");

function updateTimer() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function switchHeaderFooter() {
  headers.forEach((header) => header.classList.toggle("active"));
  footers.forEach((footer) => footer.classList.toggle("active"));
}

function startTimer() {
  updateTimer();
  const timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimer();
    } else {
      switchHeaderFooter();
      time = 90;
    }
  }, 1000);
}

startTimer();

const searchInput = document.getElementById("search-input");
const logo = document.querySelector(".header-1 .header-content .logo");

searchInput.addEventListener("focus", () => {
  logo.classList.add("hidden");
});

searchInput.addEventListener("blur", () => {
  logo.classList.remove("hidden");
});
function updatePlaceholder() {
  const isMobile = window.innerWidth <= 768;

  searchInput.placeholder = isMobile ? "Recherchez" : "Que cherchez-vous?";
}

updatePlaceholder();

window.addEventListener("resize", updatePlaceholder);

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown-btn");

    button.addEventListener("click", function () {
      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("open");
        }
      });

      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", function (event) {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
