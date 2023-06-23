let input = document.getElementById("inputBox");
let searchButton = document.getElementById("search-btn");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let cityShow = document.querySelector(".city-dis");

async function checkWeather(city) {
  const apiKey = "03cee761860d3eaf35e0f76b2cfb9f3e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
   
    temperature.innerHTML = `${Math.round(weatherData.main.temp-273.15)}°C`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    wind.innerHTML = `${weatherData.wind.speed}Km/hr`;
    cityShow.innerHTML = `${weatherData.name}`;

  } catch (error) {
    console.error('Error:', error);
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(input.value);
});
