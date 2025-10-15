var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
//Ishraqs Code
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
//Michaels Code
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
//Campbells Code
    var point = turf.point([-97.9384, 29.8884]);
    var buffered = turf.buffer(point, 500, { units: "miles" });
    L.geoJSON(buffered, {
    style: {
        color: "green",
        weight: 3,
        fillColor: "lightgreen",
        fillOpacity: 0.3
    }
    }).addTo(map);
