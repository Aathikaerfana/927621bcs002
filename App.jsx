import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);

    const handleProductCreated = (product) => {
        setProducts([...products, product]);
    };

    return (
        <div>
            <h1>Top Products</h1>
            <ProductForm onProductCreated={handleProductCreated} />
            <ProductList products={products} />
        </div>
    );
};

export default App;
