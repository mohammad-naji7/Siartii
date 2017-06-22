function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'),  {
        zoom: 9,
        minZoom:9,
        scrollwheel:false,
        center: {lat: 31.941, lng: 35.181},
        zoomControlOptions:{
            position:google.maps.ControlPosition.LEFT_BOTTOM
        },
        panControlOptions:{
            position:google.maps.ControlPosition.LEFT_BOTTOM
        }
    });
    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };

    document.getElementById('goRoute').addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

var navEle = document.getElementById('nav-bar');
var myTop = 0;

function toggleNavBar(){
    if(myTop === 0){
        if(screen.width>=768)
            navEle.style.top = '-75px';
        else
            navEle.style.top = '-270px';
        myTop = -75;
    }
    else{
        navEle.style.top = '0';
        myTop = 0;
    }
}