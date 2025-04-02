"use client";
import Image from "next/image";

const Product = () => {
  const products = [
    { id: 1, title: "Web Development Bootcamp", price: "10000", image: "/web-dev.jpg" },
    { id: 2, title: "UI/UX Design Masterclass", price: "15000", image: "/ui-ux.jpg" },
    { id: 3, title: "Data Science with Python", price: "20000", image: "/data-science.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg text-center transition-transform transform hover:scale-105">
            <Image src={product.image} alt={product.title} width={200} height={150} className="mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
