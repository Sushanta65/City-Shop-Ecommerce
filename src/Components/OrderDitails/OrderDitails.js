import React from 'react';

const OrderDitails = (props) => {
    const { name, email, orderPlacedTime } = props.productInfo;
    const { price, discount, productImg } = props.productInfo.product;
    // Discount Calculation
    const p = price / 100 * discount;
    const mainPrice = price - p;
    return (
        <div className="col-12 pt-4">
            <div className="border p-3">

                <div className="shipping pt-3">
                    <h4>User and Order Information</h4>
                    <hr />
                    <h5>{name}</h5>
                    <h6>{email}</h6>
                    <p>Order Placed: {orderPlacedTime}</p>
                </div>
                <div className="productDitails pt-3">
                    <h4>Product Information</h4>
                    <hr />
                    <div className="media">
                        <img className="mr-3 w-25" src={productImg} alt="" />
                        <div className="media-body">
                            <h5 className="mt-0">{props.productInfo.product.name}</h5>
                            <p>Price: {price}</p>
                            <p>Discount: ${discount}</p>
                            <p>Total Price: ${mainPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderDitails;