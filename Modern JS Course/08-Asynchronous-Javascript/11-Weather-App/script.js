console.log('hello')

const inputLocation = document.getElementById('inputLocation')
const button = document.querySelector('button')

const city = document.querySelector('#city')
const time = document.querySelector('#time')
const condition = document.querySelector('#condition')
const currentTemperature = document.querySelector('#currentTemperature')
const feelsLike = document.querySelector('#feelsLike')
const wind = document.querySelector('#wind')
const chanceOfRain = document.querySelector('#chanceOfRain')
const humidity = document.querySelector('#humidity')
const uv = document.querySelector('#uv')
const weatherIcon = document.querySelector('#weatherIcon')

const apiKey = 'bcc60dbb9f9848f3b02142620232610'

async function fetchData(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        return data
    }
    catch (error) {
        console.log('An error occured', error)
    }
}


async function getWeatherData() {
    const userLocation = inputLocation.value

    const fetchWeatherData = await fetchData(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation}`)
    const forecastData = await fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userLocation}`)

    const getWeatherIconURL = fetchWeatherData.current.condition.icon

    // Upadate UI with weather data
    weatherIcon.setAttribute('src', getWeatherIconURL)

    city.textContent = fetchWeatherData.location.name
    time.textContent = fetchWeatherData.location.localtime
    condition.textContent = fetchWeatherData.current.condition.text;
    currentTemperature.textContent = fetchWeatherData.current.temp_c
    feelsLike.textContent = `Feels like ${fetchWeatherData.current.feelslike_c} °C`;

    wind.textContent = `${fetchWeatherData.current.wind_dir} ${fetchWeatherData.current.wind_kph}km/h`;
    chanceOfRain.textContent = `${forecastData.forecast.forecastday[0].day.daily_chance_of_rain}%`
    humidity.textContent = `${fetchWeatherData.current.humidity}%`;
    uv.textContent = fetchWeatherData.current.uv;

    console.log(fetchWeatherData)
    console.log(forecastData)
    console.log()
}

button.addEventListener('click', getWeatherData)
