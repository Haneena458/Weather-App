import axios from "axios";
import React, { useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apikey = "55bdefe41aae9331520fbfca4c808914";

  const handleSearch = (e) => {
    setCity(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) {
      setError("City name cannot be empty.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`;
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError("City not Found.Please try again.");
      setWeather(null);
    }
  };

  return (
    <div>
      <header>
        <h1 className="font-bold text-4xl mb-5 p-16 text-center">
          Weather App
        </h1>
        <form
          className="w-full flex gap-5 items-end mb-7"
          onSubmit={handleSubmit}
        >
          <input
            className="p-2 ps-3 text-black rounded-md flex-grow focus:outline-none focus:ring focus:ring-blue-200 "
            type="text"
            value={city}
            onChange={handleSearch}
            placeholder="Search a city"
          />
          <Button name="Search" type="submit" />
        </form>
      </header>

      {weather && (
        <div>
          <h2 className="text-2xl font-semibold ">
            Weather in {weather.name} , {weather.sys.country}
          </h2>

          <div className="flex">
            {weather.weather[0].icon ? (
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                style={{ width: "200px", height: "200px" }}
              />
            ) : (
              <p>Weather icon not available</p>
            )}
            <p className="flex items-center">
              {weather.weather[0].description}
            </p>
          </div>
          <div div className="flex gap-5">
            <Card name="Temparature" value={weather.main.temp} add="°F" />
            <Card name="Humidity" value={weather.main.humidity} add="%" />
            <Card name="Wind Speed" value={weather.wind.speed} add="mph" />
          </div>
        </div>
      )}
      {error && <p>Error : {error} </p>}
    </div>
  );
}

export default Home;
