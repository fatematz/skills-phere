'use client'
import Link from "next/link";
import coursesData from "../courses.json";
import { Star } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const TopCourse = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleDetailsClick = (id) => {
    if (!user) {
      router.push("/auth/login");
    } else {
      router.push(`/courseCard/${id}`);
    }
  };

  const top3 = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="container px-[20px] md:px-[20px] lg:px-[20px] xl:px-0 py-[40px]">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative inline-block">
        Popular Courses
        <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
      </h2>

      <div className="space-y-6 py-[20px]">
        {top3.map((course, index) => (
          <div
            key={course.id}
            className={`flex flex-col md:flex-row items-center gap-6 bg-blue-50 p-4 md:p-6 rounded-2xl shadow-md
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={course.image}
                alt={course.title}
                className="w-full object-cover rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-lg md:text-xl font-semibold text-gray-500">By {course.instructor}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
              <div className="mt-3">
                <span className="text-yellow-500 font-medium flex items-center justify-center md:justify-start gap-2">
                  <Star size={16} /> {course.rating}
                </span>
                <button
                  onClick={() => handleDetailsClick(course.id)}
                  className="bg-blue-200 block mt-4 hover:bg-blue-400 text-white px-4 py-2 w-full sm:w-[200px] mx-auto md:mx-0 border border-blue-500 rounded-lg transition duration-300"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCourse;