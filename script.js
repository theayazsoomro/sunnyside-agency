console.log("Program Runs Successfully");
let menu = document.querySelector(".menu-icon");
let links = document.querySelector(".links");
let disabled = document.querySelectorAll(".disabled");
menu.addEventListener("click", () => {
  links.classList.toggle("mobile-menu");
  disabled.forEach((e) => {
    e.classList.toggle("disabled");
  });
});
