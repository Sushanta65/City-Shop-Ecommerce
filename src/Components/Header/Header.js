import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './../../App';
import './Header.css';

const Header = () => {
    const [signedInUser] = useContext(UserContext)

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand text-dark"><h3>City Shop</h3></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menuBar">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="navbar-item"><Link className="nav-link" to="/orders">Orders</Link></li>
                            <li className="navbar-item"><Link className="nav-link" to="/admin">Admin</Link></li>
                            <li className="navbar-item"><Link className="nav-link" to="/deals">Deals</Link></li>
                            <li className="nav-item for-border">
                                <Link className="nav-link">
                                    <img className="userPhoto" src={signedInUser.imgURL} alt=""/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark">
                                    <strong>{signedInUser.name}</strong>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {signedInUser.email? <button className="btn btn-success">Sign Out</button>
                                :<button className="btn btn-success">
                                <Link className="text-white" to="/login">Login</Link></button>}
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;