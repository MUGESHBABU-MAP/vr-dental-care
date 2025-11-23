import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) => (isActive ? "text-primary font-medium" : "text-gray-700");

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">VR</div>
          <Link to="/" className="text-xl font-semibold text-gray-900">VR Dental Care</Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <Link to="/contact#book" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded-md">Book Appointment</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-gray-700"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-white z-50 overflow-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 pt-6 pb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">VR</div>
                <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold text-gray-900">VR Dental Care</Link>
              </div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md text-gray-700">
                <FiX size={22} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About</NavLink>
              <NavLink to="/services" onClick={() => setOpen(false)} className={navLinkClass}>Services</NavLink>
              <NavLink to="/gallery" onClick={() => setOpen(false)} className={navLinkClass}>Gallery</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkClass}>Contact</NavLink>

              <Link
                to="/contact#book"
                onClick={() => setOpen(false)}
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
