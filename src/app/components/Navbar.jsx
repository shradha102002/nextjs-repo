"use client";
import { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 md:px-20 py-6">
        <h1 className="text-2xl font-bold">Class.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-black">Buy a course</a>
          <a href="#" className="hover:text-black">Success</a>
          <a href="#" className="hover:text-black">Categories</a>
          <a href="#" className="hover:text-black">Pricing</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <button className="bg-black text-white px-5 py-2 rounded-lg hidden md:block">
          Get Started
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 text-center bg-gray-100 py-4">
          <a href="#" className="hover:text-black">Buy a course</a>
          <a href="#" className="hover:text-black">Success</a>
          <a href="#" className="hover:text-black">Categories</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <button className="bg-black text-white px-5 py-2 rounded-lg">Get Started</button>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 space-y-6 md:space-y-0">
        {/* Left Side */}
        <div className="max-w-lg text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Become a professional in either field.
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <button className="bg-black text-white px-6 py-3 rounded-lg">Get Started</button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg">Learn More</button>
          </div>
        </div>

        {/* Right Side - Student Image */}
        <div className="w-full md:w-[50%] flex justify-center">
          <Image
            src="/student.jpg"
            alt="Student"
            width={400}
            height={500}
            className="rounded-lg w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>

      {/* Platform Logos BELOW Student Image - FULL WIDTH */}
      <div className="w-full bg-gray-100 py-6 flex flex-wrap justify-center gap-6 md:gap-10">
        <Image src="/unacademy.png" alt="Unacademy" width={100} height={40} className="h-auto w-auto" />
        <Image src="/coursera.png" alt="Coursera" width={100} height={40} className="h-auto w-auto" />
        <Image src="/skillshare.png" alt="Skillshare" width={100} height={40} className="h-auto w-auto" />
        <Image src="/udemy.png" alt="Udemy" width={100} height={40} className="h-auto w-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
