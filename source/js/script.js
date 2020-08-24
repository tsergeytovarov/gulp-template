var callMe = document.querySelector(".call-me");
var callMePopap = document.querySelector(".call-me__popap");
var callMeClose = document.querySelector(".modal-call__close");
var callMeName = document.querySelector(".modal-call__name");
var callMeForm = document.querySelector(".modal-call__form");
var callMePhone = document.querySelector(".modal-call--phone");


callMe.addEventListener("click", function (evt) {
  evt.preventDefault();
  callMePopap.classList.add("call-me__popap--show");
  callMeName.focus();
});

callMeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  callMePopap.classList.remove("call-me__popap--show");
});

callMeForm.addEventListener("submit", function (evt) {
  if (!callMeName.value || !callMePhone.value) {
  evt.preventDefault();
  } 
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (callMePopap.classList.contains("call-me__popap--show")) {
      evt.preventDefault();
      callMePopap.classList.remove("call-me__popap--show");
    }
  }
});