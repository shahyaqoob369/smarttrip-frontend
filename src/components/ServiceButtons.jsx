import React from 'react';
import ServiceButton from './ServiceButton';
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

const affiliateMarker = 'YOUR_AFFILIATE_ID'; // <-- REPLACE THIS

// We've re-added the 'href' property with the direct affiliate links
const services = [
    { label: 'Flights', Icon: FlightIcon, href: `https://www.kiwi.com/?marker=${affiliateMarker}`, colorClass: 'bg-orange-500' },
    { label: 'Car Rentals', Icon: CarIcon, href: `https://www.discovercars.com/?marker=${affiliateMarker}`, colorClass: 'bg-green-500' },
    { label: 'Hotels', Icon: HotelIcon, href: `https://www.booking.com/?marker=${affiliateMarker}`, colorClass: 'bg-blue-800' },
    { label: 'Hostels', Icon: HostelIcon, href: `https://www.hostelworld.com/?marker=${affiliateMarker}`, colorClass: 'bg-violet-500' },
    { label: 'Vacation Rentals', Icon: VacationIcon, href: `https://www.vrbo.com/?marker=${affiliateMarker}`, colorClass: 'bg-sky-500' },
    { label: 'Airport Transfers', Icon: TransferIcon, href: `https://www.welcomepickups.com/?marker=${affiliateMarker}`, colorClass: 'bg-teal-500' },
    { label: 'Trains & Buses', Icon: TrainIcon, href: `https://www.omio.com/?marker=${affiliateMarker}`, colorClass: 'bg-red-500' },
    { label: 'Tours & Activities', Icon: ToursIcon, href: `https://www.viator.com/?marker=${affiliateMarker}`, colorClass: 'bg-yellow-500' },
    { label: 'Yachts & Cruises', Icon: YachtIcon, href: `https://searadar.com/?marker=${affiliateMarker}`, colorClass: 'bg-indigo-500' },
    { label: 'Travel Insurance', Icon: InsuranceIcon, href: `https://www.ekta.insure/?marker=${affiliateMarker}`, colorClass: 'bg-rose-500' },
    { label: 'eSIM Cards', Icon: EsimIcon, href: `https://yesim.app/?marker=${affiliateMarker}`, colorClass: 'bg-lime-500' },
    { label: 'Flight Compensation', Icon: CompensationIcon, href: `https://www.airhelp.com/?marker=${affiliateMarker}`, colorClass: 'bg-fuchsia-500' },
];

const ServiceButtons = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- THIS IS THE NEW UNIFIED AND RESPONSIVE GRID --- */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {services.map((service) => (
            <ServiceButton
              key={service.label}
              label={service.label}
              IconComponent={service.Icon}
              href={service.href}
              colorClass={service.colorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceButtons;
