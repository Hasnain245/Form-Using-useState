import React, { useState } from 'react'
import './Signup.css'
import Apple from './apple.png'
import Google from './google.png'
import { useNavigate } from "react-router-dom";

function Signup() {
    //Navigation//
  const navigate = useNavigate("");
//---------_--------//

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmChange(event) {
        setConfirm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //Add form submission Logic here, e.g sending data to the server
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirm);

        //----Alert When SignUp Button Is Clicked----//
        alert('Signed-Up Successfully..!');
    }

    
    return (
        <div className="SignupPage">
            <div className="form-wrapper">
                <div className="form-side">
                    <form className="my-form" id='myForm' onSubmit={handleSubmit}>
                        <div className="login-welcome-row">
                            <h1>Create Your Account</h1>
                        </div>
                        <div className="socials-row">
                            <a href="/" title="Use Google">
                                <img src={Google} alt="Google" />
                                Sign up with Google
                            </a>
                            <a href="/" title="Use Apple">
                                <img src={Apple} alt="Apple" />
                                Sign up with Apple
                            </a>
                        </div>
                        <div className="divider">
                            <span className="divider-line"></span>
                            Or
                            <span className="divider-line"></span>
                        </div>
                        <div className="text-field">
                            <label htmlFor="email">Email:
                                <input type="email" onChange={handleEmailChange} id="email" name="email" autoComplete="off" placeholder="Your Email"
                                    required />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="text-field">
                            <label htmlFor="password">Password:
                                <input id="password" type="password" onChange={handlePasswordChange} name="password" placeholder="Your Password" title="Minimum 6 characters at 
                                                        least 1 Alphabet and 1 Number"
                                     required />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z">
                                    </path>
                                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="text-field">
                            <label htmlFor="confirm-password">Confirm Password:
                                <input id="confirm-password" onChange={handleConfirmChange} type="password" name="password" placeholder="Confirm Password"
                                    title="Minimum 6 characters at east 1 Alphabet and 1 Number"
                                     required />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z">
                                    </path>
                                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                    <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                                </svg>
                            </label>
                        </div>
                        <button className="my-form__button" type="submit">
                            Sign up
                        </button>
                        <div className="my-form__actions">
                            <div className="my-form__row">
                                <span>Did you forget your password?</span>
                                <a href="/" title="Login" onClick={() => navigate("/")}>
                                    Login
                                </a>
                            </div>
                            {/* <div className="my-form__signup">
                                <a href="/" title="Login" onClick={() => navigate("/")}>
                                    Login
                                </a>
                            </div> */}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Signup
