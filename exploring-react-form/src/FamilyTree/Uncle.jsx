import React from 'react';
import Cousin from './Cousin';
import Mithi from './Mithi';
import Itu from './Itu';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin></Cousin>
                <Mithi></Mithi>
                <Itu></Itu>
            </section>

        </div>
    );
};

export default Uncle;