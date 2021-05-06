const menuToggle = document.querySelector(".menu-btn");
const showcase = document.querySelector(".showcase");
const meneSelections = document.querySelectorAll(".menu-selections");

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
