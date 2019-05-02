function tamuMap() {

    var tamu = {lat: 52.5729, lng: -0.245681};

    var map = new google.maps.Map(document.getElementById("googleMap"), {zoom: 15, center: tamu});

    var marker = new google.maps.Marker({position: tamu, map: map});
}


function kaspasMap() {

    var kaspas = {lat: 52.571886, lng: -0.242036};

    var map = new google.maps.Map(document.getElementById("googleMap"), {zoom: 17, center: kaspas});

    var marker = new google.maps.Marker({position: kaspas, map: map});
}


function creamsMap() {

    var creams = {lat: 52.575893, lng: -0.244290};

    var map = new google.maps.Map(document.getElementById("googleMap"), {zoom: 17, center: creams});

    var marker = new google.maps.Marker({position: creams, map: map});
}


function icestoneMap() {

    var icestone = {lat: 53.800019, lng: -1.544679};

    var map = new google.maps.Map(document.getElementById("googleMap"), {zoom: 15, center: icestone});

    var marker = new google.maps.Marker({position: icestone, map: map});
}


function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    var x = document.getElementById("showLoc");
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}