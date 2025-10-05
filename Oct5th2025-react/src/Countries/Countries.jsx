import React from 'react';
import { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            {countries.map(country => <Country country={country}></Country>)}
        </div>
    );
};

export default Countries;