function showDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentYear = date.getFullYear();
  let currentMonth = months[date.getMonth()];
  let currentDay = days[date.getDay()];
  let currentDate = date.getDate();

  return `${currentDay}, ${currentDate} ${currentMonth} ${currentYear} ${hours}:${minutes}`;
}

let dateSpot = document.querySelector("#current-date");
let currentTime = new Date();
dateSpot.innerHTML = showDate(currentTime);

/// Typed-in city


function cityName(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(cityInput);
  document.getElementById("h1id").innerHTML = `${cityInput.value}`;

  searchCity(cityInput.value);
}

let changeCity = document.querySelector("#search-form");
changeCity = addEventListener("submit", cityName);

function searchCity(city) {
  let apiKey = "09a78485014abc9ba4bba90aeb20d6e1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemp);
}

function showTemp(response) {
let temperature = Math.round(response.data.main.temp);
let temperatureElement = document.querySelector("#current-temp");
temperatureElement.innerHTML = `${temperature}°C`;
let temperatureDescription = document.querySelector("#weather-text");
temperatureDescription.innerHTML = response.data.weather[0].description;

}



