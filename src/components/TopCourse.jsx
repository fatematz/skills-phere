import Link from "next/link";
import coursesData from "../courses.json";
import { Star } from "lucide-react";

const TopCourse = async () => {

   const top3 = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

    return (
        <div className="container py-[40px]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                Popular Courses
                <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
            </h2>

            <div className="space-y-6 py-[40px] ">
                {top3.map((course, index) => (
                    <div
                        key={course.id}
                        className={`flex flex-col md:flex-row items-center gap-6 bg-blue-50 p-6 rounded-2xl shadow-md
                            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={course.image}
                                alt={course.title}
                              
                                className=" w-full  object-cover rounded-xl"
                            />
                        </div>

                        <div className="w-full md:w-1/2 space-y-3 text-left">
                            <h3 className="text-2xl  font-bold text-gray-800">{course.title}</h3>
                            <p className="text-xl font-semibold text-gray-500">By {course.instructor}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
                            <div className=" mt-3">
                                <span className="text-yellow-500 font-medium flex items-center gap-2"><Star size={16}/> {course.rating}</span>
                                <Link href={`/courseCard/${course.id}`}>
                                    <button className="bg-blue-200 block mt-4 hover:bg-blue-400 text-white px-4 py-2 w-[200px] border border-blue-500 rounded-lg transition duration-300">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCourse;