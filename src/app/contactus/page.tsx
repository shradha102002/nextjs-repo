"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col">
      {/* Page Title */}
      <div className="text-center py-6 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold">Get in Touch</h2>
        <p className="text-lg mt-2 font-medium">
          We&apos;d love to hear from you! Reach out to us for any queries.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { icon: <FaPhone />, title: "Call Us", content: "+1 234 567 890" },
          { icon: <FaEnvelope />, title: "Email Us", content: "support@class.com" },
          { icon: <FaMapMarkerAlt />, title: "Visit Us", content: "123 Education St, Learning City" },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-white shadow-xl rounded-lg transform transition hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-blue-600 mx-auto">{item.icon}</div>
            <h3 className="text-xl font-bold mt-3">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700 font-semibold">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-72 mt-10">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.9537363155045!3d-37.81627974201237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0f9fd81%3A0xf5773e0a1a48f2e!2sEducation%20Hub!5e0!3m2!1sen!2sus!4v1640709842165!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default ContactUs;
