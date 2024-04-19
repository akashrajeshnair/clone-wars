import React, { useState } from 'react';
import "./SignIn.css"
import { signUp, signIn, signOut } from '../../server/auth.js';
import { addUser, getUser , updateUser, deleteUser } from '../../server/firestore.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


function SignIn() {

let navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = async (event) => {
    event.preventDefault();
    try {
        const user = await signUp(email, password);
        onAuthStateChanged(user => {
            if (user) {
                navigate('/feed');
            }
        })
        alert('Sign up successful');
    } catch (error) {
        alert('Error signing up: ' + error.message);
    }
};

const handleSignIn = async (event) => {
    event.preventDefault();
    try {
        await signIn(email, password);
        alert('Sign in successful');
    } catch (error) {
        alert('Error signing in: ' + error.message);
    }
};

const handleSignOut = async () => {
    try {
        await signOut();
        alert('Sign out successful');
    } catch (error) {
        alert('Error signing out: ' + error.message);
    }
};


return (
    <div className='login'>
    <div className='login-left'>
        <img src="https://img.icons8.com/?size=256&id=ClbD5JTFM7FA&format=png" alt="" />
    </div>
    <div className='login-right'>
        <h1>Happening now</h1>
        <div className='join'>
            <h2>Join today.</h2>
            <input className='cred' type="text" placeholder='Username'/>
            <br />
            <input className='cred' type="text" placeholder='Password' />
            <br />
            <button id="login-btn" onClick={signIn}>Sign In</button>
        </div>
        <div className="login-footer">
            <h3>Don't have an account?</h3>
            <button className='sign-up-btn'>Sign Up</button>
        </div>
    </div>
    </div>
);
}
export default SignIn;