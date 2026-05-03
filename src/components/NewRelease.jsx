import { Star } from "lucide-react";

const trendingCourses = [
  {
    id: 1,
    tag: "Popular in week",
    title: "Machine Learning With Python",
    description: "Master ML algorithms, data preprocessing, model training and deployment with real-world projects.",
    rating: 4.8,
    price: 200,
    originalPrice: 350,
  },
  {
    id: 2,
    tag: "Trending",
    title: "Full Stack Web Development",
    description: "Learn React, Node.js, MongoDB and build production-ready full stack web applications.",
    rating: 4.7,
    price: 180,
    originalPrice: 300,
  },
  {
    id: 3,
    tag: "New Release",
    title: "DevOps & CI/CD Pipeline",
    description: "Master Docker, Kubernetes, GitHub Actions and automate your entire software delivery process.",
    rating: 4.6,
    price: 220,
    originalPrice: 380,
  },
  {
    id: 4,
    tag: "Best Seller",
    title: "TypeScript Advanced Patterns",
    description: "Deep dive into TypeScript generics, decorators, utility types and design patterns.",
    rating: 4.9,
    price: 160,
    originalPrice: 280,
  },
  {
    id: 5,
    tag: "Trending",
    title: "Cloud Architecture with AWS",
    description: "Design scalable cloud systems using EC2, S3, Lambda, RDS and master AWS certifications.",
    rating: 4.7,
    price: 250,
    originalPrice: 400,
  },
  {
    id: 6,
    tag: "Popular in week",
    title: "React Native Mobile Apps",
    description: "Build cross-platform iOS and Android apps with React Native, Expo and Firebase.",
    rating: 4.5,
    price: 190,
    originalPrice: 320,
  },
];

const NewRelease = () => {
  return (
    <div className="bg-gradient-to-r from-blue-150 to-white py-10">
      <div className="container px-[20px] xl:px-0">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
          Trending Courses
          <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md p-6 relative hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M5 3h14a1 1 0 011 1v17l-7-3-7 3V4a1 1 0 011-1z"/>
                </svg>
              </div>

              <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full w-fit">
                {course.tag}
              </span>

              
              <div className="border-l-4 border-blue-500 pl-3 mt-3 mb-3">
                <h3 className="text-lg font-bold text-gray-800 leading-snug">
                  {course.title}
                </h3>
              </div>

           
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {course.description}
              </p>

              <div className="flex items-center justify-between mt-5 flex-wrap gap-3">
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 font-semibold text-sm">
                    <Star size={14} fill="#facc15" /> {course.rating}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gray-800 font-bold text-lg">${course.price}.00</span>
                    <span className="text-gray-400 line-through text-sm">${course.originalPrice}.00</span>
                  </div>
                </div>

                <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2 rounded-full flex items-center gap-1 transition">
                  Get Course ›
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewRelease;