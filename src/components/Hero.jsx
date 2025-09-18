iimport React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your slider images
import slider1 from "../assets/img/slider_img_1.svg";
import slider2 from "../assets/img/slider_img_2.svg";
import slider3 from "../assets/img/slider_img_3.svg";
import slider4 from "../assets/img/slider_img_4.svg";

const images = [slider1, slider2, slider3, slider4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-xl">
      {/* Image Transition */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Hero Slide"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
        />
      </AnimatePresence>

      {/* Slider Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;






// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
//       {/* Top part: Logo and subtitle */}
//       <div className="flex flex-col sm:flex-row items-center sm:justify-between">
//         <Link to="/" className="text-5xl lg:text-6xl font-bold">
//           <span className="text-blue-600">Smart</span>
//           <span className="text-orange-500">Trip</span>
//           <span className="text-blue-600">Deals</span>
//         </Link>
//         <p className="hidden sm:block text-base text-gray-500 mt-2 sm:mt-0">
//           Best offers available, updated every 5 seconds
//         </p>
//       </div>
//       <p className="block sm:hidden text-base text-gray-500 text-center mt-2">
//         Best offers available, updated every 5 seconds
//       </p>

//       {/* Search form section */}
//       <div className="mt-10">
//         <h2 className="text-3xl font-bold text-blue-700">Search Hotels</h2>
//         <form className="mt-6 flex flex-col gap-4">
//           {/* Main input row */}
//           <div className="flex flex-col md:flex-row gap-4">
            
//             {/* Destination Input with Icon */}
//             <div className="relative flex-grow">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
//                 </svg>
//               </div>
//               <input type="text" placeholder="Destination" className="w-full pl-12 p-4 border rounded-lg text-lg" />
//             </div>

//             {/* Check-in Input with Icon */}
//             <div className="relative flex-grow">
//                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
//                 </svg>
//               </div>
//               <input type="text" placeholder="Check-in" className="w-full pl-12 p-4 border rounded-lg text-lg text-gray-500" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'}/>
//             </div>

//             {/* Check-out Input with Icon */}
//             <div className="relative flex-grow">
//                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
//                 </svg>
//               </div>
//               <input type="text" placeholder="Check-out" className="w-full pl-12 p-4 border rounded-lg text-lg text-gray-500" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
//             </div>

//             {/* The extra search input is now removed */}
//           </div>
          
//           {/* Search Button Row */}
//           <div className="flex justify-end">
//             <button type="submit" className="bg-blue-800 text-white font-bold py-4 px-10 rounded-lg hover:bg-blue-900 text-lg">
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Hero;