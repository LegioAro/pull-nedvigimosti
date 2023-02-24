//Sliders
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

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
      });
    }
  }
}
isModalClose();

//Scroll

function isAnimationScroll() {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.remove('scroll-hidden');
        change.target.classList.remove('scroll-hidden-right');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.scroll-hidden');
  for (let elm of elements) {
    observer.observe(elm);
  }
}

isAnimationScroll();

//Form
const form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let formInputs = form.querySelectorAll('input');
  let result = true;

  formInputs.forEach((input) => {
    if (input.classList.contains('novalid')) {
      result = false;
    }
  });

  if (result) {
    form.submit();
  }
});
