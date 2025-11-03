import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] =useState('');
   const [error , setError] = useState('');
   const [name, setName] = useState('');
   const handleNameChange = (e) => {
    setName(e.target.value)
   }
    const handleSubmitted = (e) => {
        e.preventDefault();
        console.log('working', name);
         setPassword(e.target.password.value);
         if(password.length < 6){
        setError("character's length must be 6 or longer");
    }
    else{
        setError('character okay')}
    }
 
    return (
        <div>
            <form onSubmit={handleSubmitted}>
                 <input type="text" onChange={handleNameChange} defaultValue={name}/>
                 <br />
                 <input type="password" name="password"  defaultValue={password} id="" />
                 <br />
                 <input type="submit" value="Submit" />
            </form>
        <h3>{error}</h3>
        </div>
    );
};

export default ControlledField;