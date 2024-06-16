'use client';

import Image from 'next/image';
import React from 'react';
import Link from "next/link";

interface Product {
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
}

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <Link href="##">
            <div className="flex flex-col w-64 rounded-lg shadow-md p-2">
                <div className="relative w-48 h-48 mb-4">
                    <Image
                        src={product.imgUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h2 className="text-lg font-bold">{product.name}</h2>
                <h2 className="text-sm">{product.desc}</h2>
                <p className="text-gray-600 font-bold">R${product.price.toFixed(2)}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
