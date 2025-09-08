// import data from "./data.json"

const apiKey = "69ae3709af8af7197172e4285857a796";
const weatherElements = {
  weather: document.getElementById("weather") as HTMLInputElement,
  cityDisplay: document.getElementById("cityName") as HTMLInputElement,
  humidity: document.getElementById("humidity") as HTMLInputElement,
  pressure: document.getElementById("pressure") as HTMLInputElement,
  description: document.getElementById("description") as HTMLInputElement,
  cityInput: document.getElementById("city") as HTMLInputElement,
  icon: document.getElementById("icon") as HTMLInputElement,
  button: document.getElementById("getWeather") as HTMLInputElement,
  showDate: document.getElementById("showDateAndTime") as HTMLInputElement,
  rise: document.getElementById("rise") as HTMLInputElement,
  set: document.getElementById("set") as HTMLInputElement,
  windSpeed: document.getElementById("wind") as HTMLInputElement,
  high: document.getElementById("high") as HTMLInputElement,
  low: document.getElementById("low") as HTMLInputElement,
  errorMsg: document.getElementById("error-message") as HTMLInputElement
};
const userCity = weatherElements.cityInput?.value;
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
    } as const;
    return date.toLocaleTimeString('en-US', options);
}

const getWeather = (cityName) => {
  // If this is an automatic load (cityName provided), skip the empty check
  if (!cityName && userCity === "") {
    weatherElements.errorMsg.textContent = "Please enter a city name";
    weatherElements.errorMsg.classList.add('show');
    setTimeout(() => {
      weatherElements.errorMsg.classList.remove('show');
      weatherElements.errorMsg.textContent = "";
    }, 10000);
    return;
  }
  
  // Remove any existing error message
  weatherElements.errorMsg.classList.remove('show');
  weatherElements.errorMsg.textContent = "";
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
      weatherElements.weather.innerHTML = Math.round(data.main.temp - 273.15) + "°";
      weatherElements.cityDisplay.innerHTML = `${data.name}, ${data.sys.country} `;
      weatherElements.humidity.innerHTML =
        `<img src="./svg/temperature-list-svgrepo-com.svg" width="10" height="10"> ${convert(data.main.feels_like)}`
      
        weatherElements.pressure.innerHTML =`<img src="./svg/humidity-svgrepo-com.svg" alt="Wind" width="10" height="10"> ${data.main.humidity}%`
        weatherElements.description.innerHTML = data.weather[0].main;

        weatherElements.windSpeed.innerHTML = `<img src="./svg/wind-svgrepo-com.svg" alt="Wind" width="10" height="10"> ${data.wind.speed} km/h`
      
        weatherElements.rise.innerHTML = `<img src="./svg/sunrise-svgrepo-com.svg" width="15" height="15"> Rise: ${convertUnixTime(data.sys.sunrise)} | `;
      
        weatherElements.set.innerHTML = `<img src="./svg/sunset-svgrepo-com.svg" width="15" height="15"> Set: ${convertUnixTime(data.sys.sunset)}`;
      

        weatherElements.high.innerHTML =  ` | <img src="./svg/sunrise-svgrepo-com.svg" width="15" height="15"> High ${convert(data.main.temp_min)}`
        weatherElements.low.innerHTML = `| <img src="./svg/sunset-svgrepo-com.svg" width="15" height="15"> Low ${convert(data.main.temp_min)}`
        weatherElements.cityInput.value = "";
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherElements.icon.src = iconUrl;
        weatherElements.icon.alt = data.weather[0].description;
        weatherElements.icon.style.width = '64px';
        weatherElements.icon.style.height = '64px';
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error fetching weather data: " + error.message);
    });
};


// Add event listener for the buttons
const updateTemperature = (temp ,unit) => {
  weatherElements.weather.innerHTML = `${temp}${unit}`;
  isCelsius = unit === "°C";
  weatherElements.cityInput.value = "";
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
weatherElements.button.addEventListener("click", () => getWeather(weatherElements.cityInput.value.trim()));


const displayDate = () => {
  const date = new Date()
  // setInterval(date);
  const options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  } as const;
  const formattedDate = date.toLocaleDateString('en-GB', options);
   const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  } as const;
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  weatherElements.showDate.innerHTML = `${formattedDate} | LocalTime ${formattedTime}`;
}

window.onload = () => {
  setInterval(displayDate,1000)
  getWeather("Berlin");

}

enum cities {
  ABIDJAN = 'ABIDJAN',
  Sydney =  "Sydney",
  Tokyo =  "Tokyo",
  Toronto =  "Toronto",
  Paris =  "Paris"
}

// const cities = {
//   Abidjan: "Abidjan",
//   Sydney: "Sydney",
//   Tokyo: "Tokyo",
//   Toronto: "Toronto",
//   Paris: "Paris"
// };

Object.entries(cities).forEach(([id, city]) => {
  const buttonId = document.getElementById(id);
  buttonId?.addEventListener("click" , () => getWeather(city))
})