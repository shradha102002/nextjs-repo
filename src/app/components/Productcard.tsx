"use client";
import Image from "next/image";

interface ProductProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard = ({ title, price, image }: ProductProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <Image src={image} alt={title} width={300} height={200} className="rounded-lg w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 text-lg font-bold bg-gray-100 px-3 py-1 rounded-lg inline-block mt-2">{price}</p>
      <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
        Enroll Now
      </button>
    </div>
  );
};

export default ProductCard;
