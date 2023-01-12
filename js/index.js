let tabsBtn = document.querySelectorAll('.howwework__link');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('howwework__link--active')
    });
    e.currentTarget.classList.add('howwework__link--active');

    tabsItem.forEach(function (elem) {
      elem.classList.remove('tabs__item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active')
  });
});

let headerSearchlink = document.querySelector('.header__searchlink');
console.log(headerSearchlink);
let formSearch = document.querySelector('.form-search');
let formSearchBtn = document.querySelector('.form-search__btnclosed');

headerSearchlink.addEventListener('click', function (item) {
  console.log('click');
  formSearch.classList.add('form-search--active');
});

formSearchBtn.addEventListener('click', function (i) {
  formSearch.classList.remove('form-search--active');
})
