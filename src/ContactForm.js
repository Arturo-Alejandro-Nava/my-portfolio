import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    emailjs
      .sendForm(
        'service_fd5irrp',  // <-- PASTE YOUR SERVICE ID HERE
        'template_k960ahp', // <-- PASTE YOUR TEMPLATE ID HERE
        form.current,
        'cp-BdAH1sDrfwPV4e'   // <-- PASTE YOUR PUBLIC KEY HERE
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Clears the form after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    // The ref attribute connects useRef to the form DOM element
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      {/* Name Input Field */}
      <div>
        <label htmlFor="from_name" className="block text-lg font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          name="from_name" // This MUST match the variable in your EmailJS template
          id="from_name"
          required
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Email Input Field */}
      <div>
        <label htmlFor="from_email" className="block text-lg font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          name="from_email" // This MUST match the variable in your EmailJS template
          id="from_email"
          required
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Message Text Area */}
      <div>
        <label htmlFor="message" className="block text-lg font-semibold mb-2">
          Message
        </label>
        <textarea
          name="message" // This MUST match the variable in your EmailJS template
          id="message"
          rows="5"
          required
          className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;