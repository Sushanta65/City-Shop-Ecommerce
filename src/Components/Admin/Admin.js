// import axios from 'axios';
import AddProduct from '../AddProduct/AddProduct';
import './Admin.css';
// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {
    // const { register, handleSubmit, watch, errors } = useForm();
    // const [imgURL, setImgURL] = useState(null)
    // const onSubmit = data => {
    //     const price = parseFloat(data.price)
    //     const discount = parseFloat(data.discount)
    //     const formInfo = {
    //         name: data.name,
    //         price: price,
    //         discount: discount,
    //         imgURL: imgURL
    //     }
    //     fetch('http://localhost:8080/addProduct', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formInfo)
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
        
    //     console.log(formInfo)
    // };

    // const handleImageUpload = event => {
    //     console.log(event.target.files[0])
    //     const imgData = new FormData();
    //     imgData.set('key', 'dc5ff909700b7f4eb5f2277679a2826d')
    //     imgData.append('image', event.target.files[0])
    //     axios.post('https://api.imgbb.com/1/upload', imgData)
    //       .then(res => {
    //         setImgURL(res.data.data.display_url);
    //         console.log(res.data.data.display_url)
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    
    return (
        <div>
            {/* <div className="row pt-4">
                <div className="col-md-2 bg-dark text-light text-center">
                    <h4 className="py-2">City Shop</h4>
                    <ul>
                        <li><Link to="/manageProduct">Manage Products</Link></li>
                        <li><Link to="/addProduct">Add Products</Link></li>
                        <li><Link to="/editProduct">Edit Products</Link></li>
                    </ul>
                </div>
                
            </div>
             */}
             <AddProduct></AddProduct>
        </div>
    );
};

export default Admin;