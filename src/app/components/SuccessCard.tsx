"use client";
import Image from "next/image";

const SuccessCard = ({ name, course, story, image }) => {
  console.log("SuccessCard Props:", name, course, story, image); // Debugging

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
      {image ? (
        <Image 
          src={image} 
          alt={name} 
          width={400} 
          height={300} 
          className="rounded-md w-full h-60 object-cover"
        />
      ) : (
        <p className="text-red-500">Image not available</p>
      )}
      
      <h3 className="text-lg font-bold mt-4">{name || "No Name Provided"}</h3>
      <p className="text-sm text-gray-600">{course || "No Course Name"}</p>
      <p className="text-gray-700 mt-2">{story || "No Story Available"}</p>
    </div>
  );
};

export default SuccessCard;
