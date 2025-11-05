import React, { useState } from 'react';
import Grandpa from './Grandpa';
import '../FamilyTree/FamilyTree.css'
import { createContext } from 'react';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);


const FamilyTree = () => {
    const newAsset = 'Sweets'
    const [money, setMoney] = useState(0);
    return (
        <div className='family'>
            <h2>Total Family Money: {money}</h2>
            <MoneyContext value={[money, setMoney]}>
         <AssetContext.Provider value={newAsset}>
                <Grandpa></Grandpa>
            </AssetContext.Provider>
            </MoneyContext>
           

        </div>
    );
};

export default FamilyTree;