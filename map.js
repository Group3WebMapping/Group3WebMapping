var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    var polygonCoords = [
        [30.2800, -97.7500],  // Top-left corner
        [30.2800, -97.7000],  // Top-right corner
        [30.2400, -97.7000],  // Bottom-right corner
        [30.2400, -97.7500]   // Bottom-left corner
    ];

    // Create the polygon and add it to the map
    var polygon = L.polygon(polygonCoords, { color: 'blue' }).addTo(map);

    // Bind a basic popup to the polygon before the click event
    polygon.bindPopup('Click to calculate area.');

    // Add an event listener for the click event
    polygon.on('click', function () {
        // Convert the Leaflet polygon to GeoJSON
        var geojson = polygon.toGeoJSON();

        // Calculate the area using Turf.js (in square meters)
        var area = turf.area(geojson);

        // Update the popup content with the calculated area
        polygon.setPopupContent('Area: ' + area.toFixed(2) + ' square meters');

        // Open the popup after setting the content
        polygon.openPopup();
    });
