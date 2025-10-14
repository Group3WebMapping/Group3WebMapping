var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    var polygonCoords = [
    [30.2800, -97.7500],
    [30.2800, -97.7000],
    [30.2400, -97.7000],
    [30.2400, -97.7500]
  var polygon = L.polygon(polygonCoords, { color: 'blue' }).addTo(map);
  polygon.bindPopup('Click to calculate area.');
  polygon.on('click', function () {
      var geojson = polygon.toGeoJSON();
      var area = turf.area(geojson);
      polygon.setPopupContent('Area: ' + area.toFixed(2) + ' square meters');
      polygon.openPopup();
  });
