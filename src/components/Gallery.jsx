import React, { useState } from "react";

export default function Gallery({ images = [] }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="overflow-hidden rounded-md bg-gray-100"
            aria-label={`Open image ${i+1}`}
          >
            <img src={img.src} alt={img.alt || "Gallery image"} className="w-full h-40 object-cover" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setActive(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={images[active].src} alt={images[active].alt || "Enlarged"} className="w-full rounded-md" />
            <div className="text-right mt-2">
              <button onClick={() => setActive(null)} className="text-white bg-primary px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
