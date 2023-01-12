const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 500,
  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
