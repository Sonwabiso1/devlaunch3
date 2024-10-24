import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <p>&copy; 2024 Coding Stars. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
