'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductImage from './components/product-image'; // Ajuste o caminho conforme necessário

interface Product {
    id: number;
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
}

const ProductPage: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/victorlrpf/coffee-api/main/db.json');
                if (!response.ok) {
                    throw new Error(`Erro ao acessar a URL: ${response.statusText}`);
                }
                const data: Product[] = await response.json();
                const foundProduct = data.find(p => p.id === Number(id));
                setProduct(foundProduct || null);
                setLoading(false);
            } catch (error) {
                console.error('Erro:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div>
            <ProductImage product={product} />
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <p>R${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductPage;
