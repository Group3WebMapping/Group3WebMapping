var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    // Create a polygon using Turf.js (this will be a simple polygon around some coordinates)
    var polygon = turf.polygon([
        [
            [125, -15],  // Coordinates (long, lat)
            [113, -22],
            [154, -27],
            [144, -15],
            [125, -15]  // Closing the polygon by repeating the first coordinate
        ]
    ]);

    // Log the GeoJSON to the console to ensure it's being created correctly
    console.log('GeoJSON Polygon:', polygon);

    // Convert the Turf.js polygon to GeoJSON
    var geojson = polygon;

    // Add the GeoJSON polygon to the map using Leaflet
    L.geoJSON(geojson, {
        style: { color: 'blue' },  // Set polygon color
        onEachFeature: function (feature, layer) {
            // When the polygon is clicked, calculate the area and show it in a popup
            layer.on('click', function () {
                // Calculate the area using Turf.js (returns area in square meters)
                var area = turf.area(feature);

                // Show the area in the popup
                layer.bindPopup('Area: ' + area.toFixed(2) + ' square meters').openPopup();
            });
        }
    }).addTo(map);
