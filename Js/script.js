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

let swiper = new Swiper(".bnrSwiper", {
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

let newSwiper = new Swiper(".glrySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

let testiSwiper = new Swiper(".testiSwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".testi-next-btn",
    prevEl: ".testi-prev-btn",
  },
});
