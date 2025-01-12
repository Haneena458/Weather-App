import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import { WeatherContext } from "../Context/WeatherContext";

const weatherBackground = {
  Clear:
    "url(https://images.pexels.com/photos/6921389/pexels-photo-6921389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  Clouds:
    "url(https://images.pexels.com/photos/29289841/pexels-photo-29289841/free-photo-of-sun-rays-breaking-through-clouds-over-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",

  Rain: "url(https://images.pexels.com/photos/5909500/pexels-photo-5909500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  Snow: "url(https://images.pexels.com/photos/1552212/pexels-photo-1552212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  Thunderstrom:
    "url(https://www.desunhospital.com/wp-content/uploads/2014/06/thunderstrom.jpg)",
  Drizzle:
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PTL0h9JPyGjk02chTlcS9iPaaJWAZoVrLg&s)",
  Mist: "url(https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  Default:
    "url(https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
};

function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const { weather, setWeather } = useContext(WeatherContext);

  console.log(weather);

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
      setWeather(response?.data);
      setError(null);
    } catch (error) {
      setError("City not Found.Please try again.");
      setWeather(null);
    }
  };

  let description =
    "url(https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";

  if (weather && weather?.weather && weather?.weather.length > 0) {
    description = weather?.weather[0].main;
  }

  const backgroundStyle =
    weatherBackground[description] || weatherBackground["Default"];

  return (
    <>
      <div
        style={{
          backgroundImage: backgroundStyle,
          backgroundSize: "cover",
          width: "100%",
        }}
        className="h-full min-h-screen"
      >
        <header className="p-6 md:p-10 pb-5">
          <form className="flex flex-col sm:flex-row justify-end gap-5 items-center" onSubmit={handleSubmit}>
            <input
              className="p-2 sm:w-auto text-slate-800 ps-3 rounded-md  focus:outline-none focus:ring focus:ring-blue-200 "
              type="text"
              value={city}
              onChange={handleSearch}
              placeholder="Search a city"
            />
            <Button name="Search" type="submit" />
          </form>
        </header>

        {weather && Object.keys(weather).length > 0 && (
          <div className=" p-4">
            <div id="weather" className=" p-2 md:p-5 rounded-md shadow-md">
              <h2 className="text-2xl md:text-4xl font-semibold text-center ">
                {weather?.name} , {weather?.sys?.country}
              </h2>
              <div className="flex justify-center items-center p-5">
                <p className="text-5xl md:text-9xl text-black">{weather?.main?.temp}</p>
                <p className="text-xl md:text-4xl text-black -mt-5"> &nbsp;&nbsp;&nbsp;°C </p>
              </div>

              <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center text-center w-52 h-48  rounded-lg shadow-md justify-center">
                  {weather?.weather[0]?.icon && (
                    <img
                      src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                      alt={weather?.weather[0]?.description}
                      className="w-20 h-20 md:w-32 md:h-32 bg-neutral-300 rounded-2xl"
                    />
                  )}
                  <p className="capitalize text-xl md:text-2xl font-medium mt-2 ps-5">
                    {weather?.weather[0]?.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-center p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5" >
                <Card name="Humidity" value={weather?.main?.humidity} add="%" />
                <Card name="Wind Speed" value={weather?.wind?.speed} add="mph" />
                <Card name="Pressure" value={weather.main.pressure} add="p" />
                <Card name="Sea Level" value={weather.main.sea_level}  />
                <Card name="Ground Level" value={weather.main.grnd_level}  />
              </div>
              </div>

            </div>
          </div>
        )}
        {error && <p className="text-red-600 text-center font-medium mt-5">Error : {error} </p>}
      </div>
    </>
  );
}

export default Home;
