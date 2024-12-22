// src/components/AboutUs.js
import React, { useState } from 'react';
import './ContactForm.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            setMessage('Successfully signed in!');
        } else {
            setMessage('Please enter both email and password.');
        }
    };

    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <p>Welcome back! Please sign in to continue.</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit">Sign In</button>
            </form>

            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default SignIn;
