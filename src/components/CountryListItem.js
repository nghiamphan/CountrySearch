import React, { useState } from 'react'
import CountryDetails from './CountryDetails'

const CountryListItem = ({ country }) => {
  const [ showDetails, setShowDetails ] = useState(false)
  
  const toggleShowDetails = () => setShowDetails(!showDetails)

  if (showDetails) {
    return (
      <div>
        <CountryDetails country={country} />
        
        <button onClick={toggleShowDetails}>
          hide {country.name} details
        </button>
        
        <br/>
        <br/>
      </div>
    )
  }
  return (
    <div>
      {country.name}
      <button onClick={toggleShowDetails}>
        show
      </button>
    </div>
  )
}

export default CountryListItem