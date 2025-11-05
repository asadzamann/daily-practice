    import React from 'react';
    import { useContext } from 'react';
import { AssetContext } from './FamilyTree';

    const Myself = ({gift}) => {
        const newAsset = useContext(AssetContext);
        console.log('new context' , newAsset)

        return (
            <div>
                <h3>Myself</h3>
                <p>Grandpa Gift: {gift}</p>
                <p>Grandpa New Gift: {newAsset}</p>


            </div>
        );
    };

    export default Myself;