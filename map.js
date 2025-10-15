var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
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
