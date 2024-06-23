import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    price: number;
    desc: string;
    imgUrl: string;
}

interface ProductImageProps {
    product: Product;
}

const ProductImage: React.FC<ProductImageProps> = ({ product }) => {
    return (
        <div>
            <Image
                src={product.imgUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}

export default ProductImage;
