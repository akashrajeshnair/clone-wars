import React, { useState } from 'react';
import { signUp, signIn, signOut } from '../../server/auth.js';
import { addUser, getUser , updateUser, deleteUser } from '../../server/firestore.js';

function SignIn() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = async (event) => {
    event.preventDefault();
    try {
        await signUp(email, password);
        await addUser(email); // Create user in Firestore
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
    <div className="auth-page">
        <form onSubmit={handleSignUp}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>
        <form onSubmit={handleSignIn}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
        <button onClick={handleSignOut}>Sign Out</button>
    </div>
);
}
export default SignIn;