import React, { useState, useRef } from 'react';
import './form.css';

export const LoginForm = () => {
    return (
        <>
            <div className="form-wrappper">
                <div className="form-head">
                    <h1>Login</h1>
                </div>
                <div className="form-container">
                    <form action="" className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="input-field" placeholder="example@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="input-field" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-submit" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
