ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93863106417265,30.3230545],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Мы находимся здесь',
            balloonContent: 'Nёrds'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [-54, -190]
        });

    myMap.geoObjects
        .add(myPlacemark);
});

var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".write-us-popup");
var close = popup.querySelector(".close-cross");
var name = popup.querySelector("[name=write-us-name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=write-us-mail]");
var overlay = document.querySelector(".popup-overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-popup-show");
  overlay.classList.add("popup-overlay-show");
  });

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-popup-show");
  overlay.classList.remove("popup-overlay-show");
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
