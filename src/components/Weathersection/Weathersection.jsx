import React, { useEffect } from "react";
import Summary from "./Summary";
import Stats from "./Stats";
import Forms from "./Forms";
import { useState } from "react";
import { fetchWeather } from "../../api";

const TODAY = new Date();
const DAY = TODAY.toLocaleString('default', { weekday: 'long' });
const DATE =
  TODAY.toLocaleString('default', { month: 'long' }) + ' ' + TODAY.getDate();

export default function Weathersection() {
  const[currentLocation , setCurrentLocation]=useState('Panvel')
  const [isLoading , setIsLoading ]= useState(true)
  const [weatherData, setWeatherData]=useState(null)

  const fetchWeatherHandler =async()=>{
    setIsLoading(true)
    const data =await fetchWeather(currentLocation)
    setWeatherData(data.cod ===200 ? data : null)
    setIsLoading(false)
  }

  useEffect(()=> { 
    fetchWeatherHandler()
  }, [])
  console.log(weatherData)

  return (
    <div className="weather">
      {isLoading || !weatherData ? (
        <p className="weather__summary__section">
          {isLoading ? 'Loading...': 'Weather Data Not Available'}
        </p>
      ) : (
        <Summary
        date={DATE}
        day={DAY}
        icon={weatherData.weather[0].icon}
        location={weatherData.name}
        temperature={weatherData.main.temp}
        type={weatherData.weather[0].main}
      />
      )}
  
      <div className="weather__right__section">
        {!isLoading && weatherData && (
            <Stats  
            feelsLike={weatherData.main.feels_like}
            humidity={weatherData.main.humidity}
            speed={weatherData.wind.speed}
            />
        )}

     
        <Forms
           currentLocation={currentLocation}
           setCurrentLocation={setCurrentLocation}
           onSubmitHandler={fetchWeatherHandler}
          />

      </div>
    </div>
  );
}
