import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const apiKey = "YOUR_API_KEY";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;