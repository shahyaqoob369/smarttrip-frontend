import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Terms of Service</h1>
        <div className="prose lg:prose-lg mx-auto text-gray-600">
          <p>Please read these Terms of Service carefully before using the SmartTripDeals website.</p>
          
          <h2>Our Role</h2>
          <p>SmartTripDeals is an affiliate marketing website. We provide links to third-party travel service providers (e.g., airlines, hotels, car rental agencies). We do not own, operate, or control these third-party services. We are not a travel agent and do not handle bookings, payments, or customer service for the services listed on our site.</p>

          <h2>Limitation of Liability</h2>
          <p>Any bookings you make are with the third-party provider, and their terms and conditions apply. SmartTripDeals is not responsible for any issues that may arise with your booking.</p>

          <h2>Intellectual Property</h2>
          <p>The content on this website, including the logo and text, is the property of SmartTripDeals and is protected by copyright laws.</p>
          
          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We recommend you review this page periodically for changes.</p>

          <p><em>Disclaimer: This is a standard template and not legal advice. It is recommended to have a legal professional review these terms.</em></p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;