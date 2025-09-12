import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { motion, useAnimationControls } from 'framer-motion';
import { useVideoPlayer } from '../context/VideoPlayerContext';

const ServiceButton = ({ service }) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const iconControls = useAnimationControls();
  const { playVideo } = useVideoPlayer();

  const trackEvent = () => {
    ReactGA.event({
      category: "Service Button Clicks",
      action: `Clicked ${service.label}`,
      label: service.type === 'direct' ? service.serviceKey : service.to,
    });
  };

  const runAnimation = async () => {
    // Reset icon to its original state before each animation
    iconControls.set({ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateY: 0 });
    trackEvent();
    let animationPromise;
    switch (service.animationType) {
        case 'fly-away':
            animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
            break;
        case 'fly-away-diagonal':
            animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
            break;
        case 'swim-across':
            animationPromise = iconControls.start({ x: [-10, 10, -10, 10, 150], y: [0, 5, 0, -5, 0], opacity: [1, 1, 1, 1, 0], transition: { duration: 1.2, ease: 'easeInOut' } });
            break;
        case 'come-forward':
            animationPromise = iconControls.start({ scale: [1, 1.5, 1, 0], opacity: [1, 1, 1, 0], transition: { duration: 1.2, ease: 'easeInOut' } });
            break;
        case 'on-water':
            animationPromise = iconControls.start({ rotate: [0, -2, 2, -2, 0], y: [0, 2, 0, -2, 0], opacity: 0, transition: { duration: 1.0, ease: 'easeInOut' } });
            break;
        case 'shake-and-shrink':
            animationPromise = iconControls.start({ x: [0, -5, 5, -5, 0], scale: 0, opacity: 0, transition: { duration: 0.7 } });
            break;
        case 'coin-flip':
            animationPromise = iconControls.start({ rotateY: 360, opacity: 0, transition: { duration: 0.7, ease: 'easeIn' } });
            break;
        case 'bounce':
            animationPromise = iconControls.start({ y: [0, -15, 0, -10, 0], opacity: 0, transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] } });
            break;
        case 'spin':
            animationPromise = iconControls.start({ rotate: 360, scale: 0, opacity: 0, transition: { duration: 0.7, ease: 'easeIn' } });
            break;
        default:
            animationPromise = iconControls.start({ opacity: 0, transition: { duration: 0.5 } });
    }
    await animationPromise;
  };
  
  const handleDirectRedirect = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/redirect/${service.serviceKey}`);
      if (!response.ok) throw new Error('Service not found');
      const data = await response.json();
      window.open(data.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Failed to redirect:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleAnimatedClick = async (e) => {
    e.preventDefault();
    await runAnimation();

    const finalAction = () => {
      if (service.type === 'widget') {
        navigate(service.to);
      } else { // Handles 'direct' type
        handleDirectRedirect();
      }
    };

    playVideo(service.videoSrc, finalAction);
  };

  const buttonContent = (
      <>
        <motion.div animate={iconControls}>
            <service.Icon className="h-8 w-8 text-white" />
        </motion.div>
        <span className="mt-2 text-sm font-semibold text-white text-center">
            {service.label}
        </span>
      </>
  );

  return (
    <motion.div className="w-full h-full" whileHover={{ scale: 1.08, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
      <div
        role="button"
        tabIndex="0"
        onClick={!isLoading ? handleAnimatedClick : undefined}
        onKeyPress={(e) => { if (!isLoading && e.key === 'Enter') handleAnimatedClick(e); }}
        className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 overflow-hidden cursor-pointer ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
            <>
              {/* FIX: Corrected the viewBox attribute from "0_0_24_24" to "0 0 24 24" */}
              <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
            </>
        ) : buttonContent}
      </div>
    </motion.div>
  );
};

export default ServiceButton;










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

// // This is our new, definitive list of services with their types.
// const services = [
//   // --- Services WITH an active widget ---
//   { type: 'widget', label: 'Flights', Icon: FlightIcon, to: '/flights', colorClass: 'bg-orange-500' },
//   { type: 'widget', label: 'Car Rentals', Icon: CarIcon, to: '/cars', colorClass: 'bg-green-500' },
//   { type: 'widget', label: 'Hotels', Icon: HotelIcon, to: '/hotels', colorClass: 'bg-blue-800' },
//   { type: 'widget', label: 'Airport Transfers', Icon: TransferIcon, to: '/transfers', colorClass: 'bg-teal-500' },
//   { type: 'widget', label: 'eSIM Cards', Icon: EsimIcon, to: '/esim', colorClass: 'bg-lime-500' },
//   { type: 'widget', label: 'Flight Compensation', Icon: CompensationIcon, to: '/compensation', colorClass: 'bg-fuchsia-500' },

//   // --- Services WITHOUT a widget (will be direct links) ---
//   { type: 'direct', label: 'Hostels', Icon: HostelIcon, serviceKey: 'hostels', colorClass: 'bg-violet-500' },
//   { type: 'direct', label: 'Vacation Rentals', Icon: VacationIcon, serviceKey: 'vacation-rentals', colorClass: 'bg-sky-500' },
//   { type: 'direct', label: 'Trains & Buses', Icon: TrainIcon, serviceKey: 'trains-buses', colorClass: 'bg-red-500' },
//   { type: 'direct', label: 'Tours & Activities', Icon: ToursIcon, serviceKey: 'tours-activities', colorClass: 'bg-yellow-500' },
//   { type: 'direct', label: 'Yachts & Cruises', Icon: YachtIcon, serviceKey: 'yachts-cruises', colorClass: 'bg-indigo-500' },
//   { type: 'direct', label: 'Travel Insurance', Icon: InsuranceIcon, serviceKey: 'travel-insurance', colorClass: 'bg-rose-500' },
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
