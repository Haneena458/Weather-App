import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import { WeatherContext } from "../Context/WeatherContext";

const weatherBackground = {
  Clear:
    "url(data:image/jpeg;base64,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)",
   Clouds:
   "url(https://images.pexels.com/photos/9149274/pexels-photo-9149274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",

  Rain: "url(https://img.freepik.com/free-photo/closeup-shot-wet-glass-reflecting-rainy-forest-scenery_181624-23365.jpg?ga=GA1.1.2033067883.1729492703&semt=ais_hybrid)",
  Snow: "url(https://ewscripps.brightspotcdn.com/dims4/default/f786d06/2147483647/strip/true/crop/4928x2772+0+246/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2Fd5%2Fb5%2Fdb6214244b50bf5add1cc4c95b21%2Fwinter-scene-road-and-forest-with-frost-on-trees-sbi-300739866.jpg)",
  Thunderstrom:
    "url(https://www.desunhospital.com/wp-content/uploads/2014/06/thunderstrom.jpg)",
  Drizzle:
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PTL0h9JPyGjk02chTlcS9iPaaJWAZoVrLg&s)",
  Mist: "url(data:image/jpeg;base64,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)",
  Default:
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85cIXclyqJGRbF8dcDG5xZj9BGsxYAHQj9w&s)",
};

function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const { weather,setWeather } = useContext(WeatherContext);


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


  let description ="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85cIXclyqJGRbF8dcDG5xZj9BGsxYAHQj9w&s)"

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
          height: "100vh", 
          width: "100%", 
        }}
      >
        <header className="pb-20">
          <h1 className="font-bold text-4xl mb-5 p-5  text-center">Weather App</h1>
          <form
            className="w-full h-10 flex flex-col   md:flex-row gap-5"
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

        {weather && Object.keys(weather).length > 0 && (
          <div>
            <div id="weather" className=" p-2 md:p-10 rounded-md shadow-md">
              <h2 className="text-3xl font-bold ">
                Weather in {weather?.name} , {weather?.sys?.country}
              </h2>

              <div>
                <div
                  id="icon"
                  className="flex flex-col md:flex-row text-center w-52 h-48 rounded-lg shadow-md items-center justify-center md:m-10"
                >
                  {weather?.weather[0]?.icon && (
                    <img
                      src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                      alt={weather?.weather[0]?.description}
                      className="w-32 h-32"
                    />
                  )}
                  <p className="capitalize text-lg mt-2">
                    {weather?.weather[0]?.description}
                  </p>
                </div>
              </div>

              <div div className="flex flex-col md:flex-row gap-5 justify-end">
                <Card name="Temparature" value={weather?.main?.temp} add="°F" />
                <Card name="Humidity" value={weather?.main?.humidity} add="%" />
                <Card
                  name="Wind Speed"
                  value={weather?.wind?.speed}
                  add="mph"
                />
              </div>
            </div>
          </div>
        )}
        {error && <p>Error : {error} </p>}
      </div>
      {/* ) : (
        <div>No weather data available</div>
       )} */}
    </>
  );
}

export default Home;
