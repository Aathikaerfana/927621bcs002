import React, { useState } from 'react';
import { createProduct } from '../api';

const ProductForm = ({ onProductCreated }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = { name, description, price: parseFloat(price), rating: parseFloat(rating) };
        try {
            const response = await createProduct(product);
            onProductCreated(response.data);
            setName('');
            setDescription('');
            setPrice('');
            setRating('');
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
