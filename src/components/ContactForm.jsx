import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    // No backend - just UI confirmation
  };

  // WhatsApp & Email targets (updated)
  const whatsAppNumber = "8072888085";
  const whatsAppMessage = encodeURIComponent("Hello, I want to book a dental appointment with Dr. R. SREE VINITHA.");
  const whatsAppHref = `https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`;

  const emailAddress = "mugeshsample@gmail.com";
  const emailSubject = encodeURIComponent("Appointment Request - VR Dental Care");
  const emailBody = encodeURIComponent("Hello,\n\nI would like to book an appointment with Dr. R. SREE VINITHA. Please contact me to confirm.\n\nThanks,\n");
  const mailtoHref = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      {submitted ? (
        <div className="text-center">
          <h3 className="text-lg font-semibold">Request received</h3>
          <p className="text-gray-600 mt-2">Thanks! We will contact you to confirm your appointment.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Name</label>
              <input className="w-full border p-2 rounded mt-1" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} aria-label="Name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input className="w-full border p-2 rounded mt-1" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} aria-label="Email" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input className="w-full border p-2 rounded mt-1" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} aria-label="Phone" />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm">Preferred date/time</label>
              <input className="w-full border p-2 rounded mt-1" placeholder="Optional" aria-label="Preferred date and time" />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm">Message</label>
            <textarea className="w-full border p-2 rounded mt-1" rows="4" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} aria-label="Message" />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Send Request</button>

            {/* Quick contact via WhatsApp */}
            <a
              className="text-white bg-green-500 px-4 py-2 rounded-md text-center"
              href={whatsAppHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp
            </a>

            {/* Quick contact via Email */}
            <a
              className="text-gray-700 bg-gray-100 px-4 py-2 rounded-md text-center"
              href={mailtoHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact via Email"
            >
              Email
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
