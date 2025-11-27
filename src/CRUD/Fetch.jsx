import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [weather, setWeather] = useState(null); // store data
  const [loading, setLoading] = useState(true); // for loading state
  const [error, setError] = useState(null); // for errors

  useEffect(() => {
    const apiKey = "YOUR_API_KEY_HERE"; // 🔑 Replace with your OpenWeatherMap API key
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch weather");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // runs once when component loads

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h2>Weather in {weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>🌡 Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Fetch;
