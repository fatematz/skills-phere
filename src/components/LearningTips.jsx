const learningTips = [
  {
    "id": 1,
    "category": "Study Technique",
    "icon": "🍅",
    "title": "Pomodoro Technique",
    "description": "25 minutes study, 5 minutes break"
  },
  {
    "id": 2,
    "category": "Study Technique",
    "icon": "📝",
    "title": "Note Taking",
    "description": "Write short notes while studying"
  },
  {
    "id": 3,
    "category": "Time Management",
    "icon": "📅",
    "title": "Daily Routine",
    "description": "Study at a fixed time every day"
  },
  {
    "id": 4,
    "category": "Time Management",
    "icon": "🚫",
    "title": "Avoid Distraction",
    "description": "Keep your phone away while studying"
  }
];

const LearningTips = () => {
    return (
        <div className="bg-gray-50">
            <div className="container py-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Learning Tips
                    <span className="block h-1 w-16 bg-blue-400 mt-2 rounded"></span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {learningTips.map(tip => (
                        <div
                            key={tip.id}
                            className={` py-15 shadow-md hover:shadow-xl transition duration-300 text-center space-y-2
                                ${tip.id === 1
                                    ? "bg-blue-400 border border-blue-600"
                                    : "bg-white border border-blue-200"
                                }`}
                        >
                            <span className="text-4xl">{tip.icon}</span>

                            <p className={`text-xs font-medium ${tip.id === 1 ? "text-white" : "text-blue-400"}`}>
                                {tip.category}
                            </p>

                            <h3 className={`text-lg font-semibold ${tip.id === 1 ? "text-white" : "text-gray-800"}`}>
                                {tip.title}
                            </h3>

                            <p className={`text-sm ${tip.id === 1 ? "text-white" : "text-gray-500"}`}>
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningTips;