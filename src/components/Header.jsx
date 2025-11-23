import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">VR</div>
          <Link to="/" className="text-xl font-semibold text-gray-900">VR Dental Care</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <NavLink to="/" className={({isActive}) => isActive ? "text-primary font-medium" : ""}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-primary font-medium" : ""}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "text-primary font-medium" : ""}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? "text-primary font-medium" : ""}>Gallery</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-primary font-medium" : ""}>Contact</NavLink>
          <a href="/#book" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded-md">Book Appointment</a>
        </nav>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md text-gray-700">
            <FiMenu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
