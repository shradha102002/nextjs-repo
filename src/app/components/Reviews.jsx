"use client";

const Reviews = () => {
  const reviews = [
    { id: 1, name: "Ritvik Patil", text: "This course helped me land my first job!", rating: "⭐⭐⭐⭐⭐" },
    { id: 2, name: "Sanket Pawar", text: "Great content and easy to follow!", rating: "⭐⭐⭐⭐" },
    { id: 3, name: "Rutuja Patil", text: "Highly recommend for beginners.", rating: "⭐⭐⭐⭐⭐" },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:bg-gray-200 transition">
            <p className="text-lg italic">"{review.text}"</p>
            <p className="mt-2 font-bold">{review.name}</p>
            <p className="text-yellow-500">{review.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
