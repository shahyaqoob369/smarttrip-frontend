import React from 'react';
import ServiceButton from './ServiceButton';

// Icon Imports
import HotelIcon from '../assets/icons/hotel_new.svg?react';
import FlightIcon from '../assets/icons/plane_new.svg?react';
import TrainIcon from '../assets/icons/train.svg?react';
import CarIcon from '../assets/icons/car_new.svg?react';
import TransferIcon from '../assets/icons/transfer.svg?react';
import ToursIcon from '../assets/icons/tour_1.svg?react';
import VacationIcon from '../assets/icons/vacation_new.svg?react';
import HostelIcon from '../assets/icons/hostel_new.svg?react';
import YachtIcon from '../assets/icons/yacht.svg?react';
import InsuranceIcon from '../assets/icons/insurance.svg?react';
import EsimIcon from '../assets/icons/esim_new.svg?react';
import CompensationIcon from '../assets/icons/compensation_new.svg?react';

import flightVideo from '../assets/videos/flight.mp4';
import carVideo from '../assets/videos/car.mp4';
import hotelVideo from '../assets/videos/hotel.mp4';
import transferVideo from '../assets/videos/transfer.mp4';
import esimVideo from '../assets/videos/esim.mp4';
import compensationVideo from '../assets/videos/compensation.mp4';
import hostelVideo from '../assets/videos/hostel.mp4';
import vacationVideo from '../assets/videos/vacation.mp4';
import trainVideo from '../assets/videos/train.mp4';
import tourVideo from '../assets/videos/tour.mp4';
import yachtVideo from '../assets/videos/yacht.mp4';
import insuranceVideo from '../assets/videos/insurance.mp4';

// The definitive list of services with their assigned animation types.
const services = [
  { type: 'widget', label: 'Flights', Icon: FlightIcon, to: '/flights', colorClass: 'bg-orange-500', animationType: 'fly-away', videoSrc: flightVideo },
  { type: 'widget', label: 'Car Rentals', Icon: CarIcon, to: '/cars', colorClass: 'bg-green-500', animationType: 'shake-and-shrink', videoSrc: carVideo },
  { type: 'widget', label: 'Hotels', Icon: HotelIcon, to: '/hotels', colorClass: 'bg-blue-800', animationType: 'spin', videoSrc: hotelVideo },
  { type: 'widget', label: 'Airport Transfers', Icon: TransferIcon, to: '/transfers', colorClass: 'bg-teal-500', animationType: 'fly-away', videoSrc: transferVideo },
  { type: 'widget', label: 'eSIM Cards', Icon: EsimIcon, to: '/esim', colorClass: 'bg-lime-500', animationType: 'coin-flip', videoSrc: esimVideo },
  { type: 'widget', label: 'Flight Compensation', Icon: CompensationIcon, to: '/compensation', colorClass: 'bg-fuchsia-500', animationType: 'bounce', videoSrc: compensationVideo },
  
  { type: 'direct', label: 'Hostels', Icon: HostelIcon, serviceKey: 'hostels', colorClass: 'bg-violet-500', animationType: 'bounce', videoSrc: hostelVideo },
  { type: 'direct', label: 'Vacation Rentals', Icon: VacationIcon, serviceKey: 'vacation-rentals', colorClass: 'bg-sky-500', animationType: 'fly-away-diagonal', videoSrc: vacationVideo },
  { type: 'direct', label: 'Trains & Buses', Icon: TrainIcon, serviceKey: 'trains-buses', colorClass: 'bg-red-500', animationType: 'come-forward', videoSrc: trainVideo },
  { type: 'direct', label: 'Tours & Activities', Icon: ToursIcon, serviceKey: 'tours-activities', colorClass: 'bg-yellow-500', animationType: 'swim-across', videoSrc: tourVideo },
  { type: 'direct', label: 'Yachts & Cruises', Icon: YachtIcon, serviceKey: 'yachts-cruises', colorClass: 'bg-indigo-500', animationType: 'on-water', videoSrc: yachtVideo },
  { type: 'direct', label: 'Travel Insurance', Icon: InsuranceIcon, serviceKey: 'travel-insurance', colorClass: 'bg-rose-500', animationType: 'spin', videoSrc: insuranceVideo },
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



// import React from 'react';
// import ServiceButton from './ServiceButton';

// // Icon Imports
// import HotelIcon from '../assets/icons/hotel.svg?react';
// import FlightIcon from '../assets/icons/flight.svg?react';
// import TrainIcon from '../assets/icons/train.svg?react';
// import CarIcon from '../assets/icons/car.svg?react';
// import TransferIcon from '../assets/icons/transfer.svg?react';
// import ToursIcon from '../assets/icons/tours.svg?react';
// import VacationIcon from '../assets/icons/vacation.svg?react';
// import HostelIcon from '../assets/icons/hostel.svg?react';
// import YachtIcon from '../assets/icons/yacht.svg?react';
// import InsuranceIcon from '../assets/icons/insurance.svg?react';
// import EsimIcon from '../assets/icons/esim.svg?react';
// import CompensationIcon from '../assets/icons/compensation.svg?react';

// // The definitive list of services with their assigned animation types.
// const services = [
//   { type: 'widget', label: 'Flights', Icon: FlightIcon, to: '/flights', colorClass: 'bg-orange-500', animationType: 'fly-away' },
//   { type: 'widget', label: 'Car Rentals', Icon: CarIcon, to: '/cars', colorClass: 'bg-green-500', animationType: 'shake-and-shrink' },
//   { type: 'widget', label: 'Hotels', Icon: HotelIcon, to: '/hotels', colorClass: 'bg-blue-800', animationType: 'spin' },
//   { type: 'widget', label: 'Airport Transfers', Icon: TransferIcon, to: '/transfers', colorClass: 'bg-teal-500', animationType: 'fly-away' },
//   { type: 'widget', label: 'eSIM Cards', Icon: EsimIcon, to: '/esim', colorClass: 'bg-lime-500', animationType: 'coin-flip' },
//   { type: 'widget', label: 'Flight Compensation', Icon: CompensationIcon, to: '/compensation', colorClass: 'bg-fuchsia-500', animationType: 'bounce' },
  
//   // NOTE: These are now all 'direct' types as per your project's data structure.
//   { type: 'direct', label: 'Hostels', Icon: HostelIcon, serviceKey: 'hostels', colorClass: 'bg-violet-500', animationType: 'bounce' },
//   { type: 'direct', label: 'Vacation Rentals', Icon: VacationIcon, serviceKey: 'vacation-rentals', colorClass: 'bg-sky-500', animationType: 'fly-away-diagonal' },
//   { type: 'direct', label: 'Trains & Buses', Icon: TrainIcon, serviceKey: 'trains-buses', colorClass: 'bg-red-500', animationType: 'come-forward' },
//   { type: 'direct', label: 'Tours & Activities', Icon: ToursIcon, serviceKey: 'tours-activities', colorClass: 'bg-yellow-500', animationType: 'swim-across' },
//   { type: 'direct', label: 'Yachts & Cruises', Icon: YachtIcon, serviceKey: 'yachts-cruises', colorClass: 'bg-indigo-500', animationType: 'on-water' },
//   { type: 'direct', label: 'Travel Insurance', Icon: InsuranceIcon, serviceKey: 'travel-insurance', colorClass: 'bg-rose-500', animationType: 'spin' },
// ];

// const ServiceButtons = () => {
//   return (
//     <div className="py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
//           {services.map((service) => (
//             <ServiceButton key={service.label} service={service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceButtons;