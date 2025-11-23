import React from "react";
import doctor from "../assets/doctor.svg";

export default function About() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <img src={doctor} alt="Dr. R. SREE VINITHA" className="w-full rounded-md" />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">Dr. R. SREE VINITHA, BDS.,FGD.,FCE.,</h2>
          <p className="text-gray-600 mt-2">Experienced dentist specializing in conservative, patient-centered care. Focused on minimally invasive treatments and excellent communication.</p>

          <h3 className="mt-6 font-semibold">Qualifications</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Advanced Restorative Dentistry</li>
            <li>Certified in Pediatric Dental Care</li>
          </ul>

          <h3 className="mt-6 font-semibold">Clinic Vision & Values</h3>
          <p className="text-gray-700 mt-2">We deliver compassionate, evidence-based dental care in a calm environment. Patient education and prevention are central to our approach.</p>
        </div>
      </div>
    </section>
  );
}
