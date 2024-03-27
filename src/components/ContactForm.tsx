"use client";

import React, { useState } from 'react';
import "./ContactForm.css";
import axios from 'axios'; // Import axios for making HTTP requests

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await axios.post('/api/sendEmail', formData);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending email.');
    }
  };

  return (
    <section className='Contact' id='Contact'>
    <h2>Contact</h2>
    <div className='contact-text'>
        <p>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input id="name" className="contact-form-name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

        <label htmlFor="email"></label>
        <input id="email" className="contact-form-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

        <label htmlFor="message"></label>
        <textarea id="message" className="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>

        <button type="submit" className="contact-submit">Submit</button>
    </form>
    </section>
  );
}

export default ContactForm;
