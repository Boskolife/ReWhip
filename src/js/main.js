findHref();
burgerInit();

function burgerInit() {
  const burger = document.querySelector('.header_burger');
  const menu = document.querySelector('.nav_wrap');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
    document.body.classList.toggle('body_lock');
  });
}

function findHref() {
  const menu = document.getElementById('menu');
  const secondMenu = document.getElementById('secondMenu');

  if (menu) {
    const links = menu.querySelectorAll('a');
    const url = window.location.href;

    links.forEach((link) => {
      if (link.href && url === link.href) {
        link.classList.add('menu_link_active');
      } else {
        link.classList.remove('menu_link_active');
      }
    });
  }

  if (secondMenu) {
    const links = secondMenu.querySelectorAll('a');
    const url = window.location.href;

    links.forEach((link) => {
      if (link.href && url === link.href) {
        link.classList.add('menu_link_active');
      } else {
        link.classList.remove('menu_link_active');
      }
    });
  }
}
const sliderReviews = document.querySelector('.slider-reviews');

if (sliderReviews) {
  const swiper = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 5,

    breakpoints: {
      300: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 5,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
