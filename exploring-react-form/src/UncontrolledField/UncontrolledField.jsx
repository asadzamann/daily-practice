import React from 'react';
import { useRef } from 'react';

const UncontrolledField = () => {
    const emailref = useRef('');

    const submithandler = (e) => {
        e.preventDefault();
        console.log(emailref)
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <input ref={emailref} type="email" name="email" id="" />
                <input type="password" name="" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;