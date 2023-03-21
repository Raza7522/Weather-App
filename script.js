const inputCityEl = document.querySelector("#input-city");
const searchButtonEl = document.querySelector("#search-button");

const cityNameEl = document.querySelector("#city-name");
const weatherTypeEl = document.querySelector("#weather-type");
const weatherImageEl = document.querySelector("#weather-image");
const timeEl = document.querySelector("#time");
const tempEl = document.querySelector("#temp");
const windSpeedEl = document.querySelector("#wind-speed");

let cityDefault = "Delhi, India";

// const API_KEY = 18a81ae24c484a0897a124014232003;

const getWeatherData = async (cityName) => {

    try{
        const URL = `https://api.weatherapi.com/v1/current.json?key=18a81ae24c484a0897a124014232003&q=${cityName}`;

    const response = await fetch(URL);
    const data = await response.json();

    showWeatherData(data);

    }
    catch{
        alert("Invalid City Name!");
    }

}

// ! Calling function for default city output

getWeatherData(cityDefault);


const showWeatherData = (data) => {

    const locationName = data.location.name;
    const timenow = data.location.localtime;
    const weatherType = data.current.condition.text;
    const temp = data.current.temp_c;
    const weatherIconUrl = data.current.condition.icon;
    const windSpeed = data.current.wind_kph;

    timeOnly = timenow.split(" ")[1];
    console.log(timeOnly)

    cityNameEl.innerText = `-- ${locationName} --`;
    timeEl.innerText = timeOnly;
    weatherTypeEl.innerText = weatherType;
    tempEl.innerText = temp;
    windSpeedEl.innerText = windSpeed;

    weatherImageEl.setAttribute("src", weatherIconUrl);

}


searchButtonEl.addEventListener("click", () => {
    getWeatherData(inputCityEl.value);
})
