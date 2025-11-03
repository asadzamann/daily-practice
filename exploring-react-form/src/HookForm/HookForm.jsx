import React from 'react';
import useInputField from '../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const formHandler = (e) => {
        e.preventDefault();
        console.log('checking hook' , name)
    }
    return (
        <div>
            <form onSubmit={formHandler}>
<input type="text" defaultValue={name} onChange={nameOnChange} name="name" id="" />
<br />
<input type="email" name="email" id="" />
<br />
<input type="password" name="password" id="" />
<br />
<input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default HookForm;