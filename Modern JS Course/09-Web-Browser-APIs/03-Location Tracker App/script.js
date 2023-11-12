const findMe = document.querySelector('#find-me')
const latitude = document.querySelector('.latitude')
const longitude = document.querySelector('.longitude')
const showOnMap = document.querySelector('#showOnMap')
showOnMap.style.display = 'none'

const errorStatus = document.querySelector('.status')

findMe.addEventListener('click', trackLocation)

function trackLocation() {
    navigator.geolocation.watchPosition(success, errorMessage)

    function success(position) {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        latitude.textContent = `Latitude: ${lat}°`
        longitude.textContent = `Longitude: ${lng}°`

        showOnMap.style.display = 'block'

        showOnMap.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

        // To create a Leaflet Map
        const map = L.map('map').setView([lat, lng], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([lat, lng]).addTo(map);

        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    }

    function errorMessage(err) {
        console.log(err)
        errorStatus.textContent = `Error: ${err.code}- ${err.message}`
    }
}




