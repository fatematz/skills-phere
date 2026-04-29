import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            SkillSphere
          </h2>

          <p className="mt-3 text-gray-300">
            Learn. Build. Grow your skills with us.
          </p>

          <div className="mt-4 text-sm text-gray-400">
            <p>Email: support@skillsphere.com</p>
            <p>Phone: +880 1234-567890</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-blue-400">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-blue-400">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          {/* ✅ React Icons here */}
          <div className="flex gap-4 mb-4 text-2xl">
            
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              <FaGithub />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>

          </div>

          <div className="text-sm text-gray-400 space-y-2">
            <p>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;