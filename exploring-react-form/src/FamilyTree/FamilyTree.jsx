import React from 'react';
import Grandpa from './Grandpa';
import '../FamilyTree/FamilyTree.css'
import { createContext } from 'react';

export const AssetContext = createContext('');


const FamilyTree = () => {
    const newAsset = 'Sweets'
    return (
        <div className='family'>
            <AssetContext.Provider value={newAsset}>
                <Grandpa></Grandpa>
            </AssetContext.Provider>

        </div>
    );
};

export default FamilyTree;