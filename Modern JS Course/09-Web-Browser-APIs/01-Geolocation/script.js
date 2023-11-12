console.log(navigator)

// The fact that navigator.geolocation shows as an empty object ({}) while still indicating "Geolocation API is supported" in your code is likely due to the behavior of how JavaScript objects are treated in modern browsers.

//  the console output might not show the internal properties and methods of the navigator.geolocation object due to how it's implemented or due to security or privacy considerations.

console.log(navigator.geolocation)

if ('geolocation' in navigator) {
    console.log('Geolocation API is supported.');
} else {
    console.log('Geolocation API is not supported.');
}


//  getCurrentPosition() tries to answer as fast as possible with a low accuracy result. 
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)

    console.log(`Latitude: ${position.coords.latitude}`)
    console.log(`Longitude: ${position.coords.longitude}`)
    console.log(`Accuracy: ${position.coords.accuracy}`)
    // A lower accuracy value indicates a more precise
})


// watchPosition() is used to continuously watch and update the device's geolocation. This is useful for tracking the device's position in real-time.

function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    console.log(latitude)
    console.log(longitude)
}

function error(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {
    enableHighAccuracy: true, // Use GPS if available
    maximumAge: 0, // Do not use a cached position
    timeout: 3000,  // Time to wait to stop trying for location
}


navigator.geolocation.watchPosition(success, error, options)

let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});