var callMe = document.querySelector(".call-me");
var callMePopap = document.querySelector(".call-me__popap");


callMe.addEventListener("click", function () {
  evt.preventDefault();
  callMePopap.classList.add("call-me__popap--show");
  console.log('callMe')
  
});