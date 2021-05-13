import "./style.scss";
import "regenerator-runtime/runtime";

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const form = document.getElementById("form");
const lowHigh = document.getElementById("low-high");
const weather = document.getElementById("weather");
const icon = document.getElementById("icon");
const zipInput = document.getElementById("zip-input");

const fetchWeather = async function (location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=08053f3ac16b00cea446de59d7d2a352&units=imperial`,
      { mode: "cors" }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      city.textContent = data.name;
      temp.textContent = `${Math.round(data.main.temp)}\xB0`;
      lowHigh.textContent = `Low: ${Math.round(
        data.main.temp_min
      )}\xB0 High: ${Math.round(data.main.temp_max)}\xB0`;
      weather.textContent = data.weather[0].description
      zipInput.classList.remove("invalid");
      const iconId = data.weather[0].icon;
      icon.src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    } else {
      throw new Error("invalid zip");
    }
  } catch (err) {
    zipInput.classList.add("invalid");
    zipInput.value = zipInput.value + "*";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchWeather(zipInput.value);
});

fetchWeather("04103");
