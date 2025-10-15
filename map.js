var map = L.map('map').setView([29.8884, -97.9384], 14);
mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
      var polygon = turf.polygon([
        [[-97.999144, 29.753413],
        [-97.710054, 30.023649],
        [-97.716932, 30.029089],
        [-97.859382, 30.132646],
        [-98.172415, 30.355621],
        [-98.298284, 30.038085],
        [-98.030800, 29.847320],
        [-97.999144, 29.753413]]
      ])
      L.geoJSON(polygon,{
    style: {
        color: "blue",
        weight: 3,
        fillColor: "light blue",
        fillOpacity: 0.35,
        }
      }).addTo(map);
