"use client";
import ProductCard from "../components/Productcard";
import Footer from "../components/Footer";


const courses = [
  { id: 1, title: "Web Development Bootcamp", price: "10000", image: "/web-dev.jpg" },
  { id: 2, title: "UI/UX Design Masterclass", price: "15000", image: "/ui-ux.jpg" },
  { id: 3, title: "Data Science with Python", price: "20000", image: "/data-science.jpg" },
  { id: 4, title: "Digital Marketing Expert", price: "20000", image: "/digital-marketing.jpg" },
  { id: 5, title: "Cyber Security Fundamentals", price: "15000", image: "/cyber-security.jpg" },
  { id: 6, title: "AI & Machine Learning", price: "30000", image: "/ai-ml.jpg" },
];

const BuyACourse = () =>  {
  return (
    <div className="flex flex-col min-h-screen"> {/* ✅ Ensure Footer stays at the bottom */}
      <section className="flex-grow py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Choose Your Course</h2>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <ProductCard key={course.id} title={course.title} price={course.price} image={course.image} />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer should now be included and visible */}
      <Footer />
    </div>
  );
};

export default BuyACourse;
