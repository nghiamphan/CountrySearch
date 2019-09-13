import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import FilterCountry from './components/FilterCountry'
import Countries from './components/Countries'

function App() {
  const [ filterCountry, setFilterCountry ] = useState('')
  const [ countries, setCountries ] = useState([]) 

  const hook = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleFilterCountryChange = (event) => {
    setFilterCountry(event.target.value)
  }

  return (
    <div>
      <FilterCountry
        filterCountry={filterCountry}
        handleFilterCountryChange={handleFilterCountryChange}
      />

      <Countries 
        countries={countries}
        filterCountry={filterCountry}
      />
    </div>
  );
}

export default App;
