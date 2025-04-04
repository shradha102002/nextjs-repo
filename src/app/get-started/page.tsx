"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Image from "next/image";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.name}! Registration Successful.`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex flex-col">
      {/* Header Section */}
      <div className="relative w-full h-72 flex items-center justify-center bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Get Started with Class.</h1>
        <p className="absolute bottom-4 text-lg">Unlock a world of knowledge and professional growth!</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Illustration */}
        <div className="hidden md:block w-1/2">
          <Image 
            src="/signup.jpg" 
            alt="Learning Illustration"
            width={500} 
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Registration Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register Now
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default GetStarted;
