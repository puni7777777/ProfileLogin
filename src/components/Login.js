import React, { useState } from 'react'
import './login.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const create_auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const home_page = useNavigate()

    const create_User = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(create_auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
                home_page('/Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }

    const signin_User = e => {
        e.preventDefault();

        signInWithEmailAndPassword(create_auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
                home_page('/Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                alert('invalid email or password please try again after some time')
            });
    }
    const get_mail = (e) => {
        setEmail(e.target.value)
    }

    const get_pass = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='classroom'>
            <div className="board">
                <h1>COLLEGE PROFILE LOGIN</h1>
                <div className="writings">
                    <div className="creds">
                        <div className="mail">
                            <span>E-mail :</span>
                            <input className='user-id' type="email" name="email" id="email" required onChange={get_mail} />
                        </div>
                        <div className="passw">
                            <span>Password :</span>
                            <input type="password" name="password" id="password" onChange={get_pass} />
                        </div>
                    </div>
                    {/* <span>Login as</span> */}
                    <div className="techstu">
                        {/* <div className="split"></div> */}
                        <div className="split-top"></div>
                        <button className='login-btn' onClick={signin_User} >Login</button>
                    </div>
                </div>
                <div className="signup-link">
                    <p>New user?</p>
                    <a href='/signUp'>register here</a>
                </div>
            </div>
        </div>
    )
}
