// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2023 Cake Shop. All rights reserved.</p>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                |
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                |
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </div>
            <div className="copyright">
                <p>Created with ❤️ by Cake Shop Team</p>
            </div>
        </footer>
    );
}

export default Footer;
