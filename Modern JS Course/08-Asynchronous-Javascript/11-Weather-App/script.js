console.log('Hello World! Welcome to our Weather App')

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

    const fetchWeatherData = await fetchData(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation}&aqi=yes`)

    const forecastData = await fetchData(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userLocation}&days=3&aqi=yes`)

    const getWeatherIconURL = fetchWeatherData.current.condition.icon

    // Upadate UI with weather data
    weatherIcon.setAttribute('src', getWeatherIconURL)

    city.textContent = fetchWeatherData.location.name
    time.textContent = fetchWeatherData.location.localtime
    condition.textContent = fetchWeatherData.current.condition.text;
    currentTemperature.textContent = `${fetchWeatherData.current.temp_c}°C`
    feelsLike.textContent = `Feels like ${fetchWeatherData.current.feelslike_c} °C`;

    wind.textContent = `${fetchWeatherData.current.wind_dir} ${fetchWeatherData.current.wind_kph}km/h`;
    chanceOfRain.textContent = `${forecastData.forecast.forecastday[0].day.daily_chance_of_rain}%`
    humidity.textContent = `${fetchWeatherData.current.humidity}%`;
    uv.textContent = fetchWeatherData.current.uv;

    // Update Background
    const video = document.querySelector('video')
    const weatherCode = fetchWeatherData.current.condition.code
    const checkDay = fetchWeatherData.current.is_day

    if (weatherCode === 1000 && checkDay === 1) {
        video.setAttribute('src', 'assets/videos/sunny.mp4')
    } else if (weatherCode === 1000 || weatherCode === 1003 || weatherCode === 1006 && checkDay === 0) {
        video.setAttribute('src', 'assets/videos/night.mp4')
    } else if (weatherCode === 1003 || weatherCode === 1006 && checkDay === 1) {
        video.setAttribute('src', 'assets/videos/cloud.mp4')
    } else if (weatherCode === 1009 || weatherCode === 1063) {
        video.setAttribute('src', 'assets/videos/overcast.mp4')

    } else if (weatherCode === 1150 || weatherCode === 1153 || weatherCode === 1180 || weatherCode === 1183 || weatherCode === 1186 || weatherCode === 1189 || weatherCode === 1192 || weatherCode === 1195 || weatherCode === 1198 || weatherCode === 1201 || weatherCode === 1240 || weatherCode === 1243 || weatherCode === 1246) {
        video.setAttribute('src', 'assets/videos/rain.mp4')
    } else if (weatherCode === 1087 || weatherCode === 1273 || weatherCode === 1276 || weatherCode === 1279 || weatherCode === 1282) {
        video.setAttribute('src', 'assets/videos/thunderstorm.mp4')
    } else if (weatherCode === 1030 || weatherCode === 1066 || weatherCode === 1069 || weatherCode === 1135 || weatherCode === 1147) {
        video.setAttribute('src', 'assets/videos/fog.mp4')
    } else if (weatherCode === 1072 || weatherCode === 1114 || weatherCode === 1117 || weatherCode === 1168 || weatherCode === 1171 || weatherCode === 1204 || weatherCode === 1207 || weatherCode === 1210 || weatherCode === 1213 || weatherCode === 1216 || weatherCode === 1219 || weatherCode === 1222 || weatherCode === 1225 || weatherCode === 1237 || weatherCode === 1249 || weatherCode === 1252 || weatherCode === 1255 || weatherCode === 1258 || weatherCode === 1261 || weatherCode === 1264) {
        video.setAttribute('src', 'assets/videos/snow.mp4')
    } else {
        video.setAttribute('src', 'assets/videos/sunny.mp4')
    }


    // Weather Forecast
    const timeStamp = new Date(fetchWeatherData.location.localtime)
    const currentHour = timeStamp.getHours()

    // When a new location is entered, the forecast content is refreshed, and the new forecast data is added without accumulating old data.
    const forecastContainer = document.querySelector('.forecast')
    forecastContainer.innerHTML = ''

    for (let i = 0; i < 6; i++) {
        const getForecast = forecastData.forecast.forecastday[0].hour[currentHour + i]

        function populateHTML() {
            const forecastByHour = document.createElement('div')
            forecastByHour.classList = 'forecastByHour'

            const forecastIcon = document.createElement('img')
            forecastIcon.setAttribute('src', getForecast.condition.icon)

            const timeTag = document.createElement('p')
            timeTag.classList = 'subtitle'
            const timeTextNode = document.createTextNode(`${currentHour + i}:00`)
            timeTag.append(timeTextNode)

            const tempTag = document.createElement('p')
            const tempTextNode = document.createTextNode(`${getForecast.temp_c} °C`)
            tempTag.append(tempTextNode)

            forecastByHour.append(forecastIcon)
            forecastByHour.append(timeTag)
            forecastByHour.append(tempTag)
            forecastContainer.append(forecastByHour)
        }
        populateHTML()
    }

    console.log(fetchWeatherData)
    console.log(forecastData)
}

button.addEventListener('click', getWeatherData)
