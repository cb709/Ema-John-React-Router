import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const {products, savedCart} = useLoaderData()
    return (
        <div>
            <h1>I am the order page : {products.length}</h1>
        </div>
    );
};

export default Orders;