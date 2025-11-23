import React from "react";
import Gallery from "../components/Gallery";
import before from "../assets/before.svg";
import clinic from "../assets/clinic-interior.svg";

export default function GalleryPage() {
  const images = [
    { src: before, alt: "Before treatment" },
    { src: before, alt: "After treatment" },
    { src: clinic, alt: "Clinic interior 1" },
    { src: clinic, alt: "Clinic interior 2" },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <p className="text-gray-600 mt-2">Before/after cases and our clinic environment.</p>
      <div className="mt-6">
        <Gallery images={images} />
      </div>
    </section>
  );
}
