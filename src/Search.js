import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);
  let [current, setCurrent] = useState(""); 

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d0f75ef944c3443ad82f1c3cdedd03ad";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
    setCurrent(`The weather information for ${city} `); 
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
        className="col-12 form-control mb-4"
      />
      <button type="Submit" className="btn btn-primary col-3 mb-3" >Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
            <li>{current}</li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Summary: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}






