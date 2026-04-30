import coursesData from "@/courses.json";
import Link from "next/link";

const CourseCard = () => {
    const allCourses = coursesData;

    return (
        <div className="bg-gray-100">
        <div className="container py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                All Courses
                <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {allCourses.map(allCourse => (
                    <div key={allCourse.id} className=" rounded-xl transition duration-300 bg-white shadow-md hover:shadow-xl border-b-4  border-b-blue-500   ">
                        
                        <div className="p-4">
                        <img
                            src={allCourse.image}
                            alt={allCourse.title}
                            className="w-full object-cover rounded-2xl"
                        />
                        </div>

                        <div className="p-4 space-y-3">
                            
                            <span className="text-[15px] bg-blue-100 text-blue-500 px-2 py-1 rounded-full font-medium  ">
                                {allCourse.category}
                            </span>

                            <h3 className="text-xl mt-4 font-bold text-gray-800">
                                {allCourse.title}
                            </h3>

                            <p className="text-xl italic font-bold text-gray-500">By {allCourse.instructor}</p>

                       

                            <div className="flex gap-3 text-[15px] text-gray-500">
                                <span>⏱ {allCourse.duration}</span>
                                <span>📊 {allCourse.level}</span>
                            </div>

                            <div className="flex justify-between items-center pt-2 border-t-1 border-gray-500">
                                <span className="text-black font-medium">⭐ {allCourse.rating}</span>
                                <Link href={`/couresCard/${allCourse.id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg border border-blue-400 transition duration-300 text-sm">
                                        Details
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default CourseCard;