import React from 'react';

const ProductForm = () => {
    const productHandler = () => {

    }
    return (
        <div>
            <form onSubmit={productHandler}>
                <input type="text" name="name" id="" />
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;