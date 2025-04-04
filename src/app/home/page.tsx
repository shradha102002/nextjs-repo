"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import ProductCard from "../components/Productcard";

const courses = [
  { id: 1, title: "Web Development Bootcamp", price: "$99", image: "/web-dev.jpg" },
  { id: 2, title: "UI/UX Design Masterclass", price: "$79", image: "/ui-ux.jpg" },
  { id: 3, title: "Data Science with Python", price: "$129", image: "/data-science.jpg" },
  { id: 4, title: "Digital Marketing Expert", price: "$89", image: "/digital-marketing.jpg" },
  { id: 5, title: "Cyber Security Fundamentals", price: "$109", image: "/cyber-security.jpg" },
  { id: 6, title: "AI & Machine Learning", price: "$149", image: "/ai-ml.jpg" },
];

export default function Home() {
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center text-white px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Master Your Skills with the Best Online Courses
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Upgrade your career by learning from industry experts.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/buy-course">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg">
              Explore Courses
            </button>
          </Link>
          <Link href="/get-started">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition shadow-lg">
              Enroll Now
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Featured Courses */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Top Trending Courses</h2>
          <p className="text-gray-600 mt-2">Choose from our most in-demand courses to stay ahead in your field.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {courses.map((course) => (
              <ProductCard key={course.id} title={course.title} price={course.price} image={course.image} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/buy-course">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="text-gray-600 mt-2">We provide world-class education to help you grow your career.</p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="bg-gray-200 p-6 rounded-lg max-w-sm shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold">Expert Instructors</h3>
              <p className="text-gray-700 mt-2">Learn from industry professionals with real-world experience.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg max-w-sm shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold">Lifetime Access</h3>
              <p className="text-gray-700 mt-2">Enjoy unlimited access to your purchased courses.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg max-w-sm shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold">Certification</h3>
              <p className="text-gray-700 mt-2">Earn a certificate to boost your resume and career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Call-to-Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold">Start Learning Today!</h2>
        <p className="mt-4 text-lg">Browse through our courses and take the next step in your career.</p>
        <div className="mt-6">
          <Link href="/get-started">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg">
              Enroll Now
            </button>
          </Link>
        </div>
      </section>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  );
}
