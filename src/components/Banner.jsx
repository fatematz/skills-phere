import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      
      <div className="container mx-auto "> 
        
        <div className="md:w-1/2">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Learn, Build & Grow with SkillSphere
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Join thousands of learners and master in-demand skills with structured courses, real projects, and expert guidance.
          </p>

          <div className="mt-6 flex gap-4">
            
            <Link href="/courses">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
                Browse Courses
              </button>
            </Link>

            <Link href="/about">
              <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                Explore Platform
              </button>
            </Link>

          </div>

        </div>


      </div>
      
    </section>
  );
};

export default Banner;