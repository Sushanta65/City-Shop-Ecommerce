import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import googleImage from '../../assets/Images/icons/Group 573.png'
import fbImage from '../../assets/Images/icons/Group 2.png'
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const Login = () => {

    const [signedInUser, setSignedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const [userinfo, setUserInfo] = useState({
        name: '',
        email: '',
        imgURL: ''
    })

    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                let userNewInfo = {...userinfo}
                userNewInfo = {
                    name: user.displayName,
                    email: user.email,
                    imgURL: user.photoURL
                }
                setUserInfo(userNewInfo)
                setSignedInUser(userNewInfo)
                history.replace(from);
            })
            .catch(err => {
                console.log(err.message)
                console.log(err.code)
                console.log(err)
            })
    }
    return (
        <div>
           <div className="container">
               {signedInUser && <div className="row">
                   <div className="col-12 mt-5">
                       <div className="loginForm border w-50 m-auto p-4 mb-3">
                           <h4 className="pb-2">Sign In Form</h4>
                           <form>
                               <input className="form-control mb-3" type="text" placeholder="Name"/>
                               <input className="form-control mb-3" type="email" placeholder="Username or Email"/>
                               <input className="form-control mb-3" type="password" placeholder="Password"/>
                               <input className="form-control mb-3" type="password" placeholder="Confirm Password"/>
                               <input className="btn btn-success" type="submit" value="Sign In"/>
                           </form>
                           
                       </div>
                       <div className="alternativeSignIn w-50 m-auto text-center">
                        <span>  ____________________or____________________ </span><br/>

                          <button className="w-100 mt-3" onClick={handleSignIn}> <img className="google float-left" src={googleImage} alt="google"/> Sign In With Google</button>

                          <button className="w-100 mt-2"> <img className="google float-left" src={fbImage} alt="facebook"/> Sign In With Facebook</button>
                          
                       </div>
                   </div>
               </div>}
               
           </div>
            
        </div>
    );
};

export default Login;