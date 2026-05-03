import { Timer, PenLine, CalendarDays, PhoneOff } from "lucide-react";

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
        <div className="bg-gray-50 ">
            <div className="container py-10 px-[20px] md:px-[20px] lg:px-[20px] xl:px-0 ">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 ">
                    Learning Tips
                    <span className="block h-1 w-16 bg-blue-400  mt-2 rounded"></span>
                </h2>

                <div className=" mx-[20px] md:mx-[20px] lg:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 py-[40px] ">
                    {learningTips.map(tip => {

                        const IconComponent = 
                            tip.id === 1 ? Timer : 
                            tip.id === 2 ? PenLine : 
                            tip.id === 3 ? CalendarDays : 
                            PhoneOff;

                            return(
                        <div
                            key={tip.id}
                            className={` py-15 px-3  shadow-md hover:shadow-xl transition duration-300 text-center space-y-2
                                ${tip.id === 1
                                    ? "bg-blue-400 "
                                    : ""
                                }`}
                        >
                            <div className="flex justify-center items-center mb-3 w-[50] h-[50] p-2 mx-auto rounded-full bg-black">
                            <IconComponent size={25} strokeWidth={1.5} className={` ${tip.id === 1 ? "text-white" : "text-white"}  `} />
                            </div>

                            <p className={`text-[16px] font-medium ${tip.id === 1 ? "text-white" : "text-blue-400"}`}>
                                {tip.category}
                            </p>

                            <h3 className={`text-2xl font-semibold ${tip.id === 1 ? "text-white" : "text-gray-800"}`}>
                                {tip.title}
                            </h3>

                            <p className={`text-sm ${tip.id === 1 ? "text-white" : "text-gray-500"}`}>
                                {tip.description}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LearningTips;