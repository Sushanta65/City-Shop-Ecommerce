import React, { useEffect, useState } from 'react';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';
import ProductList from '../ProductList/ProductList';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (
        <div>
            <div className="row">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-2">Manage Your Products</h4>
                    <div className="productList">
                        <div className="row pt-3">
                            <div className="col-md-3"><h5>Product Name</h5></div>
                            <div className="col-md-3"><h5>Price</h5></div>
                            <div className="col-md-3"><h5>Discount</h5></div>
                            <div className="col-md-3"><h5>Update and Delete</h5></div>
                        </div>
                        <div className="w-75 text-center">
                            {products.length === 0 && <div className="spinner-border text-success" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>}
                        </div>
                        {
                            products.map(product => <ProductList product={product}></ProductList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;