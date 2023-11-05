import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";


function Login() {

  //Navigation//
  const navigate = useNavigate("");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //Add form submission Logic here, e.g sending data to the server
    console.log('Email:', email);
    console.log('Password:', password);

    //----Alert When Login Button Is Clicked----//
    alert('Login Successfully..!');
  }

  return (
    <div className='LoginPage'>
      <div className="main">
        <div className="header">
          <div className="title">
            <h2>Login</h2>
          </div>


          <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='Enter your email' autoComplete="off" required/><br />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Enter your Password' required/><br />

            <div className="down">
              <input type="checkbox" name="" id="rememberpassword" /> <label htmlFor="rememberpassword">Remember Password</label> <a href='/' id='forgetPass'>Forgot Password</a>
            </div><br />

            <button type='submit' className='btn' >Log In</button><br />

            <div className="end">
              <p>Don't Have An Account?<button onClick={() => navigate("/Signup")}> SignUp</button></p>
            </div>

          </form>


        </div>
      </div>
    </div>
  )
}

export default Login
