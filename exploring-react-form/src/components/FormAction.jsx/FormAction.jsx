import React from 'react';

const FormAction = () => {
    const handleAction = (formData) => {
       console.log(formData.get('name'));
       console.log(formData.get('password'));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name='name' />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="button" />
            </form>
        </div>
    );
};

export default FormAction;