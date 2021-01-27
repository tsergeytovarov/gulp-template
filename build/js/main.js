"use strict";

// Удаляем прогрессивную верстку
const mainHeader = document.querySelector(".main-header");
const mainHeaderButton = mainHeader.querySelector(".main-header__button");
const menuCompact = document.querySelector(".menu-compact");
const menuCompactClose = menuCompact.querySelector(".menu-compact__close");

const detailCards = document.querySelectorAll(".detail__card");
const tarifsItems = document.querySelectorAll(".tarifs__item");

const modalOrder = document.querySelector(".modal-order");
const modalOk = document.querySelector(".modal-ok");

const onClickMainHeaderButton = function () {
  menuCompact.classList.remove("menu-compact--closed");
  menuCompactClose.addEventListener("click", onClickMenuCompactClose);

  mainHeaderButton.removeEventListener("click", onClickMainHeaderButton);
  mainHeaderButton.classList.add("main-header__button--clicked");
};

const onClickMenuCompactClose = function () {
  menuCompact.classList.add("menu-compact--closed");
  menuCompactClose.removeEventListener("click", onClickMenuCompactClose);

  mainHeaderButton.addEventListener("click", onClickMainHeaderButton);
  mainHeaderButton.classList.remove("main-header__button--clicked");
};

const onClickButtonToSell = function (evt) {

  const modalClose = modalOrder.querySelector(".modal__close");
  const telephone = modalOrder.querySelector(".modal-order__telephone");
  const email = modalOrder.querySelector(".modal-order__email");
  const submit = modalOrder.querySelector(".modal-order__submit");

  const onClickModalClose = function (evt) {
    onModalClose();
  }

  const onEscapeModalCard = (evt) => {
    if (evt.key === `Escape`) {
      onModalClose();
    }
  };

  const onModalClose = function () {
    modalOrder.classList.remove("modal-show");
    modalClose.removeEventListener('click', onClickModalClose);
    document.removeEventListener(`keydown`, onEscapeModalCard);
  }

  evt.preventDefault();

  modalOrder.classList.add("modal-show");
  telephone.focus();

  modalClose.addEventListener('click', onClickModalClose);
  document.addEventListener(`keydown`, onEscapeModalCard);
}

const initSite = () => {

  if (mainHeaderButton.classList.contains("main-header__button--no-js")) {
    mainHeaderButton.classList.remove("main-header__button--no-js");
    menuCompactClose.classList.remove("menu-compact__close--no-js");
    menuCompact.classList.add("menu-compact--closed");

    for (let i=0; i< detailCards.length; i++) {
      detailCards[i].classList.remove("detail__card--for-pixel-perfect");
      detailCards[i].classList.remove("detail__card--no-js");
      let buttonBuy = detailCards[i].querySelector(".detail__to-sell");
      buttonBuy.addEventListener("click", onClickButtonToSell);
    }

    for (let i=0; i< tarifsItems.length; i++) {
      tarifsItems[i].addEventListener("click", onClickButtonToSell);
      let buttonBuy = tarifsItems[i].querySelector(".tarifs__button");
      if (buttonBuy) {
        buttonBuy.addEventListener("click", onClickButtonToSell);
      }
    }
  }

  mainHeaderButton.addEventListener("click", onClickMainHeaderButton);
};

window.addEventListener(`load`, initSite);

window.main = {
  initSite
};
