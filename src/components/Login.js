import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './login.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const create_auth = getAuth();

    const create_User = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(create_auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
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

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
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
                    <span>Login as</span>
                    <div className="techstu">
                        <div className="split"></div>
                        <div className="split-top"></div>
                        <button className='student' onClick={signin_User} >Student</button>
                        <button className='teacher' onClick={signin_User} >Teacher</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
