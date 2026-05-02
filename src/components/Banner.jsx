import Link from "next/link";
import img1 from "@/assets/image2.png"

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white pt-10 md:pt-20 overflow-hidden">
      
      <div className="container mx-auto px-[20px] md:px-[20px] lg:px-[20px] xl:px-0"> 
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10">
          
          <div className="pb-5 md:pb-40 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Learn, Build & Grow with SkillSphere
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Join thousands of learners and master in-demand skills with structured courses, real projects, and expert guidance.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="">
                <Link href="/courses">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-medium">
                    Browse Courses
                  </button>
                </Link>
              </div>

              <div className="">
                <Link href="/about">
                  <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition font-medium">
                    Explore Platform
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img 
              src={img1.src} 
              alt="Banner Illustration" 
              width={800}
              className="w-full md:w-[800px]"
            />
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Banner;