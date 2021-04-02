import React from 'react';

const ProductList = (props) => {
    const {name, price, discount, _id} = props.product;
    const deleteProduct = () => {

        fetch(`/delete/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
    }
    return (
        <div>
          <div className="row border">
              <div className="col-md-3 p-2">{name}</div>
              <div className="col-md-3 p-2">${price}</div>
              <div className="col-md-3 p-2">${discount}</div>
              <div className="col-md-3 p-2">
                  <div className="row">
                      <div className="col-md-6 p-2"><button className="btn btn-primary btn-sm">Update</button></div>
                      <div className="col-md-6 p-2"><button onClick={deleteProduct} className="btn btn-danger btn-sm">Delete</button></div>
                  </div>
              </div>

          </div>
        </div>
    );
};

export default ProductList;