import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", preferred: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Build message from form fields
  const buildMessage = () => {
    return `Appointment Request - VR Dental Care
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Preferred: ${form.preferred || "N/A"}
Message: ${form.message}`;
  };

  // Open WhatsApp or Mail when user chooses, validate first
  const handleContact = (method) => {
    if (!validate()) return;
    const message = buildMessage();
    if (method === "whatsapp") {
      const whatsAppNumber = "+918667474390"; // user-provided number
      const waHref = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
      window.open(waHref, "_blank", "noopener,noreferrer");
    } else if (method === "email") {
      const emailAddress = "mugeshsample@gmail.com"; // user-provided email
      const subject = encodeURIComponent("Appointment Request - VR Dental Care");
      const body = encodeURIComponent(message);
      const mailtoHref = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
      window.open(mailtoHref, "_blank", "noopener,noreferrer");
    }

    setSubmitted(true);
    // Optionally clear form:
    // setForm({ name: "", email: "", phone: "", preferred: "", message: "" });
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      {submitted ? (
        <div className="text-center">
          <h3 className="text-lg font-semibold">Request initiated</h3>
          <p className="text-gray-600 mt-2">You will be taken to WhatsApp or your email client to complete the message.</p>
        </div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                className="w-full border p-2 rounded mt-1"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-label="Name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                className="w-full border p-2 rounded mt-1"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-label="Email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input
                className="w-full border p-2 rounded mt-1"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                aria-label="Phone"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm">Preferred date/time</label>
              <input
                className="w-full border p-2 rounded mt-1"
                placeholder="Optional"
                aria-label="Preferred date and time"
                value={form.preferred}
                onChange={(e) => setForm({ ...form, preferred: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm">Message</label>
            <textarea
              className="w-full border p-2 rounded mt-1"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-label="Message"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
            {/* Removed Send Request button - user will use WhatsApp or Email */}
            <button
              type="button"
              onClick={() => handleContact("whatsapp")}
              className="text-white bg-green-500 px-4 py-2 rounded-md text-center"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp
            </button>

            <button
              type="button"
              onClick={() => handleContact("email")}
              className="text-gray-700 bg-gray-100 px-4 py-2 rounded-md text-center"
              aria-label="Contact via Email"
            >
              Email
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
