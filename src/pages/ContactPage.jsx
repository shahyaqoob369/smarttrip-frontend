import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Contact Us
        </h1>
        <p className="mb-8 text-gray-600 text-center">
          Have questions or feedback? We'd love to hear from you. Fill out the form below to get in touch with our team.
        </p>
        <div className="border-t pt-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="mt-1 block w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 block w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message..."
                required
                className="mt-1 block w-full p-3 border rounded-md"
              ></textarea>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;