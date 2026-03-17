const menuBtn = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".offcanvas");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("activeshow");
  navMenu.classList.toggle("show-menu");
  document.body.classList.toggle("no-scroll");
});

// let open = true;

// menuBtn.addEventListener("click", () => {
//   if (open == true) {
//     menuBtn.classList.remove("activeshow");
//     navMenu.style.right = "-100%";
//     document.body.classList.remove("no-scroll");
//     open = false;
//   } else {
//     menuBtn.classList.add("activeshow");
//     navMenu.style.right = "0";
//     document.body.classList.add("no-scroll");
//     open = true;
//   }
// });

// $("documenu").ready(() => {
//   $(".navbar-toggler").click(() => {
//     $(".navbar-toggler").toggleClass("activeshow");
//   });
// });
// const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", () => {
  document.body.style.overflow = "hidden";
});

offcanvas.addEventListener("hidden.bs.offcanvas", () => {
  document.body.style.overflow = "auto";
});