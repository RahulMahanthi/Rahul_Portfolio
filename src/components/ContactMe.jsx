import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

// Custom Alert component
const Alert = ({ children, type }) => {
  return (
    <div
      className={`p-4 mb-4 rounded-md shadow-md ${
        type === 'success'
          ? 'bg-green-500 text-white'
          : 'bg-red-500 text-white'
      }`}
    >
      {children}
    </div>
  );
};

export default function ContactMe() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flashMessage, setFlashMessage] = useState(null);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mwpeeeop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFlashMessage({ type: 'success', message: 'Message sent successfully!' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        setFlashMessage({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setFlashMessage({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => setFlashMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-200 to-purple-300 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-center text-blue-700 mb-10">Contact Me</h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl ring-2 ring-blue-100">
          {flashMessage && (
            <Alert type={flashMessage.type}>{flashMessage.message}</Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <input
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              name="message"
              rows="6"
              value={formState.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>

            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 flex items-center justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              <Send className="mr-3" size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-10 flex justify-center space-x-10">
            <div className="flex items-center space-x-2">
              <Mail className="text-red-500" size={24} />
              <span className="text-lg text-gray-700">rahulkomal834@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-green-500" size={24} />
              <span className="text-lg text-gray-700">+91 7013132055</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
