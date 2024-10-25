import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import DevLaunchLogo from '../assets/devlaunch_logo.png';


const SignUp = () => {
    const navigate = useNavigate();

    const [leftFormData, setLeftFormData] = useState({
        email: '',
        password: ''
    });

    const [rightFormData, setRightFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleLeftChange = (e) => {
        const { name, value } = e.target;
        setLeftFormData({ ...leftFormData, [name]: value });
    };

    const handleRightChange = (e) => {
        const { name, value } = e.target;
        setRightFormData({ ...rightFormData, [name]: value });
    };

    const handleLeftSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));
        console.log('Stored User:', storedUser); // Debugging log

        if (
            storedUser && 
            storedUser.email === leftFormData.email && 
            storedUser.password === leftFormData.password
        ) {
            console.log('User signed in:', leftFormData);
            navigate('/bootcamps'); // Navigate to Bootcamp page
        } else {
            alert('Invalid credentials. Please try again.'); // Display an error message
        }
    };

    const handleRightSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name: rightFormData.name,
            email: rightFormData.email,
            password: rightFormData.password,
        };

        localStorage.setItem('user', JSON.stringify(userData));
        console.log('User registered:', userData);
        alert('Registration successful! You can now sign in.');
    };

    return (
        <section>
            <div className="grid-container">
                {/* Left Grid Content */}
                <div className="card-left-side">
                    <img src={DevLaunchLogo} alt="Devlaunch logo" />
                    <form className="left-form" onSubmit={handleLeftSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={leftFormData.email}
                            onChange={handleLeftChange}
                        />

                        <label htmlFor="pass">Password</label>
                        <input
                            name="password"
                            id="pass"
                            type="password"
                            value={leftFormData.password}
                            onChange={handleLeftChange}
                        />

                        <button type="submit">Sign in</button>
                        <a href="/Pages/ForgotPassword.html">Forgot Password?</a>
                    </form>
                </div>

                {/* Right Grid Content */}
                <div className="card-right-side">
                    <h1>New Here?</h1>
                    <p>Sign up and discover offered Bootcamps at your convenience</p>
                    <form className="right-form" onSubmit={handleRightSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            value={rightFormData.name}
                            onChange={handleRightChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={rightFormData.email}
                            onChange={handleRightChange}
                        />

                        <label htmlFor="pass">Password</label>
                        <input
                            id="pass"
                            name="password"
                            type="password"
                            value={rightFormData.password}
                            onChange={handleRightChange}
                        />

                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            id="confirm"
                            name="confirmPassword"
                            type="password"
                            value={rightFormData.confirmPassword}
                            onChange={handleRightChange}
                        />

                        <label>
                            <input type="checkbox" name="option" value="option" />
                            I confirm the above information is true.
                        </label>

                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
