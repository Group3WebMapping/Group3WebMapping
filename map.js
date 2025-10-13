var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);

function PointDistance () {
  var PointA = turf.point([-97.941, 29.885]);
  var PointB = turf.point([-97.939, 29.867]);
  var options = { units: "miles" };
  var distance = turf.distance(PointA, PointB, options);

  L.marker([29.885,-97.941]) 
  .addTo(map).bindPopup("Distance: " + distance + " miles");
  L.marker([29.867,-97.939])
  .addTo(map).bindPopup("Distance: " + distance + " miles");

  L.polyline([[29.885,-97.941],[29.867, -97.939]])
  .addTo(map)
  .bindPopup("Distance: " + distance + " miles");
}

PointDistance();
