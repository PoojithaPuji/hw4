// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // YOUR_API_KEY = 'e62ad96403b341fde7f9efa0887b0ded';
        // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e62ad96403b341fde7f9efa0887b0ded&units=metric`
        );

        setTemperature(response.data.main.temp);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : temperature ? (
        <p>Current Temperature in {city}: {temperature.toFixed(2)}°C</p>
      ) : (
        <p>Failed to fetch weather data for {city}</p>
      )}
    </div>
  );
};

export default Weather;
