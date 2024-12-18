const fetch = require('node-fetch');

const apiKey = "728cd3674f7f21f1ea1b5edbe3099fa9" ; // Replace with your OpenWeatherMap API key
const city = 'London'; // Replace with the city you want to get the weather for

const getWeather = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            console.log(`Weather in ${data.name}:`);
            console.log(`Temperature: ${data.main.temp}°C`);
            console.log(`Weather: ${data.weather[0].description}`);
        } else {
            console.log(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
};

getWeather(city);