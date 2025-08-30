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

const affiliateMarker = '661841';

// We've re-added the 'href' property with the direct affiliate links
// We've replaced the 'href' with the 'serviceKey' that matches our database
const services = [
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

const ServiceButtons = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {services.map((service) => (
            <ServiceButton
              key={service.label}
              label={service.label}
              IconComponent={service.Icon}
              colorClass={service.colorClass}
              serviceKey={service.serviceKey} // Pass the serviceKey
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceButtons;
