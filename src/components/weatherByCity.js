import { useState, useEffect } from "react";

const WeatherByCity = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("London");
  const [fetchedCity, setFetchedCity] = useState([]);
  const [cityLatitude, setCityLatitude] = useState(null);
  const [cityLongitude, setCityLongitude] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({});

  const FETCH_CITY = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const CITY = await response.json();
      
      if (CITY.results && CITY.results.length > 0) {
        setFetchedCity(CITY.results);
        setCityLatitude(parseFloat(CITY.results[0].latitude).toFixed(4));
        setCityLongitude(parseFloat(CITY.results[0].longitude).toFixed(4));
      } else {
        console.error("No city found");
      }
    } catch (err) {
      console.error("Can't fetch city data...", err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (cityLatitude !== null && cityLongitude !== null) {
      FETCH_WEATHER(cityLatitude, cityLongitude);
    }
  }, [cityLatitude, cityLongitude]);

  const FETCH_WEATHER = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const WEATHER = await response.json();
      setCurrentWeather(WEATHER.current_weather);
    } catch (err) {
      console.error("Can't fetch weather data...", err);
    }
  };

  const SEARCH = () => {
    if (city.trim() !== "") {
      FETCH_CITY(city);
    }
  };

  return (
    <>
      <h1>Weather by City</h1>

      <label>
        Search:
        <input
          placeholder="Type city here"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button onClick={SEARCH}>Search</button>

      {loading ? <p>Loading...</p> : null}

      {currentWeather.temperature ? (
        <div>
          <p>Temperature: {currentWeather.temperature}°C</p>
          <p>Wind Speed: {currentWeather.windspeed} km/h</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </>
  );
};

export default WeatherByCity;
