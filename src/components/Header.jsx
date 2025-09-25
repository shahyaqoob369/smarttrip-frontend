import React from 'react';
import { Link } from 'react-router-dom';
import ServiceButton from './ServiceButton';

// --- Icon Imports ---
// (We keep all our icon imports here)
import HotelIcon from '../assets/icons/hotel.svg?react';
import FlightIcon from '../assets/icons/flight.svg?react';
// ... and so on for all 12 icons
import TrainIcon from '../assets/icons/train.svg?react';
import CarIcon from '../assets/icons/car.svg?react';
import TransferIcon from '../assets/icons/transfer.svg?react';
import ToursIcon from '../assets/icons/tours.svg?react';
import VacationIcon from '../assets/icons/vacation.svg?react';
import HostelIcon from '../assets/icons/hostel.svg?react';
import YachtIcon from '../assets/icons/yacht.svg?react';
import InsuranceIcon from '../assets/icons/insurance.svg?react';
import EsimIcon from '../assets/icons/esim.svg?react';
import CompensationIcon from '../assets/icons/compensation.svg?react';


const affiliateMarker = '661841';

const services = [
  // ... (The services array remains the same as before)
  { label: 'Flights', Icon: FlightIcon, serviceKey: 'flights', colorClass: 'bg-orange-500' },
  { label: 'Car Rentals', Icon: CarIcon, serviceKey: 'car-rentals', colorClass: 'bg-green-500' },
  { label: 'Hotels', Icon: HotelIcon, serviceKey: 'hotels', colorClass: 'bg-blue-800' },
  { label: 'Hostels', Icon: HostelIcon, serviceKey: 'hostels', colorClass: 'bg-violet-500' },
  { label: 'Vacation Rentals', Icon: VacationIcon, serviceKey: 'vacation-rentals', colorClass: 'bg-sky-500' },
  { label: 'Airport Transfers', Icon: TransferIcon, serviceKey: 'airport-transfers', colorClass: 'bg-teal-500' },
  { label: 'Trains & Buses', Icon: TrainIcon, serviceKey: 'trains-buses', colorClass: 'bg-red-500' },
  { label: 'Tours & Activities', Icon: ToursIcon, serviceKey: 'tours-activities', colorClass: 'bg-yellow-500' },
  { label: 'Yachts & Cruises', Icon: YachtIcon, serviceKey: 'yachts-cruises', colorClass: 'bg-indigo-500' },
  { label: 'Travel Insurance', Icon: InsuranceIcon, serviceKey: 'travel-insurance', colorClass: 'bg-rose-500' },
  { label: 'eSIM Cards', Icon: EsimIcon, serviceKey: 'esim-cards', colorClass: 'bg-lime-500' },
  { label: 'Flight Compensation', Icon: CompensationIcon, serviceKey: 'flight-compensation', colorClass: 'bg-fuchsia-500' },
];

const Header = () => {
  return (
    // Main blue header container
    <header className="bg-blue-600 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Section: Logo and Subtitle */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" className="text-4xl font-bold">
            <span className="text-white">Smart</span>
            <span className="text-orange-400">Trip</span>
            <span className="text-white">Deals</span>
          </Link>
          <p className="text-sm text-blue-200 mt-2 sm:mt-0">
            Best offers available, updated every 5 seconds
          </p>
        </div>

        {/* Middle Section: Search Form */}
        <div className="mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Search Hotels</h2>
          <form className="mt-4 bg-white/20 p-4 rounded-lg flex flex-col md:flex-row items-center gap-2">
            <input type="text" placeholder="Destination" className="w-full md:flex-1 p-3 rounded-md text-gray-800 placeholder-gray-500" />
            <input type="date" placeholder="Check-in" className="w-full md:w-auto p-3 rounded-md text-gray-500" />
            <input type="date" placeholder="Check-out" className="w-full md:w-auto p-3 rounded-md text-gray-500" />
            <input type="text" placeholder="Search" className="w-full md:w-auto p-3 rounded-md text-gray-800 placeholder-gray-500" />
            <button type="submit" className="w-full md:w-auto bg-blue-800 hover:bg-blue-900 text-white font-bold p-3 rounded-md">
              Search
            </button>
          </form>
        </div>

        {/* Bottom Section: Service Buttons */}
        <div className="mt-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {services.slice(0, 7).map((service) => ( // Show first 7 buttons
              <ServiceButton
                key={service.label}
                label={service.label}
                IconComponent={service.Icon}
                serviceKey={service.serviceKey}
                colorClass="bg-white/20 hover:bg-white/30" // Updated color for new design
              />
            ))}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;