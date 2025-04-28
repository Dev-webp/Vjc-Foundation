"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus('Error sending message.');
      }
    }
  };

  return (
    <div className='bg-white py-10 px-4'>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
        
        <p className=" font-semibold tracking-widest text-center text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</p>
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2 text-orange-600">Write Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-500">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
