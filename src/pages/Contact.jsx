import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    const phone = "+918667474390";
    const email = "viniragu92@gmail.com";
    const whatsAppLink = `https://wa.me/${phone}`;

    return (
        <section className="container mx-auto px-6 py-12" id="book">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="text-gray-600 mt-2">Reach out to schedule, ask questions, or request an emergency visit.</p>

                    <div className="mt-6 space-y-3 text-gray-700">
                        <div><strong>Address:</strong> 123 Smile Street, Your City</div>
                        <div><strong>Phone:</strong> <a href={`tel:${phone}`} className="text-primary">{phone}</a></div>
                        <div><strong>Email:</strong> <a href={`mailto:${email}`} className="text-primary">{email}</a></div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <a className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md" href={whatsAppLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                        <a className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md" href={`mailto:${email}`} target="_blank" rel="noreferrer">Send Email</a>
                    </div>

                    <div className="mt-6 border rounded-md overflow-hidden">
                        <iframe
                            title="clinic-map"
                            className="w-full h-64 border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31208.43514727921!2d78.12281774809175!3d12.108428901673133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac175e11523833%3A0x42713301a709aacb!2sVR%20Dental%20care!5e0!3m2!1sen!2sin!4v1763862414943!5m2!1sen!2sin"
                            width="600" height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div>
                    <ContactForm />
                    <div className="mt-4 text-sm text-gray-600">
                        <p>WhatsApp booking: <a className="text-green-600" href={whatsAppLink} target="_blank" rel="noreferrer">{whatsAppLink}</a></p>
                        <p>Email booking: <a className="text-primary" href={`mailto:${email}`}>{email}</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
