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
