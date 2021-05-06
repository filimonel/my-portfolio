const menuToggle = document.querySelector(".menu-btn");
const showcase = document.querySelector(".showcase");
const meneSelections = document.querySelectorAll(".menu-selections");
const aboutMeText = document.querySelector(".text-about-me");
const audio = document.querySelector("embed");

audio.volume = 0.2;

menuToggle.addEventListener("click", (e) => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

meneSelections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    menuToggle.classList.remove("active");
    showcase.classList.remove("active");
  });
});
