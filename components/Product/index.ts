import dynamic from 'next/dynamic';

const Product = dynamic(import('./Product'), { ssr: true });
export default Product;
