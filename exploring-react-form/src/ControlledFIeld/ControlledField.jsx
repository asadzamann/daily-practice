import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] =useState('');
   const [error , setError] = useState('')
    const handleSubmitted = (e) => {
        e.preventDefault()
        console.log(e.target.password.value)
         setPassword(e.target.password.value);
         if(password.length < 6){
        setError("character's length must be 6 or longer");
    }
    else{
        setError('character okay')}
    }
    // const passwordOnChange = (e) => {
        
    //     setPassword(e.target.value);
    //      if(password.length < 6){
    //     setError("character's length must be 6 or longer");
    // }
    // else{
    //     setError('character okay')
    // }
    // }
    
    return (
        <div>
            <form onSubmit={handleSubmitted}>
                 <input type="text" name='name'/>
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