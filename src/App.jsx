// App.js
import React, { useState } from 'react';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      {city && <Weather city={city} />}
    </div>
  );
}

export default App;
