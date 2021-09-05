const closeBtn = document.querySelector(".close-nav");
openBtn = document.querySelector(".open-nav");
nav = document.querySelector(".nav");

closeBtn.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
});

openBtn.addEventListener("click", () => {
  nav.classList.add("navigation-open");
});
