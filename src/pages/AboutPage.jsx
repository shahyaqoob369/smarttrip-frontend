import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          About SmartTripDeals
        </h1>
        <div className="prose lg:prose-lg mx-auto text-gray-600">
          <p>
            Welcome to SmartTripDeals, your premier destination for finding the best travel offers from across the globe. Our mission is simple: to make travel planning effortless and affordable.
          </p>
          <p>
            We believe that amazing travel experiences shouldn't require endless hours of searching. Our advanced platform works in real-time, scanning a vast network of top-tier providers to bring you the best available offers on flights, hotels, car rentals, and more the moment they appear. We cut through the noise, so you can stop searching and start traveling.
          </p>
          <p>
            As a trusted affiliate partner, we connect you with the world's leading travel brands, ensuring you get reliable service and competitive prices every time. Thank you for choosing SmartTripDeals for your next adventure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;