import React  from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;


   const handleLetsTalkClick = () => {
    navigate('/smallcontact');
  };
  let linksToShow = [];

  if (path.startsWith('/work')) {
    linksToShow = [
      { name: 'Home', path: '/' },
      { name: 'Social', path: '/follow' },
      { name: 'AboutMe', path: '/skills' },
    ];
  } else if (path.startsWith('/follow')) {
    linksToShow = [
      { name: 'Home', path: '/' },
      { name: 'Work', path: '/work' },
      { name: 'AboutMe', path: '/skills' },
    ];
  } else if (path.startsWith('/skills')) {
    linksToShow = [
      { name: 'Home', path: '/' },
      { name: 'Social', path: '/follow' },
      { name: 'Work', path: '/work' },
    ];
  }

  return (
    <div className="w-full px-4 flex justify-between items-center z-10">
      {/* Left: Logo + Links */}
      <div className="flex items-center space-x-6">
        <h1 className="font-barcode text-[36px] text-[#5ce8cb] md:pl-11 pl-1 md:ml-8 pt-3">
          *UdayVenkat*
        </h1>
        <div className="hidden sm:flex space-x-5 pt-3">
          {linksToShow.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[#aab7d7] text-sm font-medium hover:text-[#5ce8cb] transition-colors font-cyberpunk pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
              <div className="relative sm:mr-11 mr-2">
        <button
          onClick={handleLetsTalkClick}
          className="px-1.5 py-1 sm:px-2 font-cyberpunk  sm:py-1 rounded-md border-2 border-[#5ce8cb] text-[#5ce8cb] hover:text-white font-normal text-sm  hover:bg-[#5ce8cb] transition-all duration-200"
        >
          Hire Me
        </button>

        {/* Simple Dot Indicator */}
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#5ce8cb] animate-ping opacity-60"></span>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#5ce8cb]"></span>
      </div>



    </div>
  );
};

export default Navbar;
