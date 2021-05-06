const menuToggle = document.querySelector(".menu-btn");
const showcase = document.querySelector(".showcase");
const menuSelections = document.querySelectorAll(".menu-selections");
const aboutMeText = document.querySelector(".text-about-me");

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
