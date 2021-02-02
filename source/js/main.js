'use strict';

(function () {

  const mainHeader = document.querySelector('.main-header');
  const modalMenu = document.querySelector('.modal-menu');

  if (mainHeader) {

    const mainHeaderButton = mainHeader.querySelector('.main-header__button');
    const menuCompact = document.querySelector('.menu-compact');
    const modalMenuClose = modalMenu.querySelector('.modal-menu__close');
    const menuItems = modalMenu.querySelectorAll('.modal-menu__item');

    const onClickMainHeaderButton = function () {

      const onEscapeModalMenu = (evt) => {
        if (evt.key === 'Escape') {
          onMenuClose();
        }
      };

      const onClickMenuClose = function () {
        onMenuClose();
      };

      const onMenuClose = function () {
        modalMenu.classList.remove('modal-menu--show');
        document.body.classList.remove('modal');
        modalMenuClose.removeEventListener('click', onClickMenuClose);
        for (let i = 0; i < menuItems.length; i++) {
          menuItems[i].removeEventListener('click', onMenuClose);
        }

        mainHeaderButton.addEventListener('click', onClickMainHeaderButton);
      };

      mainHeaderButton.removeEventListener('click', onClickMainHeaderButton);

      modalMenu.classList.add('modal-menu--show');
      document.body.classList.add('modal');


      modalMenuClose.addEventListener('click', onClickMenuClose);
      document.addEventListener('keydown', onEscapeModalMenu);

      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', onMenuClose);
      }
    };

    const initSite = () => {

      if (mainHeaderButton.classList.contains('main-header__button--no-js')) {
        mainHeaderButton.classList.remove('main-header__button--no-js');
        menuCompact.classList.add('menu-compact--closed');
      }

      mainHeaderButton.addEventListener('click', onClickMainHeaderButton);
    };

    window.addEventListener('load', initSite);

    window.main = {
      initSite
    };
  }
})();
