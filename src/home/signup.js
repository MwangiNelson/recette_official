import React from 'react'

export const Signup = (props) => {
  return (
    <div className="login-form-wrapper">
      <div className="login-form-container">
        <div className="form-head">
          <h1>SIGN UP</h1>
          <button className="btn-close-tab" onClick={props.visibility} ><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="form-wrapper">
          <form onSubmit={(e) => { handleSubmit(e) }} className="login-form">
            <input type="text" placeholder='Username/Email :' ref={loginCreds} className="login-input" />
            <input type="password" ref={loginPass} className="login-password" placeholder='Password' />
            <button type="submit" className="btn btn-submit">Sign Up</button>
          </form>
        </div>
        <div className="google-sign-in">

        </div>
        <p>Already have an account?<Link to="/">Sign In.</Link></p>
      </div>
    </div>
  )
}

