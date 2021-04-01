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
            <div className="input-group m-auto w-50 text-center">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="input-group-btn btn btn-success">Search</button>
            </div>
            <div className="container">
            <div className="row py-3">
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