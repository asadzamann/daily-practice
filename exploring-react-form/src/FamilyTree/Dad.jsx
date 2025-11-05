import React, { use, useContext } from 'react';
import Mom from './Mom';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';
import { MoneyContext } from './FamilyTree';

const Dad = ({gift}) => {
    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <button onClick={() => {
                    setMoney(money + 5000)
                }}>Add Money 5000Taka </button>
                <Myself gift={gift}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>

        </div>
    );
};

export default Dad;