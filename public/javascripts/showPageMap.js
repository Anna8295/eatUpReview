mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', 
    center: restaurant.geometry.coordinates,
    zoom: 10 
});

new mapboxgl.Marker()
    .setLngLat(restaurant.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${restaurant.title}</h3><p>${restaurant.location}</p>`
            )
    )
    .addTo(map)