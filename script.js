// Dom Elements

const menuToggle = document.querySelector(".menu-btn");
const showcase = document.querySelector(".showcase");
const menuSelections = document.querySelectorAll(".menu-selections");
const aboutMeText = document.querySelector(".text-about-me");
const aboutMe = document.querySelector(".about-me");
const icons = document.querySelector(".program-icons-container > svg");
const body = document.querySelector("body");
const video = document.querySelector("video");
// Event Listeners

menuToggle.addEventListener("click", (e) => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

menuSelections.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    menuToggle.classList.remove("active");
    showcase.classList.remove("active");

    if (aboutMeText.classList.value.includes("active")) {
      aboutMeText.classList.remove("active");
    }
    aboutMeText.classList.toggle("active");
  });
});

// Loading screen

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("works");
//   body.classList.toggle("loaded");
// });

video.addEventListener("loadeddata", (e) => {
  console.log("works");
  body.classList.toggle("loaded");
});
