import React from 'react';

import logo from '../assets/x.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links=<>

       <li> <NavLink to={"/"} className='text-slate-700 md:text-white '>HOME</NavLink></li>
    
     <li> <NavLink to={"./services"}  className='text-slate-700 md:text-white '>SERVICES</NavLink></li>
       <li>  <NavLink to={"./blog"}  className='text-slate-700 md:text-white '>BLOG</NavLink></li>
    
    <li>   <NavLink to={"./pages"}  className='text-slate-700 md:text-white '>PAGES</NavLink></li>
         <li> <NavLink to={"./contact"}  className='text-slate-700 md:text-white '>CONTACT</NavLink></li>
          


    </>
  return (

 <div className="navbar bg-base-100 bg-slate-700">
  <div className="navbar-start">
  <div className='p-2 border-2 rounded-r-full font-bold'>   S H </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
   {links}
    </ul>
  </div>
  <div className="navbar-end">
   <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {links}
      </ul>
    </div>
  </div>
</div>
  );
}

export default Navbar;






// <!DOCTYPE html>
// <html lang="en" data-theme="light">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Donate Bangladesh</title>
//     <!-- Tailwind CSS -->
//     <script src="https://cdn.tailwindcss.com"></script>

//     <!-- DaisyUI -->
//     <link
//       href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css"
//       rel="stylesheet"
//       type="text/css"
//     />

//     <!-- Custom CSS -->
//     <link rel="stylesheet" href="style/style.css" />

//     <!-- Custom JS -->
//     <script src="js/index.js" defer></script>
//   </head>
//   <body>
//     <!-- Nav bar Starts Here -->
//     <header class="bg-amber-50 py-4 shadow-lg sticky top-0 z-50">
//       <div class="max-w-7xl mx-auto flex justify-between items-center">
//         <!-- Left Section -->
//         <a href="blog.html">
//           <button
//             class="bg-lime-300 text-black py-2 px-4 rounded-lg hover:bg-lime-400 transition"
//           >
//             Blog
//           </button></a
//         >

//         <!-- Middle Section-->
//         <div class="flex items-center space-x-2">
//           <img src="assets/logo.png" alt="Donate Icon" class="w-8 h-8" />
//           <!-- Replace with actual image source -->
//           <span class="text-lg font-semibold text-gray-800">
//             Donate Bangladesh
//           </span>
//         </div>

//         <!-- Right Section-->
//         <div class="flex items-center space-x-2">
//           <img src="assets/coin.png" alt="Coin Icon" class="w-6 h-6" />
//           <span id="totalBalance" class="text-lg font-semibold text-gray-800">
//             5500</span
//           >
//           <span class="text-lg font-semibold text-gray-800"> BDT</span>
//         </div>
//       </div>
//     </header>

 
//   </body>
// </html>


