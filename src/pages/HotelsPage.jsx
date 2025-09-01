import React from 'react';
import TravelpayoutsWidget from '../components/TravelpayoutsWidget';

const HotelsPage = () => {
  // This is a "white label" URL for a Travelpayouts hotel search form.
  // It's designed to be embedded in an iFrame and includes the client's marker.
  const hotelWidgetUrl = `https://whitelabel.travelpayouts.com/widgets/b0ba9535f5c531475752b5368f51086c/widget?locale=en&marker=${'661841'}`;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Search for Hotels</h1>
        <p className="mb-8 text-gray-600">Find the best deals on hotels worldwide. Enter your destination and dates below to get started.</p>
        <div className="border-t pt-8">
          {/* We use our iFrame component here */}
          <TravelpayoutsWidget iframeSrc={hotelWidgetUrl} />
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;

