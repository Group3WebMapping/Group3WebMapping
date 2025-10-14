var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    var center = [-75.343, 39.984];
    var radius = 5;
    var options = { steps: 10, units: "kilometers", properties: { foo: "bar" } };
    var circle = turf.circle(center, radius, options);
