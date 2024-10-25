import React, { useState } from "react";
import Modal from '../components/Modal';
import '../styles/contact.css';
import callIcon from '../assets/call.png';
import emailIcon from '../assets/email.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Data is processed here

        // Show popup message
        setIsModalOpen(true);

        // Reset form to initial state
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <main className="contact-main">
                <section className="body-heading">
                    <h2 className="main-heading">Contact Us</h2>
                </section>
                
                <div className="form-container">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                
                <section className="contact-details">
                    <ul>
                        <li><img src={callIcon} alt="mobile number icon" /> +217 6547 8979</li>
                        <li><img src={emailIcon} alt="email icon" /> CodingStars@gmail.com</li>
                        <li><img src={facebookIcon} alt="facebook icon" /> Coding Stars</li>
                        <li><img src={instagramIcon} alt="instagram icon" /> Coding_Stars</li>
                    </ul>
                </section>
            </main>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                message="Message submitted!" 
            />
        </div>
    );
};

export default ContactUs;
