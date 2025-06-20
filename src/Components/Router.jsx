import React, { useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Router = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={ ` flex flex-col justify-between gap-10 -full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto transition duration-500 ${
        darkMode ? 'bg-[#2a2c39] text-white' : 'bg-white text-black        '
      }`}
    >
      
      {/* Content */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Router;
