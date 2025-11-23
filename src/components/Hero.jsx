import React from "react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor.svg";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Healthy Smiles Begin Here</h1>
          <p className="mt-4 text-gray-600">Comprehensive dental care tailored to adults and children. Gentle, modern, evidence-based treatments.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact#book" className="bg-primary text-white px-4 py-2 rounded-md">Book Appointment</Link>
            <Link to="/contact" className="border border-gray-300 px-4 py-2 rounded-md text-gray-700">Contact Us</Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={doctor} alt="Dentist illustration" className="w-64 h-64" />
        </div>
      </div>
    </section>
  );
}
