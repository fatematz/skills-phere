"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserPen } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `pb-1 border-b-2 transition ${
      pathname === path
        ? "border-blue-500 text-blue-600"
        : "border-transparent text-gray-700"
    }`;

  return (
    <div className="shadow-md sticky top-0 z-50 bg-transparent">
      <nav className=" py-3 flex justify-between items-center container ">
        
        <h1 className="text-2xl font-bold text-blue-600">
          SkillSphere
        </h1>

        <div className="hidden md:flex gap-6 font-medium">
          
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/courseCard" className={linkClass("/courseCard")}>
            All Courses
          </Link>

          <Link href="/profile" className={linkClass("/profile")}>
            My Profile
          </Link>

        </div>

        <div className="flex items-center gap-4">
        
          
          <UserPen/>

          <Link href="/auth/login">
            <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white">
              login
            </button>
          </Link>

          <Link href="/auth/register">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
              register
            </button>
          </Link>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;