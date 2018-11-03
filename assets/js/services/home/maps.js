// $(document).ready(function () {
//     loadMap();

// });

function loadMap() {

    var position = {
        lat: -34.397,
        lng: 150.644
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 8
    });

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Click to zoom'
      });

}