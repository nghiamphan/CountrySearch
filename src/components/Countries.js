import React from 'react'
import CountryListItem from './CountryListItem'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, filterCountry }) => {

  const countriesToShow = countries.filter(country => 
    country.name.toLowerCase().includes(filterCountry.toLowerCase())
  )

  if (countriesToShow.length === 0) {
    return <div>No matches, specify another filter</div>
  }

  if (countriesToShow.length === 1) {
    console.log(countriesToShow[0])
    return <CountryDetails country={countriesToShow[0]} />
  }
  
  if (countriesToShow.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  return countriesToShow.map(country =>
    <CountryListItem
      key={country.name}
      country={country}
    />
  )
}

export default Countries