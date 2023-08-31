import React from 'react';
import styled from 'styled-components';

import scatteredclouds from '../assets/Clouds.png';
import snow from '../assets/Snow.png';
import rain from '../assets/Rain.png';
import brokenclouds from '../assets/Drizzle.png';
import haze from '../assets/Haze.png';
import mist from '../assets/Mist.png';
import smoke from '../assets/Smoke.png';
import clearsky from '../assets/Clear.png';
import temp from '../assets/temp.png';


const Container = styled.div`
  border: 1px solid #ccc;
  padding: 3%;
  margin-top: 20px;
  background-color: #f5f5f5;
  width: 30%;
  margin: 30px auto;
  font-family: cursive;
  border-radius: 50%;
  outline: none;
  box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #008080;
  animation: wowEffect 0.4s ease-in-out;
  background-color: #7bb1b1;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const WeatherImage = styled.img`
  width: 40%;
  height: 40%;
  display: inline-block;
  margin: auto;
`;

const TemperatureImage = styled.img`
  width: 10%;
  height: 10%;
  margin-right: 10px;
`;

function WeatherDisplay({ weatherData }) {
  let { temperature, humidity, windSpeed, weatherCondition } = weatherData;

  weatherCondition = weatherCondition.split(' ');
  weatherCondition = weatherCondition.join('');
  const weatherImages = {
    scatteredclouds,
    rain,
    snow,
    brokenclouds,
    haze,
    mist,
    smoke,
    clearsky,
  };

  if (weatherCondition == "showerrain") {
    weatherCondition = 'rain'
  } else if (weatherCondition == "brokenclouds") {
    weatherCondition = "haze"
  }

  const img = weatherImages[weatherCondition.toLowerCase()] ?? brokenclouds



  return (
    <Container>
      <WeatherInfo>
        <WeatherImage src={img} alt={weatherCondition} />
      </WeatherInfo>
      <h2>{weatherCondition}</h2>
      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TemperatureImage src={temp} alt="Temperature" />  {temperature} °C
      </p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
  
    </Container>
  );
}

export default WeatherDisplay;
