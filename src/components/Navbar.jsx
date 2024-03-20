import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart icon

function Navbar({ isDashboard }) { // Menggunakan prop isDashboard untuk menentukan apakah ini halaman dashboard
  return (
    <nav className="flex items-center justify-between bg-white p-4 border-b border-gray-300">
      <div className="text-black text-2xl font-bold ml-14 mb-1">Treasure Fans Mart</div>
      <ul className="flex space-x-8">
        <li className="text-black mt-1"><Link to="/">Home</Link></li>
        <li className="text-black mt-1"><Link to="/contact">Contact</Link></li>
        <li className="text-black mt-1"><Link to="/about">About</Link></li>
        <li className="text-black mt-1"><Link to="/register">Sign Up</Link></li>
        <li className="text-black flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search" className="border border-gray-300 px-2 py-1 rounded mr-2" />
            <div className="absolute right-0 top-0 mt-2 mr-3 ml-6">
              <FaSearch className="text-red-400" />
            </div>
          </div>
        </li>
        {isDashboard && (
          <li className="text-black mt-1 flex items-center">
            <FaShoppingCart className="text-red-400 mr-4" size={24} />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
