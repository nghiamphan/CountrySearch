import React from 'react'

const FilterCountry = ({ filterCountry, handleFilterCountryChange }) => (
  <div>
    find countries
      <input
        value={filterCountry}
        onChange={handleFilterCountryChange}
      />
  </div>
)

export default FilterCountry