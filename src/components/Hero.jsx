import React from 'react';
import ImageSlider from './ImageSlider'; // Import the new slider component

const Hero = () => {
  return (
    // The wrapper div now directly contains the ImageSlider
    // Removed the bg-white, rounded-2xl, shadow-xl, p-8 classes from this div
    // as the slider itself will handle its own styling (rounded, etc.)
    <div className="w-full h-full"> 
      <ImageSlider interval={5000} /> {/* Use your new image slider here */}
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