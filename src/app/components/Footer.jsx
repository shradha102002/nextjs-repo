"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">Class.</h2>
          <p className="mt-2 text-gray-400">Your gateway to professional skills.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Courses</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-3 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Class. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
