const mymap = L.map('mapid').setView([39.7392, -104.9903], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibGltaXR0b2luZmluaXR5IiwiYSI6ImNrYmJzamt3dDA0YnQzMG1vbWh3NGIzaTEifQ.r2cKsjXwwnn6UiRRb_LHUA'
}).addTo(mymap);

const marker = L.marker([39.7392, -104.9903]).addTo(mymap);

const circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

const polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// const popup = L.popup()
//   .setLatLng([51.5, -0.09])
//   .setContent("I am a standalone popup.")
//   .openOn(mymap);

const clickedMarker = L.marker();

function onMapClick(e) {
  clickedMarker
    .setLatLng(e.latlng)
    // .setContent("You clicked the map at " + e.latlng.toString())
    .addTo(mymap);
}

mymap.on('click', onMapClick);

// function onMarkerClick(event) {
//   alert("You clicked the marker at " + event.latlng);
//   console.log(event);
// }

// marker.on('click', onMarkerClick);