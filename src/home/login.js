import React, { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './form.css';

export const LoginForm = (props) => {
    // let [loginPass, setLoginPass] = useState("")
    let loginCreds = useRef("")
    let loginPass = useRef("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginPass.current.value)
    }
    return (
        <div className="login-form-wrapper" onClick={props.visibility}>
            <div className="login-form-container" onClick={(e) => { e.stopPropagation() }} >
                <div className="form-head">
                    <h1>SIGN IN</h1>
                    <button className="btn-close-tab" onClick={props.visibility} ><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={(e) => { handleSubmit(e) }} className="login-form">
                        <input type="text" placeholder='Username/Email :' ref={loginCreds} className="login-input" />
                        <input type="password" ref={loginPass} className="login-password" placeholder='Password' />
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
