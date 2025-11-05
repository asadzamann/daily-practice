import React from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';
import { useState } from 'react';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const handleProducts = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts)
    }
    return (
        <div>
           <ProductTable products={products}></ProductTable>
           <ProductForm handleProducts={handleProducts}></ProductForm>
        </div>
    );
};

export default ProductManagement;