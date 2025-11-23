import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">VR Dental Care</h3>
          <p className="text-sm text-gray-600">Healthy smiles begin here.</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a aria-label="Facebook" href="#" className="text-gray-600 hover:text-primary"><FaFacebookF /></a>
          <a aria-label="Instagram" href="#" className="text-gray-600 hover:text-primary"><FaInstagram /></a>
          <a aria-label="LinkedIn" href="#" className="text-gray-600 hover:text-primary"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} VR Dental Care · All rights reserved
      </div>
    </footer>
  );
}
