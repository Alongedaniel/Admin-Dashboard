const sideMenu = document.querySelector(".aside");
const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sideBar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
