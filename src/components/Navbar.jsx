"use client";

import Image from "next/image";
import UserImg from "@/assets/user.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `pb-1 border-b-2 transition ${
      pathname === path
        ? "border-blue-500 text-blue-600"
        : "border-transparent text-gray-700"
    }`;

  return (
    <div className="shadow-md">
      <nav className="bg-white  py-3 flex justify-between items-center container ">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          SkillSphere
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-6 font-medium">
          
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/courses" className={linkClass("/courses")}>
            Courses
          </Link>

          <Link href="/profile" className={linkClass("/profile")}>
            My Profile
          </Link>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          <Image src={UserImg} width={40} height={40} alt="user" />

          <Link href="/login">
            <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
              Register
            </button>
          </Link>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;