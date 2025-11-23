import React from "react";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <div className="text-primary text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
    </div>
  );
}
