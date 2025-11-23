import React from "react";
import ServiceCard from "../components/ServiceCard";
import { FaStethoscope, FaTooth, FaTeeth, FaSmile, FaBandAid, FaChild } from "react-icons/fa";

export default function Services() {
  const list = [
    { title: "Dental Checkup", description: "Comprehensive oral exam and diagnostics.", icon: <FaStethoscope /> },
    { title: "Cleaning & Scaling", description: "Plaque and tartar removal for gum health.", icon: <FaTeeth /> },
    { title: "Root Canal Treatment (RCT)", description: "Advanced endodontic care to save teeth.", icon: <FaBandAid /> },
    { title: "Crowns & Bridges", description: "Restoration of damaged or missing teeth.", icon: <FaSmile /> },
    { title: "Orthodontics / Braces", description: "Alignment and bite correction services.", icon: <FaTooth /> },
    { title: "Pediatric Dentistry", description: "Gentle dental care for children.", icon: <FaChild /> },
    { title: "Cosmetic Dentistry / Smile Design", description: "Veneers, whitening and aesthetic solutions.", icon: <FaSmile /> },
    { title: "Emergency Dental Care", description: "Same-day care for urgent dental issues.", icon: <FaBandAid /> },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">Clinic Services</h2>
      <p className="text-gray-600 mt-2">We offer a full range of treatments using modern equipment and materials.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {list.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
  );
}
