import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',

    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); //Data is processed from here
    }
    return (
        <div>
            <section className="body-heading">
                <h2 className="main-heading">Contact Us</h2>
            </section>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

                    <button type="submit">Submit</button>
                </form>

            </div>
            <section className="contact-details">
            <ul>
                <li><img src="/Assets/call.png" alt="mobile number icon" /> +217 6547 8979</li>
                <li><img src="/Assets/email.png" alt="email icon" /> CodingStars@gmail.com</li>
                <li><img src="/Assets/facebook.png" alt="facebook icon" /> Coding Stars</li>
                <li><img src="/Assets/instagram.png" alt="instagram icon" /> Coding_Stars</li>
            </ul>
        </section>

        </div>
    );
}
export default ContactUs;
