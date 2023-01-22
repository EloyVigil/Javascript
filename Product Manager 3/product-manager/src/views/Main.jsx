import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import ProductDetails from './ProductDetails';
import { Routes, Route } from 'react-router-dom';
import Update from './Update';

export default () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<ProductForm />} />
                <Route path="/products"  element={<ProductList />} />
                <Route path="/product/:_id" element={<ProductDetails />} />
                <Route path="/edit/product/:_id" element={<Update />} />
            </Routes>

        </>
    )
}