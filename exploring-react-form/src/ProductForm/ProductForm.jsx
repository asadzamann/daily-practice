import React from 'react';
import { useState } from 'react';

const ProductForm = ({handleProducts}) => {
     const [error , setError] = useState('')
    const productHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;
       
        const newProduct = {
            name, quantity, price
        }
        if(name.length === 0){
            setError('Enter Name');
            return;
        }
        else if (!quantity){
            setError('Enter Quantity');
            return;
        }
        else if (!price) {
            setError('Enter Price')
            return;
        }

        handleProducts(newProduct);
    }
    return (
        <div>
            <form onSubmit={productHandler}>
                <input type="text" name="name" id="" placeholder='Product Name' />
                <br />
                <input type="number" name="quantity" id="" placeholder='Product Quantity' />
                <br />
                <input type="number" name="price" id="" placeholder='Number' />
                <br />
                <input type="submit" value="Submit" />

            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;