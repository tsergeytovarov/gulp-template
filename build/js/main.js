'use strict';

// Удаляем прогрессивную верстку
const mainHeader = document.querySelector('.main-header');

if (mainHeader) {

  const mainHeaderButton = mainHeader.querySelector('.main-header__button');
  const menuCompact = document.querySelector('.menu-compact');
  const menuCompactClose = menuCompact.querySelector('.menu-compact__close');

  const onClickMainHeaderButton = function () {
    menuCompact.classList.remove('menu-compact--closed');
    menuCompactClose.addEventListener('click', onClickMenuCompactClose);

    mainHeaderButton.removeEventListener('click', onClickMainHeaderButton);
    mainHeaderButton.classList.add('main-header__button--clicked');
  };

  const onClickMenuCompactClose = function () {
    menuCompact.classList.add('menu-compact--closed');
    menuCompactClose.removeEventListener('click', onClickMenuCompactClose);

    mainHeaderButton.addEventListener('click', onClickMainHeaderButton);
    mainHeaderButton.classList.remove('main-header__button--clicked');
  };


  const initSite = () => {

    if (mainHeaderButton.classList.contains('main-header__button--no-js')) {
      mainHeaderButton.classList.remove('main-header__button--no-js');
      menuCompactClose.classList.remove('menu-compact__close--no-js');
      menuCompact.classList.add('menu-compact--closed');
    }

    mainHeaderButton.addEventListener('click', onClickMainHeaderButton);
  };

  window.addEventListener(`load`, initSite);

  window.main = {
    initSite
  };
}
