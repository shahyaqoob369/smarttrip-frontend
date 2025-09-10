import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { motion, useAnimationControls } from 'framer-motion';

const ServiceButton = ({ service }) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const iconControls = useAnimationControls();

  const trackEvent = () => {
    ReactGA.event({
      category: "Service Button Clicks",
      action: `Clicked ${service.label}`,
      label: service.type === 'direct' ? service.serviceKey : service.to,
    });
  };

  const handleAnimatedClick = async (e) => {
    e.preventDefault();
    trackEvent();

    let animationPromise;
    // This switch statement chooses the animation based on the 'animationType' prop
    switch (service.animationType) {
      case 'fly-away':
        animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
        break;
      case 'fly-away-diagonal': // For Vacation Rentals
        animationPromise = iconControls.start({ y: 50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
        break;
      case 'swim-across': // For Tours & Activities
        animationPromise = iconControls.start({
          x: [-10, 10, -10, 10, 150],
          y: [0, 5, 0, -5, 0],
          opacity: [1, 1, 1, 1, 0],
          transition: { duration: 1.2, ease: 'easeInOut' }
        });
        break;
      case 'come-forward': // For Trains & Buses
        animationPromise = iconControls.start({ scale: [1, 1.5, 1, 0], opacity: [1, 1, 1, 0], transition: { duration: 0.8, ease: 'easeInOut' } });
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
        // A simple fade as a fallback
        animationPromise = iconControls.start({ opacity: 0, transition: { duration: 0.5 } });
    }
    
    await animationPromise;

    // After animation, proceed with the action
    if (service.type === 'widget' || service.type === 'iframe') {
      navigate(service.to);
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

  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.08, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* This structure uses a generic clickable div for consistency, 
        making it accessible with keyboard and mouse for both Links and buttons.
      */}
      <div
        onClick={handleAnimatedClick}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => { if(e.key === 'Enter') handleAnimatedClick(e); }}
        className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 overflow-hidden cursor-pointer ${service.colorClass}`}
      >
        {buttonContent}
      </div>
    </motion.div>
  );
};

export default ServiceButton;








// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import ReactGA from 'react-ga4';
// import { motion, useAnimationControls } from 'framer-motion';

// const ServiceButton = ({ service }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const apiUrl = import.meta.env.VITE_API_URL;
//   const navigate = useNavigate();
//   const iconControls = useAnimationControls();

//   const trackEvent = () => {
//     ReactGA.event({
//       category: "Service Button Clicks",
//       action: `Clicked ${service.label}`,
//       label: service.type === 'direct' ? service.serviceKey : service.to,
//     });
//   };

//   const handleAnimatedClick = async (e) => {
//     e.preventDefault();
//     trackEvent();

//     // --- MODIFICATION: New Fly-Out Animation Sequence ---
//     await iconControls.start({
//       x: [0, 10, -150],     // Keyframes: Stay, move right a bit, then shoot off to the left
//       opacity: [1, 1, 0],   // Keyframes: Stay visible, then fade out as it exits
//       transition: { 
//         duration: 0.7, 
//         ease: "easeInOut",
//         times: [0, 0.2, 1] // Controls timing: 20% for the move right, 80% for the exit
//       },
//     });

//     // --- After animation, proceed with the original action ---
//     if (service.type === 'widget' || service.type === 'iframe') {
//       navigate(service.to);
//     } else if (service.type === 'direct') {
//       setIsLoading(true);
//       try {
//         const response = await fetch(`${apiUrl}/redirect/${service.serviceKey}`);
//         if (!response.ok) throw new Error('Service not found');
//         const data = await response.json();
//         window.open(data.url, '_blank', 'noopener,noreferrer');
//       } catch (error) {
//         console.error("Failed to redirect:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const buttonContent = (
//     <>
//       {isLoading ? (
//         <>
//             <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
//             <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
//         </>
//       ) : (
//         <>
//           <motion.div animate={iconControls}>
//             <service.Icon className="h-8 w-8 text-white" />
//           </motion.div>
//           <span className="mt-2 text-sm font-semibold text-white text-center">
//             {service.label}
//           </span>
//         </>
//       )}
//     </>
//   );

//   return (
//     <motion.div
//       className="w-full h-full"
//       whileHover={{ scale: 1.08, y: -5 }}
//       whileTap={{ scale: 0.95 }}
//       transition={{ type: "spring", stiffness: 400, damping: 15 }}
//     >
//       {service.type === 'direct' ? (
//         <button
//           onClick={handleAnimatedClick}
//           disabled={isLoading}
//           // --- MODIFICATION: Added overflow-hidden to clip the icon ---
//           className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 overflow-hidden ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
//         >
//           {buttonContent}
//         </button>
//       ) : (
//         <Link
//           to={service.to}
//           onClick={handleAnimatedClick}
//           // --- MODIFICATION: Added overflow-hidden to clip the icon ---
//           className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 overflow-hidden ${service.colorClass}`}
//         >
//           {buttonContent}
//         </Link>
//       )}
//     </motion.div>
//   );
// };

// export default ServiceButton;















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