import React, { useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import './form.css';

export const LoginForm = (props) => {
    // let [loginPass, setLoginPass] = useState("")
    let loginCreds = useRef()
    let loginPass = useRef()
    let { signup } = useAuth();

    function testMethod() {
        console.log(loginCreds.current.value)
        console.log(loginPass.current.value)
    }


    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await signup(loginCreds.current.value, loginPass.current.value)
            toast.success("Account created successfully", {
                position: "top-center",
                autoClose: 4999,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch {
            toast.error("Account creation failed", {
                position: "top-center",
                autoClose: 4999,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <div className="login-form-wrapper" onClick={props.visibility}>
            <div className="login-form-container" onClick={(e) => { e.stopPropagation() }} >
                <div className="form-head">
                    <h1>SIGN IN</h1>
                    <button className="btn-close-tab btn-dark" onClick={props.visibility} ><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit} className="login-form">
                        <input type="text" placeholder='Username/Email :' ref={loginCreds} className="login-input" />
                        <input type="password" ref={loginPass} className="login-password" placeholder='Password' />
                        <button type="submit" className="btn btn-submit" onClick={testMethod()}>Sign In</button>
                    </form>
                </div>
                <div className="google-sign-in">

                </div>
                <p>Don't have an account?<Link to="/">Create one for free.</Link></p>
            </div>
        </div>

    )
}
