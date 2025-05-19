import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href="#">
            <img src={logo} alt='Logo' />
          </a>
          {/* Button Work With Me */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50} // Sesuaikan jika posisi scroll kurang pas
            className="btn btn-sm  text-white btn-link"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
