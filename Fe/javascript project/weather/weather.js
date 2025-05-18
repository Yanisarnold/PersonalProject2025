// import data from "./data.json"

const apiKey = "69ae3709af8af7197172e4285857a796";
// const ßßapiKey = data.cofig.apiKey
const elements = {
  weather: document.getElementById("weather"),
  cityDisplay: document.getElementById("cityName"),
  humidity: document.getElementById("humidity"),
  pressure: document.getElementById("pressure"),
  description: document.getElementById("description"),
  cityInput: document.getElementById("city"),
  icon: document.getElementById("icon"),
  button: document.getElementById("getWeather"),
  showDate: document.getElementById("showDateAndTime"),
  rise: document.getElementById("rise"),
  set: document.getElementById("set"),
  windSpeed: document.getElementById("wind"),
  high: document.getElementById("high"),
  low: document.getElementById("low"),
  errorMsg: document.getElementById("error-message")
};
const userCity = elements.cityInput.value;
let currentTemp = null
let isCelsius = true;


const convert = (temp) => {
  return Math.round(temp - 273.15) + "°"
}

const convertUnixTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    return date.toLocaleTimeString('en-US', options);
}

const getWeather = (cityName) => {
  // If this is an automatic load (cityName provided), skip the empty check
  if (!cityName && userCity === "") {
    elements.errorMsg.textContent = "Please enter a city name";
    elements.errorMsg.classList.add('show');
    setTimeout(() => {
      elements.errorMsg.classList.remove('show');
      elements.errorMsg.textContent = "";
    }, 10000);
    return;
  }
  
  // Remove any existing error message
  elements.errorMsg.classList.remove('show');
  elements.errorMsg.textContent = "";
  // Use the provided cityName if available, otherwise use the input value
  const city = cityName || userCity;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then(response => {
      // if statement to check if the response is ok
      if (!response.ok) {
        // throw error if response is not ok
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // return response.json();
      return response.json();
    })
    .then(data => {

      if (!data.main || !data.weather) {
      throw new Error('Invalid weather data received');
      } 
      updateTemperature(currentTemp, "°C")
      // Accessing html element and adding the data to it
      elements.weather.innerHTML = Math.round(data.main.temp - 273.15) + "°";
      elements.cityDisplay.innerHTML = `${data.name}, ${data.sys.country} `;
      elements.humidity.innerHTML =
        `<img src="/Fe/javascript project/weather/svg/temperature-list-svgrepo-com.svg" width="10" height="10"> ${convert(data.main.feels_like)}`
      
      elements.pressure.innerHTML =`<img src="/Fe/javascript project/weather/svg/humidity-svgrepo-com.svg" alt="Wind" width="10" height="10"> ${data.main.humidity}%`
      elements.description.innerHTML = data.weather[0].main;

      elements.windSpeed.innerHTML = `<img src="/Fe/javascript project/weather/svg/wind-svgrepo-com.svg" alt="Wind" width="10" height="10"> ${data.wind.speed} km/h`
      
       elements.rise.innerHTML = `<img src="/Fe/javascript project/weather/svg/
       sunrise-svgrepo-com.svg" width="15" height="15"> Rise: ${convertUnixTime(data.sys.sunrise)} | `;
      
      elements.set.innerHTML = `<img src="/Fe/javascript project/weather/svg/sunset-svgrepo-com.svg" width="15" height="15"> Set: ${convertUnixTime(data.sys.sunset)}`;
      

      elements.high.innerHTML =  ` | <img src="/Fe/javascript project/weather/svg/sunrise-svgrepo-com.svg" width="15" height="15"> High ${convert(data.main.temp_min)}`
      elements.low.innerHTML = `| <img src="/Fe/javascript project/weather/svg/sunset-svgrepo-com.svg" width="15" height="15"> Low ${convert(data.main.temp_min)}`
      elements.cityInput.value = "";
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        elements.icon.src = iconUrl;
         elements.icon.alt = data.weather[0].description;
         elements.icon.style.width = '64px';
         elements.icon.style.height = '64px';
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error fetching weather data: " + error.message);
    });
};

// Add event listener for the buttons
const updateTemperature = (temp ,unit) => {
  weather.innerHTML = `${temp}${unit}`;
  isCelsius = unit === "°C";
   elements.cityInput.value = "";
}

const convertTemp = () => {
  if (currentTemp === null) return;
  if (isCelsius) {
    const fahrenheit = (currentTemp * 9/5) + 32;
    updateTemperature(Math.round(fahrenheit), "°F");
  } 
  else {
    const celsius = (currentTemp - 32) * 5/9;
    updateTemperature(Math.round(celsius), "°C");
  }
}

// Add event listener for the button
elements.button.addEventListener("click", () => getWeather(elements.cityInput.value.trim()));


const displayDate = () => {
  const date = new Date()
  // setInterval(date);
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }
  const formattedDate = date.toLocaleDateString('en-GB', options);
   const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  elements.showDate.innerHTML = `${formattedDate} | LocalTime ${formattedTime}`;
}

window.onload = () => {
  getWeather("Berlin");
  setInterval(displayDate,1000)
}



const cities = {
  Abidjan: "Abidjan",
  Sydney: "Sydney",
  Tokyo: "Tokyo",
  Toronto: "Toronto",
  Paris: "Paris"
};

Object.entries(cities).forEach(([id, city]) => {
  const buttonId = document.getElementById(id);
  buttonId.addEventListener("click" , () => getWeather(city))
})