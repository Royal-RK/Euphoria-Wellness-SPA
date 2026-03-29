const menuBtn = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".offcanvas");

let isOpen = true;

menuBtn.addEventListener("click", () => {
  if (isOpen == true) {
    menuBtn.classList.remove("activeshow");
    navMenu.style.right = "-100%";
    document.body.classList.remove("no-scroll");
    isOpen = false;
  } else {
    menuBtn.classList.add("activeshow");
    navMenu.style.right = "0";
    document.body.classList.add("no-scroll");
    isOpen = true;
  }
});

let swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    el: ".swiper-pagination",
    clickable: true,
  },
});
