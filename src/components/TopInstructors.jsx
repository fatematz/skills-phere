const topInstructors = [
  {
    "id": 1,
    "name": "John Smith",
    "subject": "Web Development",
    "rating": 4.9,
    "students": 12400,
    "courses": 15,
    "image": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "subject": "UI/UX Design",
    "rating": 4.8,
    "students": 9800,
    "courses": 12,
    "image": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "id": 3,
    "name": "David Lee",
    "subject": "React & Next.js",
    "rating": 4.7,
    "students": 8500,
    "courses": 10,
    "image": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "subject": "Python & AI",
    "rating": 4.9,
    "students": 11200,
    "courses": 18,
    "image": "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TopInstructors = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-white py-20 py-10 ">
            <div className="container">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Top Instructors
                    <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6  pt-[40px]">
                    {topInstructors.map(instructor => (
                        <div
                            key={instructor.id}
                            className={`bg-white rounded-2xl mt-6 p-6 text-center space-y-3 hover:shadow-lg transition duration-300
                                ${instructor.id % 2 === 0
                                    ? "border-2 border-blue-500"
                                    : ""
                                }`}
                        >
                            <div className="absolute -mt-15 ml-17 flex justify-center">
                                <img
                                    src={instructor.image}
                                    alt={instructor.name}
                                    className="w-20 h-20 rounded-full  object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mt-10">
                                {instructor.name}
                            </h3>

                            <p className={`text-xl font-medium
                                ${instructor.id % 2 === 0
                                    ? "text-blue-500"
                                    : "text-gray-600"
                                }`}>
                                {instructor.subject}
                            </p>

                            <p className="text-yellow-400 font-semibold">
                                ⭐ {instructor.rating}
                            </p>

                            <div className="flex justify-between gap-4 text-[15px] text-gray-500 pt-2 border-t border-gray-200">
                                <span>👨‍🎓 {instructor.students.toLocaleString()} students</span>
                                <span>📚 {instructor.courses} courses</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopInstructors;