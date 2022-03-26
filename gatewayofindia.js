function initMap() {
   var options = {
      zoom:15,
      center: { lat:18.922064, lng: 72.834641} //Coordinates of tajmahal

   }
var map = new google.maps.Map(document.getElementById('map'), options);
var marker = new google.maps.Marker({
   position:{lat: 18.922064, lng: 72.834641}, // tajmahal Coordinates
   map:map, //Map that is  added
   icon:'https://img.icons8.com/fluent/48/000000/marker-storm.png',
   // adding custom icons
   draggarble: false// If set to true you can drag the marker
});

var information = new google.maps.InfoWindow({
   content: '<h4>The marker is at Gateway of India</h4>'
});

marker.addListener('click', function() {
   information.open(map, marker);
});
const trafficLayer = new google.maps.TrafficLayer();

trafficLayer.setMap(map);

}
