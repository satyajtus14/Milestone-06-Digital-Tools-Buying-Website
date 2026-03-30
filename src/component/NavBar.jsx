import React from 'react';
import { FiShoppingCart } from "react-icons/fi";


const NavBar = ({carts}) => {
    return (
        <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="flex items-center font-bold text-3xl bg-gradient-to-t from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent ">
             DigiTools
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-8 px-1 text-md">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
         <div className='relative inline-flex'>
          <button className='btn btn-ghost btn-circle'>
          <a className='w-7 h-7 '> <FiShoppingCart size={24} /></a>
          </button>
         <span className='badge badge-error badge-sm absolute 
           -top-1.5 -right-1.5 border-2 border-base-100 text-white'>
         {carts.length}
          </span> 
        
         </div>
          
          <a> Login</a>
          <a className="btn bg-gradient-to-t from-[#4f39f6] to-[#9514fa] rounded-full text-white">Get Started</a>
        </div>
      </div>
    );
};

export default NavBar;