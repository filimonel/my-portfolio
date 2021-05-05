const menuToggle = document.querySelector(".menu-btn");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", (e) => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
