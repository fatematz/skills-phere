import coursesData from "@/courses.json";

const CourseDetailsPage = async ({ params }) => {
      const { id } = await params; 
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) return <h1 className="text-center py-10 text-2xl">Course Not Found!</h1>;

    return (
        <div className="bg-blue-100 p-16">
        <div className="container  max-w-3xl mx-auto p-10 rounded-2xl ">

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 border-gray-500  p-5 rounded-2xl">

            <div className="">
                <img className="rounded-2xl" src={course.image} alt="course.image" width={900}  />
            </div>

            <div className="">
                <div className="">
                    <h1 className="text-[20px] md:text-[30px] text-blue-500 font-bold "> {course.title} </h1>
                </div>

                <div className="text-[15px] md:text-[20px] font-semibold mt-3">
                    {course.description}
                </div>
            </div>

           </div>
        </div>
        </div>
    );
};

export default CourseDetailsPage;