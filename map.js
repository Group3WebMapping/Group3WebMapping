var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    function DestinationPoint() {
  var start = turf.point([-97.9384, 29.8884]);
  var distance = 1;
  var bearing = 45;
  var options = { units: "miles" };
  var destination = turf.destination(start, distance, bearing, options);
  var destCoords = destination.geometry.coordinates;
  L.marker([29.8884, -97.9384])
    .addTo(map)
    .bindPopup("Start Point (San Marcos)");

  L.marker([destCoords[1], destCoords[0]])
    .addTo(map)
    .bindPopup("Destination<br>Distance: " + distance + " mile(s)<br>Bearing: " + bearing + "°");

  L.polyline([
    [29.8884, -97.9384],
    [destCoords[1], destCoords[0]]
  ])
  .addTo(map)
  .bindPopup("Route: " + distance + " mile(s)");
}
DestinationPoint();
