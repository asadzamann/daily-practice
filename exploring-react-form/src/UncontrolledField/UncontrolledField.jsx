import React from 'react';
import { useRef } from 'react';

const UncontrolledField = () => {
    const emailref = useRef('');

    const submithandler = (e) => {
        e.preventDefault();
        console.log(emailref.current.value)
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <input ref={emailref} type="email" name="email" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
                <br />
            </form>
        </div>
    );
};

export default UncontrolledField;