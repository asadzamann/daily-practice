import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContexts/AuthContext';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log('check context', authInfo)
    return (
        <div>
            
        </div>
    );
};

export default Home;