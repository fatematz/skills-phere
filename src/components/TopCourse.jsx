import coursesData from "../courses.json";

const TopCourse = async () => {

   const top3 = coursesData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);


    return (
        <div className="container py-[40px]">
         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative inline-block">
  Popular Courses
  <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
            {
                top3.map(course => (
                        <div key={course.id} className="shadow-2xl space-y-2 text-center pb-3">
                        <div className="flex justify-center items-center ">
                            <img className="rounded-t-2xl" src={course.image} alt="topCourseImg" width="full" height={50} />
                        </div>

<div className="p-4 space-y-2">
  <h3 className="text-lg font-semibold text-gray-800">
    {course.title}
  </h3>

  <p className="text-sm text-gray-500">
    By {course.instructor}
  </p>

  <div className="flex justify-between items-center mt-3">
    
    <span className="text-yellow-500 font-medium">
      ⭐ {course.rating}
    </span>

    <button className="bg-blue-200 hover:bg-blue-400 text-white p-1 border border-blue-400 rounded-lg transition duration-300">
      Details
    </button>

  </div>

                        </div>
                        </div>
                  
                ))
            }
              </div>
        </div>
    );
};

export default TopCourse;