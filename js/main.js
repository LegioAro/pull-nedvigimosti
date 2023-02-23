const mySwiper = new Swiper('.slider-1', {
  // Настройки Swiper
  spaceBetween: 21, // Устанавливаем отступ между слайдами
  slidesPerView: 5,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 3000, // Устанавливаем задержку автоматической прокрутки в 2 секунды
  },
  initialSlide: 2, // Устанавливаем активным слайдом по умолчанию третий слайд
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 21,
    },
  },
});

const mySwiper2 = new Swiper('.slider-2', {
  // Настройки Swiper
  spaceBetween: 8,
  slidesPerView: 3,

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    550: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    650: {
      slidesPerView: 2.3,
      spaceBetween: 8,
    },

    850: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
  },
});
