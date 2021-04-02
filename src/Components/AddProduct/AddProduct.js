import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';

const AddProduct = () => {
    
    const { register, handleSubmit } = useForm();
    const [imgURL, setImgURL] = useState(null)
    const onSubmit = data => {
        const price = parseFloat(data.price)
        const discount = parseFloat(data.discount)
        const formInfo = {
            name: data.name,
            price: price,
            discount: discount,
            imgURL: imgURL
        }
        fetch('http://localhost:8080/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formInfo)
        })
        .then(res => {
            console.log(res)
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imgData = new FormData();
        imgData.set('key', 'dc5ff909700b7f4eb5f2277679a2826d')
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(res => {
            setImgURL(res.data.data.display_url);
            console.log(res.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <div className="row">
               <AdminSiteBar></AdminSiteBar>
            <div className="col-md-10 bg-light">
                    <h4 className="p-2">Add Products</h4>
                    <div className="formArea">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control w-50" name="name" placeholder="Product Name" id="productName" ref={register} /><br/>
                        <input className="form-control w-50" name="price" placeholder="Reguler Price" ref={register({ required: true })} /> <br/>
                        <input className="form-control w-50" name="discount" placeholder="Discount" ref={register({ required: true })} /> <br/>
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                        <input className="w-50 upload-files" type="file" onChange={handleImageUpload} name="image" /><br/>
                        <input class="btn btn-outline-info mt-3" type="submit" />
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AddProduct;