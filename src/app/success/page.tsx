"use client";
import SuccessCard from "../components/SuccessCard";
import Footer from "../components/Footer";

const successStories = [
  { id: 1, name: "Shivani Pisal", course: "Web Development Bootcamp", story: "Landed a job at Google!", image: "/success-stories/student1.jpg" },
  { id: 2, name: "Akanksha Phadtare", course: "Data Science with Python", story: "Got a Data Analyst role at Microsoft.", image: "/success-stories/student2.jpg" },
  { id: 3, name: "Shradha Pawar", course: "UI/UX Design Masterclass", story: "Started her own design agency!", image: "/success-stories/student3.jpg" },
  { id: 4, name: "Shivansh Patil", course: "Cyber Security Fundamentals", story: "Now a Security Engineer at Amazon.", image: "/success-stories/student4.jpg" },
  { id: 5, name: "Shirish Jadhav", course: "AI & Machine Learning", story: "Became an AI Researcher at OpenAI!", image: "/success-stories/student5.jpg" },
  { id: 6, name: "Sanket Pawar", course: "Digital Marketing Expert", story: "Tripled his freelance income!", image: "/success-stories/student6.jpg" },
];

const Success = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Student Success Stories 🎓
        </h2>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {successStories.map((student) => (
            <SuccessCard 
              key={student.id} 
              name={student.name} 
              course={student.course} 
              story={student.story} 
              image={student.image} 
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default Success;

