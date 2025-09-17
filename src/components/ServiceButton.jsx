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
      label: service.type === 'widget' ? service.to : service.serviceKey,
    });
  };

  const runAnimation = async () => {
    iconControls.set({ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateY: 0 });
    trackEvent();
    let animationPromise;
    // ... (switch case for animations is correct)
      switch (service.animationType) {
        case 'fly-away':
            animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
            break;
        // 1. MODIFICATION: Vacation Rentals now flies UP
        case 'fly-away-diagonal':
            animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
            break;
        case 'swim-across':
            animationPromise = iconControls.start({ x: [-10, 10, -10, 10, 150], y: [0, 5, 0, -5, 0], opacity: [1, 1, 1, 1, 0], transition: { duration: 1.2, ease: 'easeInOut' } });
            break;
        // 2. MODIFICATION: Trains & Buses animation is now longer
        case 'come-forward':
            animationPromise = iconControls.start({ scale: [1, 1.5, 1, 0], opacity: [1, 1, 1, 0], transition: { duration: 1.2, ease: 'easeInOut' } });
            break;
        // 3. MODIFICATION: New 'on-water' animation for Yachts & Cruises
        case 'on-water':
            animationPromise = iconControls.start({
                rotate: [0, -2, 2, -2, 0],
                y: [0, 2, 0, -2, 0],
                opacity: 0,
                transition: { duration: 1.0, ease: 'easeInOut' }
            });
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
    navigate(service.to);  // now runs only after stopVideo()
  } else {
    handleDirectRedirect();
  }
};

    playVideo(service.videoSrc, finalAction);
  };

  const buttonContent = (
    <>
      <motion.div animate={iconControls}>
        {/* MODIFICATION: Increased icon size */}
        <service.Icon className="h-24 w-24 text-white" />
      </motion.div>
      {/* MODIFICATION: Added uppercase and adjusted margin/text size */}
      <span className="mt-3 text-base font-bold text-white text-center uppercase tracking-wider">
        {service.label}
      </span>
    </>
  );

  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.05, y: -4 }} // Slightly adjusted hover for the new look
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div
        role="button"
        tabIndex="0"
        onClick={!isLoading ? handleAnimatedClick : undefined}
        onKeyPress={(e) => { if (!isLoading && e.key === 'Enter') handleAnimatedClick(e); }}
        // MODIFICATION: Added ring for inset border and adjusted padding/height
        className={`group w-full h-32 flex flex-col items-center justify-center p-3 rounded-2xl shadow-lg transition-all duration-200 overflow-hidden cursor-pointer ring-2 ring-inset ring-white/75 ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
            <>
              <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
            </>
        ) : buttonContent}
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
//       label: service.type === 'widget' ? service.to : service.serviceKey,
//     });
//   };

//   const runAnimation = async () => {
//     trackEvent();
//     let animationPromise;
//     switch (service.animationType) {
//         case 'fly-away':
//             animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
//             break;
//         // 1. MODIFICATION: Vacation Rentals now flies UP
//         case 'fly-away-diagonal':
//             animationPromise = iconControls.start({ y: -50, x: 50, rotate: -15, opacity: 0, transition: { duration: 0.6, ease: 'easeIn' } });
//             break;
//         case 'swim-across':
//             animationPromise = iconControls.start({ x: [-10, 10, -10, 10, 150], y: [0, 5, 0, -5, 0], opacity: [1, 1, 1, 1, 0], transition: { duration: 1.2, ease: 'easeInOut' } });
//             break;
//         // 2. MODIFICATION: Trains & Buses animation is now longer
//         case 'come-forward':
//             animationPromise = iconControls.start({ scale: [1, 1.5, 1, 0], opacity: [1, 1, 1, 0], transition: { duration: 1.2, ease: 'easeInOut' } });
//             break;
//         // 3. MODIFICATION: New 'on-water' animation for Yachts & Cruises
//         case 'on-water':
//             animationPromise = iconControls.start({
//                 rotate: [0, -2, 2, -2, 0],
//                 y: [0, 2, 0, -2, 0],
//                 opacity: 0,
//                 transition: { duration: 1.0, ease: 'easeInOut' }
//             });
//             break;
//         case 'shake-and-shrink':
//             animationPromise = iconControls.start({ x: [0, -5, 5, -5, 0], scale: 0, opacity: 0, transition: { duration: 0.7 } });
//             break;
//         case 'coin-flip':
//             animationPromise = iconControls.start({ rotateY: 360, opacity: 0, transition: { duration: 0.7, ease: 'easeIn' } });
//             break;
//         case 'bounce':
//             animationPromise = iconControls.start({ y: [0, -15, 0, -10, 0], opacity: 0, transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] } });
//             break;
//         case 'spin':
//             animationPromise = iconControls.start({ rotate: 360, scale: 0, opacity: 0, transition: { duration: 0.7, ease: 'easeIn' } });
//             break;
//         default:
//             animationPromise = iconControls.start({ opacity: 0, transition: { duration: 0.5 } });
//     }
//     await animationPromise;
//   };
  
//   const handleDirectRedirect = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${apiUrl}/redirect/${service.serviceKey}`);
//       if (!response.ok) throw new Error('Service not found');
//       const data = await response.json();
//       window.open(data.url, '_blank', 'noopener,noreferrer');
//     } catch (error) {
//       console.error("Failed to redirect:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const buttonContent = (
//       <>
//         <motion.div animate={iconControls}>
//             <service.Icon className="h-8 w-8 text-white" />
//         </motion.div>
//         <span className="mt-2 text-sm font-semibold text-white text-center">
//             {service.label}
//         </span>
//       </>
//   );

//   // CORRECTED LOGIC: Use 'if' to separate widget links from direct buttons
//   if (service.type === 'widget') {
//     return (
//       <motion.div className="w-full h-full" whileHover={{ scale: 1.08, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
//         <Link
//           to={service.to}
//           onClick={async (e) => {
//             e.preventDefault();
//             await runAnimation();
//             navigate(service.to);
//           }}
//           className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 overflow-hidden ${service.colorClass}`}
//         >
//           {buttonContent}
//         </Link>
//       </motion.div>
//     );
//   }

//   // This is the return for 'direct' type buttons
//   return (
//     <motion.div className="w-full h-full" whileHover={{ scale: 1.08, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
//       <button
//         onClick={async () => {
//           await runAnimation();
//           handleDirectRedirect();
//         }}
//         disabled={isLoading}
//         className={`group w-full h-28 flex flex-col items-center justify-center p-4 rounded-lg shadow-md transition-all duration-200 overflow-hidden ${service.colorClass} ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
//       >
//         {isLoading ? (
//             <>
//               <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
//               <span className="mt-2 text-xs font-semibold text-white text-center">Loading...</span>
//             </>
//         ) : buttonContent}
//       </button>
//     </motion.div>
//   );
// };

// export default ServiceButton;