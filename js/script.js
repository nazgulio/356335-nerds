var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".write-us-popup");
var close = popup.querySelector(".close-cross");
var name = popup.querySelector("[name=write-us-name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=write-us-mail]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-popup-show");
  name.focus();                                                            /* не работает почему-то */
  });

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-popup-show");
  popup.classList.remove("write-us-popup-error");
  });

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!name.value || !mail.value) {
      event.preventDefault();
      popup.classList.remove("write-us-popup-error");
      popup.offsetWidth = popup.offsetWidth;
      console.log("Нужно ввести имя и почту");
      popup.classList.add("write-us-popup-error");
    }
  });

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (popup.classList.contains("write-us-popup-show")) {
      popup.classList.remove("write-us-popup-show");
      popup.classList.remove("write-us-popup-error");
      }
  }
});
