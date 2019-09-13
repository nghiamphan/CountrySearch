import React from 'react'
import Weather from './Weather'

const Languages = ({ languages }) => (
  languages.map(language =>
    <li key={language.name}>{language.name}</li>
  )
)

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name}</h2>

    <div>capital {country.capital}</div>
    <div>population {country.population}</div>

    <h3>languages</h3>

    <ul>
      <Languages languages={country.languages} />
    </ul>

    <img src={country.flag} height="150"/>

    <Weather city={country.capital} />
    
  </div>
)

export default CountryDetails