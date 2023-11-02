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


/*


*/