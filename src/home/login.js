import React, { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './form.css';

export const LoginForm = () => {
    let [loginPass, setLoginPass] = useState("")
    let [loginCreds, setLoginCreds]= useState("")

    return (
        <div className="login-form-wrapper">
            <div className="login-form-container">
                <div className="form-head">
                    <h1>SIGN IN</h1>
                    <button className="btn-close-tab" ><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={(e) => { e.preventDefault() }} className="login-form">
                        <input type="text" placeholder='Username/Email :' value={loginCreds} className="login-input" />
                        <input type="password" value={loginPass} className="login-password" placeholder='Password' />
                        <button type="submit" className="btn btn-submit">Sign In</button>
                    </form>
                </div>
                <div className="google-sign-in">
                    
                </div>
                <p>Don't have an account?<Link to="/">Create one for free.</Link></p>
            </div>
        </div>

    )
}
