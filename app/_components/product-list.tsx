'use client';

import React, { useEffect, useState } from 'react';
import ProductItem from './product-item';

interface Product {
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
}

interface ProductListProps {
    category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/victorlrpf/coffee-api/main/db.json');
                if (!response.ok) {
                    throw new Error(`Erro ao acessar a URL: ${response.statusText}`);
                }
                const data = await response.json();
                setProducts(data[category] || []); // Garantir que products será um array
                setLoading(false);
            } catch (error) {
                console.error('Erro:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!Array.isArray(products)) {
        return <div>Erro ao carregar produtos.</div>;
    }

    return (
        <div className='flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden'>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
