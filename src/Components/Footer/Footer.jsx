import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
const Footer = () => {
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
          to="/doclist"
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
        <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10 mt-14">
   <div className='flex gap-1 items-center'>
      <img src={logo} alt="logo" className='h-9 w-9 mt-1' />
      {/* <a className="btn btn-ghost text-xl">Phudo</a> */}
      <p className='text-2xl font-bold'>DocTalk</p>
      </div>
  
  <div className="grid grid-flow-col gap-4 list-none">
  {links}
  </div>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/tofashish527" target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      </a>
      <a href='https://bd.linkedin.com/in/tofashish-nujum-58a443360' target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="https://x.com/" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a href='https://www.youtube.com/' target='_blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;