import React, { useState } from 'react';
import './Country.css'
const Country = ({ country , handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // // system 1
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // // system 2
        // setVisited(visited ? false : true)

        // system 3
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}` }>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Country: {country.name.common}</h1>
            <h2>Capital: {country.capital?.capital[0]}</h2>
            <h2>Population: {country.population?.population}</h2>
            <h2>Region: {country.region?.region}</h2>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;