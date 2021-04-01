import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductCheckOut = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const {name, price, discount} = product;
    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data[0]))
    }, [id])
    // Discount Calculation
    const p = price / 100 * discount;
    const mainPrice = price - p;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5">
                        <div className="productDitails border p-3">
                            <h4 className="pb-2">Checkout</h4>
                                <div className="productTable">
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{name}</td>
                                            <td>1</td>
                                            <td>${discount}</td>
                                            <td>${price}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" colSpan="4">Total</th>
                                            <td>${mainPrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-success float-right mt-2">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCheckOut;