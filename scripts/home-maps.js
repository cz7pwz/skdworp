---
# http://stackoverflow.com/questions/4531052/how-can-i-disable-scrolling-on-the-google-maps-mobile-layout
---
function initialize() {
  var LatLngKK = new google.maps.LatLng(50.746403, 4.257978);
  var LatLngNI = new google.maps.LatLng(50.740465, 4.242809);
  var mapOptionsKK = {
    zoom: 15,
    center: LatLngKK,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel:false,
    //disable scrolling on touch-devices
    draggable: !("ontouchend" in document),
  };
  var mapOptionsNI = {
    zoom: 15,
    center: LatLngNI,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel:false,
    draggable: !("ontouchend" in document),
  };
  var mapKK = new google.maps.Map(document.getElementById("start65"),mapOptionsKK);
  var mapNI = new google.maps.Map(document.getElementById("campus"),mapOptionsNI);
  var markerKK = new google.maps.Marker({
    position: LatLngKK,
    map: mapKK,
    title: 'turncentrum start65'
  });
  var markerNI = new google.maps.Marker({
    position: LatLngNI,
    map: mapNI,
    title: 'campus halle'
  });
}
campus
