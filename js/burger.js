let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('header__nav-active');
  document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger-active');
    menu.classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  })
})
