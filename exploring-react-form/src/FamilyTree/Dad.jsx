import React from 'react';
import Mom from './Mom';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({gift}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself gift={gift}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>

        </div>
    );
};

export default Dad;