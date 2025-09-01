import React from 'react';
import TravelpayoutsWidget from '../components/TravelpayoutsWidget';

const FlightsPage = () => {
  // This is the official Travelpayouts script for a flight search widget.
  // It has been configured with the client's affiliate marker: 661841
  const widgetScriptSrc = `//widgets.travelpayouts.com/assets/plugins/forms/forms.js?af_id=233939&marker=${'661841'}&trs=205625&host=search.jetradar.com&locale=en&currency=usd&powered_by=false&destination=&origin=&one_way=false&only_direct=false`;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Search for Flights</h1>
        <p className="mb-8 text-gray-600">Find the best deals on flights from thousands of airlines. Enter your origin and destination below.</p>

        {/* This is where the flights widget will be embedded */}
        <div className="border-t pt-8">
          <TravelpayoutsWidget 
            scriptSrc={widgetScriptSrc}
            divId="travelpayouts-flights-widget"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;