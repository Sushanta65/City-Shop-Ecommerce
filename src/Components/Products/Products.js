import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Products = (props) => {
    const {_id, name, price, discount, imgURL} = props.product;
    const p = price / 100 * discount;
    const mainPrice = price - p;
    return (
        <>
        <div className="col-md-3 pt-3">
        <div className="card">
            <img className="cardImg" src={imgURL} alt=""/>
           <div className="card-body">
           <h5 className="card-title">{name}</h5>
           <h5><FontAwesomeIcon icon={faDollarSign} />{Math.round(mainPrice)}</h5>
            <small><FontAwesomeIcon icon={faDollarSign} /><del>{price}</del></small>
            <small> -{discount}%</small><br/>
            <Link className="text-white" to={`/products/${_id}`}><button className="btn btn-success w-100">Buy Now</button></Link>
           </div>
        </div>
        </div>
        </>
    );
};

export default Products;