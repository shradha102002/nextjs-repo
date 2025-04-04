"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-gray-200 flex flex-col">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 md:px-20 py-6 bg-white shadow-lg rounded-b-xl">
        <h1 className="text-3xl font-extrabold text-blue-700">Class.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/home" className="hover:text-purple-600 transition">Home</Link>
          <Link href="/buy-course" className="hover:text-purple-600 transition">Buy a Course</Link>
          <Link href="/success" className="hover:text-purple-600 transition">Success</Link>
          <Link href="/contactus" className="hover:text-purple-600 transition">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>

        <Link href="/get-started">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hidden md:block hover:bg-purple-700 transition shadow-md">
            Get Started
          </button>
        </Link>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 text-center bg-white py-4 shadow-lg rounded-b-xl">
          <Link href="/home" className="hover:text-purple-600 transition">Home</Link>
          <Link href="/buy-course" className="hover:text-purple-600 transition">Buy a Course</Link>
          <Link href="/success" className="hover:text-purple-600 transition">Success</Link>
          <Link href="/contactus" className="hover:text-purple-600 transition">Contact Us</Link>
          <Link href="/get-started">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">Get Started</button>
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="max-w-lg text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Transform Your Career with Expert-Led Courses.
          </h2>
          <p className="text-lg text-gray-700">
            Learn in-demand skills and become job-ready with our world-class online courses.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <Link href="/get-started">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition">
                Get Started
              </button>
            </Link>
            <Link href="/learn-more">
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Student Image */}
        <div className="w-full md:w-[50%] flex justify-center">
          <Image
            src="/student.jpg"
            alt="Student"
            width={500}
            height={500}
            className="rounded-lg w-full max-w-xs md:max-w-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
