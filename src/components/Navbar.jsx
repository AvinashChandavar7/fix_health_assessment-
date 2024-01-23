import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from "react-icons/io5";

const navbarLinks = [
  { id: 'home', label: 'Home' },
  { id: 'book_form', label: 'Booking Form' },
  { id: 'testimonials', label: 'Testimonials' },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <nav className="flex justify-between items-center bg-slate-900 p-4 sticky w-full top-0 z-50 ">
      {/* Logo */}
      <div className="flex justify-start items-center px-4 ">
        <img src='/assets/logo.svg' alt="logo" className="w-28" />
      </div>

      {/* Links */}
      <ul className=" justify-center items-center space-x-4 hidden lg:flex">
        {navbarLinks.map(({ id, label }) => (
          <li key={id} className="p-2 hover:text-grey transform hover:scale-120">
            <a href={`#${id}`} title={label}>
              {label}
            </a>
          </li>
        ))}
      </ul>


      {/* Desktop version end */}

      {/* Mobile version */}
      <div className="flex items-center space-x-4 lg:hidden ">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={toggleMenuHandler} />

        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform">
            <IoCloseSharp
              fontSize={27}
              className="absolute top-4 right-4 text-golden cursor-pointer"
              onClick={toggleMenuHandler}
            />
            <ul className="flex flex-col items-center space-y-4">
              {navbarLinks.map(({ id, label }) => (
                <li key={id} className="p-2 hover:text-white transform hover:scale-120">
                  <a href={`#${id}`} title={label}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* End */}
    </nav>
  );
};

export default Navbar;
