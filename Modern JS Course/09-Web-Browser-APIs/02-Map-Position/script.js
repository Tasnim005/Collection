navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude
    const lng = position.coords.longitude

    // To create a Leaflet Map
    const map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map);
    

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
})