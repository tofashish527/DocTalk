import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
const Navbar = () => {
    const links = (
      <>
        <li className="m-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-800 font-semibold underline'
                : 'hover:underline'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/my-bookings"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-800 font-semibold underline'
                : 'hover:underline'
            }
          >
            My-Bookings
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-800 font-semibold underline'
                : 'hover:underline'
            }
          >
            Blogs
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-800 font-semibold underline'
                : 'hover:underline'
            }
          >
            Contacts
          </NavLink>
        </li>
      </>
    );
    
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex gap-1 items-center'>
    <img src={logo} alt="" className='h-9 w-9 mt-1' />
    {/* <a className="btn btn-ghost text-xl">Phudo</a> */}
    <p className='text-2xl font-bold'>Phudo</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-4xl text-white bg-blue-600">Emergency</a>
  </div>
</div>
    );
};

export default Navbar;