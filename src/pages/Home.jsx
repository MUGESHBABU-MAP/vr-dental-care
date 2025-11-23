import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { FaTooth, FaTeeth, FaSmile } from "react-icons/fa";

export default function Home() {
  const services = [
    { title: "Dental Checkup", description: "Thorough exam, X-rays and treatment plan.", icon: <FaTooth /> },
    { title: "Cleaning & Scaling", description: "Gentle hygiene, tartar removal and polishing.", icon: <FaTeeth /> },
    { title: "Cosmetic Dentistry", description: "Veneers, whitening and smile design.", icon: <FaSmile /> },
  ];

  return (
    <>
      <Hero />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="text-gray-600 mt-2">Comprehensive dental care for the whole family.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>
    </>
  );
}
