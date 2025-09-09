import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import ReactGA from 'react-ga4';
import { motion, useAnimationControls } from 'framer-motion'; // 2. Import useAnimationControls

const ServiceButton = ({ service }) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate(); // Hook for programmatic navigation
  const iconControls = useAnimationControls(); // 3. Create animation controls for the icon

  const trackEvent = () => {
    ReactGA.event({
      category: "Service Button Clicks",
      action: `Clicked ${service.label}`,
      label: service.type === 'direct' ? service.serviceKey : service.to,
    });
  };

  // 4. Create a new handler to manage the animation-then-navigation sequence
  const handleAnimatedClick = async (e) => {
    // For Links, prevent immediate navigation
    e.preventDefault();
    trackEvent();

    // Start the icon wobble animation and wait for it to finish
    await iconControls.start({
      rotate: [0, -15, 15, -15, 15, 0], // A quick wobble effect
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // --- After animation, proceed with the original action ---
    if (service.type === 'widget' || service.type === 'iframe') {
      navigate(service.to); // Navigate to internal page
    } else if (service.type === 'direct') {
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
    }
  };

  const buttonContent = (
    <>
      {isLoading ? (
        <>
            <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
        </>
      ) : (
        <>
          {/* 5. Wrap the Icon in a motion component linked to our controls */}
          <motion.div animate={iconControls}>
            <service.Icon className="h-8 w-8 text-white" />
          </motion.div>
          <span className="mt-2 text-sm font-semibold text-white text-center">
            {service.label}
          </span>
        </>
      )}
    </>
  );

  // We can combine the return logic since the wrapper is the same
  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.08, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {service.type === 'direct' ? (
        <button
          onClick={handleAnimatedClick}
          disabled={isLoading}
          className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {buttonContent}
        </button>
      ) : (
        <Link
          to={service.to}
          onClick={handleAnimatedClick} // 6. Use the new handler here
          className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass}`}
        >
          {buttonContent}
        </Link>
      )}
    </motion.div>
  );
};

export default ServiceButton;














// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ReactGA from 'react-ga4';
// import { motion } from 'framer-motion';

// const ServiceButton = ({ service }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const apiUrl = import.meta.env.VITE_API_URL;

//   const trackEvent = () => {
//     ReactGA.event({
//       category: "Service Button Clicks",
//       action: `Clicked ${service.label}`,
//       label: service.type === 'widget' ? service.to : service.serviceKey,
//     });
//   };

//   const handleDirectRedirect = async () => {
//     trackEvent();
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${apiUrl}/redirect/${service.serviceKey}`);
//       if (!response.ok) throw new Error('Service not found');
//       const data = await response.json();
//       window.open(data.url, '_blank', 'noopener,noreferrer');
//     } catch (error) {
//       console.error("Failed to redirect:", error);
//       alert("Sorry, we couldn't find the link for that service.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (service.type === 'widget') {
//     return (
//       <motion.div
//         className="w-full h-full" // Ensure the animation wrapper takes full space
//         whileHover={{ scale: 1.08, y: -5 }}
//         whileTap={{ scale: 0.95 }} // FIX 1: Add tap animation for mobile devices
//         transition={{ type: "spring", stiffness: 400, damping: 15 }}
//       >
//         <Link
//           to={service.to}
//           onClick={trackEvent}
//           // FIX 2: Add w-full and a fixed height (h-28) for uniform size
//           className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass}`}
//         >
//           <service.Icon className="h-8 w-8 text-white" />
//           <span className="mt-2 text-sm font-semibold text-white text-center">
//             {service.label}
//           </span>
//         </Link>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       className="w-full h-full" // Ensure the animation wrapper takes full space
//       whileHover={{ scale: 1.08, y: -5 }}
//       whileTap={{ scale: 0.95 }} // FIX 1: Add tap animation for mobile devices
//       transition={{ type: "spring", stiffness: 400, damping: 15 }}
//     >
//       <button
//         onClick={handleDirectRedirect}
//         disabled={isLoading}
//         // FIX 2: Add a fixed height (h-28) for uniform size
//         className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
//       >
//         {isLoading ? (
//           <>
//             <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w.3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
//             <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
//           </>
//         ) : (
//           <>
//             <service.Icon className="h-8 w-8 text-white" />
//             <span className="mt-2 text-sm font-semibold text-white text-center">
//               {service.label}
//             </span>
//           </>
//         )}
//       </button>
//     </motion.div>
//   );
// };

// export default ServiceButton;