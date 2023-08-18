const searchBtn = document.getElementById("searchBtn");
const cityInputs = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

const apiKey = "395a0768e0fa3f2721c3c3ecf4982c33";

searchBtn.addEventListener("click", () => {
  const city = cityInputs.value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();

  if (data.cod === "404") {
    weatherInfo.innerHTML = "City not found.";
  } else {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Weather: ${description}`;
  }
}
