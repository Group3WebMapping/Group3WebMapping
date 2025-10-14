var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    var center = [-97.9400, 29.8830]; // San Marcos, TX

  // Define the radius in kilometers (or another unit if needed)
  var radius = 5; // 5 kilometers radius

  // Options for the circle, you can customize these
  var options = {
      steps: 64,      // More steps for a smoother circle (default is 64)
      units: "kilometers", // Units for the radius
      properties: { foo: "bar" } // You can add custom properties if needed
  };

  // Generate the circle using Turf.js
  var circle = turf.circle(center, radius, options);

  // You can log the GeoJSON to the console to check the result
  console.log(circle);

  // Optionally, add the circle to a Leaflet map
  L.geoJSON(circle).addTo(map);
