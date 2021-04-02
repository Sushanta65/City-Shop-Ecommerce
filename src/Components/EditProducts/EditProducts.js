import React from 'react';
import AdminSiteBar from '../AdminSiteBar/AdminSiteBar';

const EditProducts = () => {
    return (
        <div>
            <div className="row">
                <AdminSiteBar></AdminSiteBar>
                <div className="col-md-10 bg-light">
                    <h4 className="p-2">Edit Your Products</h4>
                </div>
            </div>
        </div>
    );
};

export default EditProducts;