let hamburger = document.querySelector(".menuIcon");
let menu = document.querySelector("nav > ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".navItem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  })
);
