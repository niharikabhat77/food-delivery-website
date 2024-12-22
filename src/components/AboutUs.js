// src/components/AboutUs.js
import React, { useState } from 'react';
import './AboutUs.css';

function ContactAndAbout() {
    // State for Contact Us form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    // Team data for About Us
    const team = [
        { name: 'Manasvi', role: 'CEO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbsTS4f0Fy4bFrYizrDo0VdC8UK5Dlo3cqteTaAyU8hLg5eevW9uwfjN-50ZE', bio: 'Passionate about culinary arts and business.' },
        { name: 'Nosh', role: 'Head Chef', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNkJ3JCdfHf3sR07frMxYZHB9VGnCWq9ozA&s', bio: 'Expert in creating gourmet dishes.' },
        { name: 'Dhanvi', role: 'Marketing Head', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbODB09Ew4aP3lkENWPtTlVD7qmAc0XoB7A&s', bio: 'Driven by creative branding and growth strategies.' },
    ];

    // Validation for Contact Us form
    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
            errors.email = 'Valid email is required';
        if (!formData.message) errors.message = 'Message cannot be empty';
        return errors;
    };

    // Input change handler
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        } else {
            setErrors(errors);
            setSuccessMessage('');
        }
    };

    return (
        <div className="contact-and-about">
            {/* Contact Us Section */}
            <section className="contact-us">
                <h2>Contact Us</h2>
                <p>Have any questions? Fill out the form below and we'll get back to you soon!</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <small className="error">{errors.name}</small>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <small className="error">{errors.email}</small>}
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        {errors.message && <small className="error">{errors.message}</small>}
                    </div>
                    <button type="submit">Send Message</button>
                    {successMessage && <p className="success">{successMessage}</p>}
                </form>

                <div className="contact-info">
                    <h3>Our Contact Info</h3>
                    <p>Email: contact@yourwebsite.com</p>
                    <p>Phone: +123-456-7890</p>
                    <div className="map">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8101029392955!2d-122.085638284664!3d37.42199977982596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb09e0a0b27fb%3A0x29c7492d382a1297!2sGoogleplex!5e0!3m2!1sen!2sus!4v1619874938283!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us">
                <h2>About Us</h2>
                <p>We are passionate about delivering delicious food and exceptional service.</p>
                <div className="timeline">
                    <h3>Our Journey</h3>
                    <ul>
                        <li>2010 - Founded as a small startup.</li>
                        <li>2015 - Expanded to multiple locations.</li>
                        <li>2020 - Recognized as the top food delivery service in the region.</li>
                    </ul>
                </div>
                <div className="team">
                    <h3>Meet Our Team</h3>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.image} alt={member.name} />
                                <h4>{member.name}</h4>
                                <p>{member.role}</p>
                                <p className="bio">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactAndAbout;
