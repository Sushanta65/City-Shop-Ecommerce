import React, { useContext, useState } from 'react';
import OrderDitails from '../OrderDitails/OrderDitails';
import { UserContext } from './../../App';

const Orders = () => {
    const [signedInUser] = useContext(UserContext)
    const [orderedProduct, setOrderedProduct] = useState([])
    fetch('https://apricot-shortcake-00287.herokuapp.com/orders?email=' + signedInUser.email)
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