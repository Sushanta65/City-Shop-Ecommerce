import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../App';

const Header = () => {
    const [signedInUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand"><h3>City Shop</h3></Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="navbar-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="navbar-item"><Link className="nav-link" to="/orders">Orders</Link></li>
                            <li className="navbar-item"><Link className="nav-link" to="/admin">Admin</Link></li>
                            <li className="navbar-item"><Link className="nav-link" to="/deals">Deals</Link></li>
                            <li className="nav-item"><button className="btn btn-success"><Link className="text-white" to="/login">Login</Link></button></li>
                            <li>{signedInUser.name}</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;