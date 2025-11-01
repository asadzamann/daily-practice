import React from 'react';

const SimpleForm = () => {
     const handleSubmit = (e) =>{
          
            e.preventDefault();
            console.log(e.target.naam.value)
        }
    return (
        <div>
            
            <form onSubmit={handleSubmit}> 
            <input type="text" name="naam" id="" />
            <br />
            <input type="submit" value="Submit" />
            
            </form>
        </div>
    );
};

export default SimpleForm;