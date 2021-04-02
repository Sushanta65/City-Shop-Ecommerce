import React, { useState } from 'react';
import OrderDitails from '../OrderDitails/OrderDitails';

const Orders = () => {
    const [orderedProduct, setOrderedProduct] = useState([])
    fetch('http://localhost:8080/orders')
    .then(res => res.json())
    .then(data => {
        setOrderedProduct(data)
    })
 
    return (
        <div>
            <div className="container">
                <div className="row border p-3 w-75 m-auto">
                <h3>Review Your Order</h3>
                    {
                        orderedProduct.map(productInfo => <OrderDitails productInfo={productInfo}></OrderDitails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;