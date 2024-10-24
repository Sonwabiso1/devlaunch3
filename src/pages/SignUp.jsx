import React, { useState } from 'react';
import './signup.css'; // Ensure you have a corresponding CSS file

const SignUp = () => {
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
        console.log('Left form submitted:', leftFormData);
    };

    const handleRightSubmit = (e) => {
        e.preventDefault();
        console.log('Right form submitted:', rightFormData);
    };

    return (
        <section>
            <div className="grid-container">
                {/* Left Grid Content */}
                <div className="card-left-side">
                    <div className="card">
                        <img src="/Assets/devlaunch-removebg-preview.png" alt="Dev launch logo" className="logo" />
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
                                name="pass"
                                id="pass"
                                type="password"
                                value={leftFormData.password}
                                onChange={handleLeftChange}
                            />

                            <button type="submit">Sign in</button>
                            <a href="/Pages/ForgotPassword.html">Forgot Password?</a>
                        </form>
                    </div>
                </div>

                {/* Right Grid Content */}
                <div className="card-right-side">
                    <div className="card">
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
                                name="pass"
                                type="password"
                                value={rightFormData.password}
                                onChange={handleRightChange}
                            />

                            <label htmlFor="confirm">Confirm Password</label>
                            <input
                                id="confirm"
                                name="confirm"
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
            </div>
        </section>
    );
};

export default SignUp;
