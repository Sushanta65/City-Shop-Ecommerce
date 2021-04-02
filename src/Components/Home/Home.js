import React, { useEffect, useState } from 'react';
import './Home.css'
import Products from './../Products/Products';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <>
        <div>
            <div className="input-group m-auto w-50 text-center pt-4">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                <button className="input-group-btn btn btn-success">Search</button>
                </div>
            </div>
            <div className="container">
            <div className="row py-4">
                {/* Spinner added here */}
                <div className="w-100 text-center">
                {products.length === 0 && <div className="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
                </div>}
                </div>
                
            {
                products.map(product => <Products product={product}></Products>)
            }
            </div>
            </div>
        </div>
        </>
    );
};

export default Home;