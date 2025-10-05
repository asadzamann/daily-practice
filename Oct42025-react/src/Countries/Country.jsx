import React from 'react';

const Country = ({country}) => {
   console.log(country)
   console.log(country.population)


    return (
        <div className='card'>
           <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <h1>Country: {country.name.common}</h1>
           <h2>Capital: {country.capital.capital[0]}</h2>
           <h2>Population: {country.population.population}</h2>
           <h2>Region: {country.region.region}</h2>
        </div>
    );
};

export default Country;