import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(countries) {
  let countryList = Object.values(countries);
  console.log(countryList);
  return (
    <div>
      <h1>CountriesList will display here</h1>

      {countryList[0].map((country, index) => (
        <li key={index}>
          <Link to={country.cca3}> {country.name.common}</Link>
        </li>
      ))}
    </div>
  );
}

export default CountriesList;
