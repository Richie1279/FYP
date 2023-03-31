var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.4194, 37.7749], // default location
  zoom: 12
});

var form = document.getElementById('directions');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start + ';' + end + '?steps=true&access_token=' + mapboxgl.accessToken;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var route = data.routes[0].geometry.coordinates;
            var geojson = {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: route
                }
            };
            if (map.getSource('route')) {
                map.getSource('route').setData(geojson);
            } else {
                map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: geojson
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#3887be',
                        'line-width': 5,
                        'line-opacity': 0.75
                    }
                });
            }
            var distance = (data.routes[0].distance / 1000).toFixed(1);
            var duration = (data.routes[0].duration / 60).toFixed(1);
            document.getElementById('distance').innerHTML = distance + ' km';
            document.getElementById('duration').innerHTML = duration + ' minutes';
        });
});

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var route = data.routes[0].geometry.coordinates;
        var geojson = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'LineString',
                coordinates: route
            }
        };
        if (map.getSource('route')) {
            map.getSource('route').setData(geojson);
        } else {
            map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
        var distance = (data.routes[0].distance / 1000).toFixed(1);
        var duration = (data.routes[0].duration / 60).toFixed(1);
        document.getElementById('distance').innerHTML = distance + ' km';
        document.getElementById('duration').innerHTML = duration + ' minutes';
        document.getElementById('route-details').style.display = 'block';
    });


