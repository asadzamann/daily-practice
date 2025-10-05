import React, { useState } from 'react';
import { use } from 'react';
import Country from './Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h2>Total Visited Countries: {visitedCountries.length}</h2>
            <ol>
                {visitedCountries.map(
                    country => <li key={country.cca3.cca3}>{country.name.common}</li>
                )}
            </ol>
            <div className="countries">
                {countries.map(country => <Country key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)}
            </div>

        </div>
    );
};

export default Countries;