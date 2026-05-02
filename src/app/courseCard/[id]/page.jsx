
import coursesData from "@/courses.json";
import { Star, Clock, BarChart, BookOpen } from "lucide-react";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) return <h1 className="text-center py-10 text-2xl">Course Not Found!</h1>;

    return (
        <div className=" bg-gray-100 py-16 px-4">
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">

                <div className="bg-blue-400 w-full md:w-[40%] p-8 flex flex-col justify-between">
                    
                    <div>
                        <span className="text-blue-300 text-xs uppercase tracking-widest font-semibold">
                            {course.category}
                        </span>
                        <h1 className="text-white text-2xl font-bold mt-2 mb-6">
                            {course.title}
                        </h1>

                        <div className="space-y-3 border-b border-blue-400/30 pb-6 mb-6">
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                                Course Info
                            </p>
                            <p className="text-white/80 text-sm flex gap-2">
                                <Clock size={14} className="mt-0.5 text-blue-300" />
                                Duration: {course.duration}
                            </p>
                            <p className="text-white/80 text-sm flex gap-2">
                                <BarChart size={14} className="mt-0.5 text-blue-300" />
                                Level: {course.level}
                            </p>
                            <p className="text-white/80 text-sm flex gap-2">
                                <BookOpen size={14} className="mt-0.5 text-blue-300" />
                                Instructor: {course.instructor}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">
                                Curriculum
                            </p>
                            {["Introduction", "Core Concepts", "Hands-on Projects", "Advanced Topics", "Final Assessment"].map((item, i) => (
                                <p key={i} className="text-white/70 text-sm flex gap-2">
                                    <span className="text-blue-300">→</span> {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <button className="mt-8 border border-white text-white px-6 py-2 rounded-lg text-sm hover:bg-white hover:text-[#153a70] transition duration-300 w-fit">
                        ENROLL NOW
                    </button>
                </div>

                <div className="bg-white w-full md:w-[60%] p-8">
                    
                    <h2 className="text-3xl font-bold text-gray-800">{course.title}</h2>
                    <p className="text-gray-400 mt-1 mb-6">By {course.instructor}</p>

                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-52 object-cover rounded-xl mb-8"
                    />

                    <p className="text-gray-600 leading-relaxed text-sm mb-8">
                        {course.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 border-t pt-6">
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Rating</p>
                            <p className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-1 mt-1">
                                <Star size={18} className="text-yellow-400" />
                                {course.rating}
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Duration</p>
                            <p className="text-2xl font-bold text-gray-800 mt-1">{course.duration}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Level</p>
                            <p className="text-2xl font-bold text-gray-800 mt-1">{course.level}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetailsPage;