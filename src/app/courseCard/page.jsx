"use client"
import coursesData from "@/courses.json";
import Link from "next/link";
import { Clock, BarChart, Search } from "lucide-react";
import { Star } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CourseCard = () => {
    const allCourses = coursesData;
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleDetailsClick = (id) => {
        if (!user) {
            router.push("/auth/login");
        } else {
            router.push(`/courseCard/${id}`);
        }
    };

    const filteredCourses = allCourses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-gray-100">
        <div className="container py-10 px-[20px] md:px-[20px] lg:px-[20px] xl:px-0 ">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    All Courses
                    <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
                </h2>

                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm w-full sm:w-[280px]">
                    <Search size={16} className="text-gray-400" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search courses..."
                        className="outline-none text-sm text-gray-700 w-full bg-transparent"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {filteredCourses.length > 0 ? filteredCourses.map(allCourse => (
                    <div key={allCourse.id} className=" rounded-xl transition duration-300 bg-white-400/20 backdrop-blur-lg shadow-md hover:shadow-xl border-b-4  border-b-blue-500   ">
                        
                        <div className="p-4">
                        <img
                            src={allCourse.image}
                            alt={allCourse.title}
                            className="w-full object-cover rounded-2xl"
                        />
                        </div>

                        <div className="p-4 space-y-3">
                            
                            <span className="text-[15px] bg-blue-400/20 backdrop-blur-lg  text-black px-2 py-1 rounded-full font-medium  ">
                                {allCourse.category}
                            </span>

                            <h3 className="text-xl mt-4 font-bold text-gray-800">
                                {allCourse.title}
                            </h3>

                            <p className="text-xl font-bold text-gray-500">By {allCourse.instructor}</p>

                            <div className="flex items-center gap-3 text-[15px] text-gray-500 border-t pt-3 gap-9">
                                <span className="flex justify-center items-center gap-1 border-r pr-7"><Clock size={16} /> {allCourse.duration}</span>
                                <span className="flex justify-center items-center gap-1"><BarChart size={16}/> {allCourse.level}</span>
                            </div>

                            <div className="flex justify-between items-center pt-2 border-t-1 border-gray-500">
                                <span className="text-black font-medium flex justify-center items-center gap-2"> <Star size={16}/> {allCourse.rating}</span>
                                <button onClick={() => handleDetailsClick(allCourse.id)} className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg border border-blue-400 transition duration-300 text-sm">
                                    Details
                                </button>
                            </div>

                        </div>
                    </div>
                )) : (
                    <div className="col-span-3 text-center py-16 text-gray-400">
                        <Search size={40} className="mx-auto mb-3 opacity-30" />
                        <p className="text-lg">No courses found for "<span className="text-blue-400">{search}</span>"</p>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

export default CourseCard;