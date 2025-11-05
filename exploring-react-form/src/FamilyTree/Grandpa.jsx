import React from 'react';
import Dad from './Dad';
import Mom from './Mom';
import Uncle from './Uncle';

const Grandpa = () => {
    const gift = 'Guiter'
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad gift={gift}></Dad>
                <Uncle></Uncle>
            </section>

        </div>
    );
};

export default Grandpa;