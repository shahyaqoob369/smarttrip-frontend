import {React} from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { motion } from 'framer-motion';

// This is our new, definitive list of services with their types.
const services = [
  // --- Services WITH an active widget ---
  { type: 'widget', label: 'Flights', Icon: FlightIcon, to: '/flights', colorClass: 'bg-orange-500' },
  { type: 'widget', label: 'Car Rentals', Icon: CarIcon, to: '/cars', colorClass: 'bg-green-500' },
  { type: 'widget', label: 'Hotels', Icon: HotelIcon, to: '/hotels', colorClass: 'bg-blue-800' },
  { type: 'widget', label: 'Airport Transfers', Icon: TransferIcon, to: '/transfers', colorClass: 'bg-teal-500' },
  { type: 'widget', label: 'eSIM Cards', Icon: EsimIcon, to: '/esim', colorClass: 'bg-lime-500' },
  { type: 'widget', label: 'Flight Compensation', Icon: CompensationIcon, to: '/compensation', colorClass: 'bg-fuchsia-500' },

  // --- Services WITHOUT a widget (will be direct links) ---
  { type: 'direct', label: 'Hostels', Icon: HostelIcon, serviceKey: 'hostels', colorClass: 'bg-violet-500' },
  { type: 'direct', label: 'Vacation Rentals', Icon: VacationIcon, serviceKey: 'vacation-rentals', colorClass: 'bg-sky-500' },
  { type: 'direct', label: 'Trains & Buses', Icon: TrainIcon, serviceKey: 'trains-buses', colorClass: 'bg-red-500' },
  { type: 'direct', label: 'Tours & Activities', Icon: ToursIcon, serviceKey: 'tours-activities', colorClass: 'bg-yellow-500' },
  { type: 'direct', label: 'Yachts & Cruises', Icon: YachtIcon, serviceKey: 'yachts-cruises', colorClass: 'bg-indigo-500' },
  { type: 'direct', label: 'Travel Insurance', Icon: InsuranceIcon, serviceKey: 'travel-insurance', colorClass: 'bg-rose-500' },
];

const ServiceButton = ({ service }) => {
  // This is a placeholder for the loading state if you want to add it back.
  const [isLoading, setIsLoading] = React.useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const trackEvent = () => {
    ReactGA.event({
      category: "Service Button Clicks",
      action: `Clicked ${service.label}`,
      label: service.type === 'widget' || service.type === 'iframe' ? service.to : service.serviceKey,
    });
  };

  const handleDirectRedirect = async () => {
    trackEvent();
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/redirect/${service.serviceKey}`);
      if (!response.ok) throw new Error('Service not found');
      const data = await response.json();
      window.open(data.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Failed to redirect:", error);
      alert("Sorry, we couldn't find the link for that service.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- FIX: This condition now checks for 'iframe' as well ---
  // This ensures both widget and iframe buttons navigate internally.
  if (service.type === 'widget' || service.type === 'iframe') {
    return (
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.08, y: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Link
          to={service.to}
          onClick={trackEvent}
          className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass}`}
        >
          <service.Icon className="h-8 w-8 text-white" />
          <span className="mt-2 text-sm font-semibold text-white text-center">
            {service.label}
          </span>
        </Link>
      </motion.div>
    );
  }

  // Fallback for 'direct' links, which will open in a new tab
  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.08, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <button
        onClick={handleDirectRedirect}
        disabled={isLoading}
        className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {/* Loading and default content */}
        {isLoading ? (
          <>
            <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
          </>
        ) : (
          <>
            <service.Icon className="h-8 w-8 text-white" />
            <span className="mt-2 text-sm font-semibold text-white text-center">
              {service.label}
            </span>
          </>
        )}
      </button>
    </motion.div>
  );
};

export default ServiceButton;