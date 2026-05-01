import coursesData from "@/courses.json";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) return <h1 className="text-center py-10 text-2xl">Course Not Found!</h1>;

    return (
        <div className="bg-gray-100 flex flex-col items-center py-16 px-4">

            <h1 className="text-4xl font-serif text-blue-500 mb-1 text-center">{course.title}</h1>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">To Our Course</p>
            <div className="w-8 h-0.5 bg-gray-400 mb-16"></div>

            <div className="flex justify-center w-full">
                <img
                    src={course.image}
                    alt={course.title}
                    width={400}
                    className="h-48 object-cover shadow-lg relative z-10 mb-[-96px] rounded-2xl"
                />
            </div>

            <div className="bg-[#153a70] container pt-35 pb-16 px-8 space-y-6 text-center">
               


                <p className="text-xl text-white opacity-80 italic">
                    By {course.instructor}
                </p>

                <p className="text-lg text-white opacity-90 leading-relaxed max-w-3xl mx-auto">
                    {course.description}
                </p>

            </div>

        </div>
    );
};

export default CourseDetailsPage;