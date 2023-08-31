import React, { useState } from 'react';
import CityInputForm from './CityInputForm';
import WeatherDisplay from './WeatherDisplay';
import { fetchWeatherData } from './fetchWeatherdata';

import Notfound from '../assets/NotFound.png'
import Loading from '../assets/loading.png'
import { styled } from 'styled-components';


function Main() {
  const [weatherData, setWeatherData] = useState(null);
  const [found, setfound] = useState(true)
  const [loading, setloading] = useState(false)
  const handleCitySubmit = async (city) => {
   
    if (city) {
      try {
        setloading(true)
        const data = await fetchWeatherData(city);
        const formattedWeatherData = {
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          weatherCondition: data.weather[0].description,
        };
        setWeatherData(formattedWeatherData);
        setfound(true)
        setloading(false)
      } catch (error) {
        console.error('Error fetching weather data:', error);
        if (error.message === 'Request failed with status code 404' || error.message === 'Request failed with status code 400') {
          setfound(false)
          return;
        }

      }

    }

  };


  return (
    <div>
       <H> <span>W</span>eather app</H>
      <CityInputForm onCitySubmit={handleCitySubmit} />
      {loading ? <div style={{ margin: "100px auto", width: '50%', fontFamily: 'sans-serif' }}>
        <img style={{ display: 'inline-block', width: '200px', height: '200px' }} src={Loading} alt="" />
      </div> : weatherData && found ? <> <WeatherDisplay weatherData={weatherData} />
      </> : !found ? <div style={{ margin: "60px auto", width: '50%', fontFamily: 'sans-serif' }}>
        <img style={{ display: 'inline-block', width: '200px', height: '200px' }} src={Notfound} alt="" />
        <h1>Not Found !!</h1>
      </div> : null}


    </div>
  );
}

export default Main;
const H=styled.h1`
  
  font-family: cursive;
  margin: 50px 0 30px 0;

  span {
  color: #008080;
  
}
`