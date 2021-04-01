import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSiteBar.css'
import icon1 from '../../assets/Images/icons/grid 1.png'
import icon2 from '../../assets/Images/icons/plus 1.png'
import icon3 from '../../assets/Images/icons/edit 1.png'

const AdminSiteBar = () => {
    return (
        
            <div className="col-md-2 bg-dark text-light text-center siteBar">
                    <h4 className="py-2">City Shop</h4>
                    <ul className="navbar-nav text-left pl-2">
                     <li className="nav-item"><Link className="nav-link" to="/manageProduct"><img src={icon1} alt=""/> Manage Products</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/addProduct"><img src={icon2} alt=""/> Add Products</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/editProduct"><img src={icon3} alt=""/> Edit Products</Link></li>
                    </ul>
                </div>
        
    );
};

export default AdminSiteBar;