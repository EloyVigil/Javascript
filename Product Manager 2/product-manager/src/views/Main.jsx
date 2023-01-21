import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductDetails from './ProductDetails';
import { Routes, Route } from 'react-router-dom';

export default () => {

    return (
        <>
            <Routes>
                <Route path="/api" element={<ProductForm />} />
                <Route path="/api/products"  element={<ProductList />} />
                <Route path="/api/product/:_id" element={<ProductDetails />} />
            </Routes>

        </>
    )
}