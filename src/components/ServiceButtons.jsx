import React from 'react';
import ServiceButton from './ServiceButton';

// Icon Imports
import HotelIcon from '../assets/icons/hotel.svg?react';
import FlightIcon from '../assets/icons/flight.svg?react';
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

const services = [
  // --- Top 6 Buttons (No Change) ---
  { type: 'widget', label: 'Flights', Icon: FlightIcon, to: '/flights', colorClass: 'bg-orange-500' },
  { type: 'widget', label: 'Car Rentals', Icon: CarIcon, to: '/cars', colorClass: 'bg-green-500' },
  { type: 'widget', label: 'Hotels', Icon: HotelIcon, to: '/hotels', colorClass: 'bg-blue-800' },
  { type: 'widget', label: 'Airport Transfers', Icon: TransferIcon, to: '/transfers', colorClass: 'bg-teal-500' },
  { type: 'widget', label: 'eSIM Cards', Icon: EsimIcon, to: '/esim', colorClass: 'bg-lime-500' },
  { type: 'widget', label: 'Flight Compensation', Icon: CompensationIcon, to: '/compensation', colorClass: 'bg-fuchsia-500' },

  // --- MODIFICATION: Bottom 6 Buttons now use 'iframe' type ---
  // These will now open inside our app's layout.
  { type: 'iframe', label: 'Hostels', Icon: HostelIcon, to: '/partner/hostels', serviceKey: 'hostels', colorClass: 'bg-violet-500' },
  { type: 'iframe', label: 'Vacation Rentals', Icon: VacationIcon, to: '/partner/vacation-rentals', serviceKey: 'vacation-rentals', colorClass: 'bg-sky-500' },
  { type: 'iframe', label: 'Trains & Buses', Icon: TrainIcon, to: '/partner/trains-buses', serviceKey: 'trains-buses', colorClass: 'bg-red-500' },
  { type: 'iframe', label: 'Tours & Activities', Icon: ToursIcon, to: '/partner/tours-activities', serviceKey: 'tours-activities', colorClass: 'bg-yellow-500' },
  { type: 'iframe', label: 'Yachts & Cruises', Icon: YachtIcon, to: '/partner/yachts-cruises', serviceKey: 'yachts-cruises', colorClass: 'bg-indigo-500' },
  
  // --- FALLBACK EXAMPLE: This button will still open in a new tab ---
  { type: 'direct', label: 'Travel Insurance', Icon: InsuranceIcon, serviceKey: 'travel-insurance', colorClass: 'bg-rose-500' },
];

const ServiceButtons = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {services.map((service) => (
            <ServiceButton key={service.label} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceButtons;