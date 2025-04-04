"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const LearnMore = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center text-white" 
        style={{ backgroundImage: "url('/classroom.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-5xl font-bold">Discover More About Our Classes</h1>
          <p className="text-lg text-gray-300 mt-2">Empowering students with knowledge, skills, and opportunities.</p>
        </div>
      </div>

      {/* Class Information */}
      <div className="container mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Why Choose Our Classes?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide world-class learning experiences with **industry experts** and a **practical approach** 
              to ensure that our students gain real-world knowledge.
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-center text-lg text-gray-700">
                ✅ **Expert Instructors** – Learn from top professionals in the field.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                ✅ **Hands-on Projects** – Work on real-world assignments and case studies.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                ✅ **Flexible Learning** – Study at your own pace, anytime, anywhere.
              </li>
              <li className="flex items-center text-lg text-gray-700">
                ✅ **Certification** – Earn a professional certificate to boost your resume.
              </li>
            </ul>
            <Link href="/get-started">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:scale-105 transition-all">
                Get Started Today 🚀
              </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img 
              src="/student-learning.jpg" 
              alt="Students Learning" 
              className="rounded-lg shadow-xl w-full md:w-[80%] object-cover hover:scale-105 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-12 bg-gradient-to-r from-gray-900 to-black text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Stay Connected With Us!</h3>
        <p className="text-lg text-gray-300 mb-6">Follow us on social media for the latest updates, news, and opportunities.</p>
        <div className="flex justify-center space-x-6 text-4xl">
          <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-blue-500 transition-all">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500 transition-all">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-600 transition-all">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default LearnMore;
