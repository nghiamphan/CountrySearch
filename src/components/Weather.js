import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = "8ac094c3b6a60c8c66b1e5a780465c83"

const Weather = ({ city }) => {
  const [ weather, setWeather ] = useState({})

  const hook = () => {
    axios
      .get("http://api.weatherstack.com/current"
        + "?access_key=" + API_KEY
        + "&query=" + city)
      .then(response => {
        setWeather(response.data)
      })
  }

  useEffect(hook, [])

  console.log(weather)

  if (Object.keys(weather).length > 0) {
    return (
      <div>
        <h3>Weather in {city}</h3>
        <p><b>temperature:</b> {weather.current.temperature} Celcisus</p>
        <img src={weather.current.weather_icons} />
        <p><b>wind:</b> {weather.current.wind_speed} direction {weather.current.wind_dir}</p>
      </div>
    )
  }
  return <div></div>
}

export default Weather