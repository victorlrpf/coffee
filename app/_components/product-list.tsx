'use client';

import React, { useEffect, useState } from 'react';
import ProductItem from './product-item';


interface Product {
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/victorlrpf/coffee-api/main/db.json');
                if (!response.ok) {
                    throw new Error(`Erro ao acessar a URL: ${response.statusText}`);
                }
                const data = await response.json();
                setProducts(data.coffee);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden'>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
