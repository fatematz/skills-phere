"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, UserPen, Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { use, useState } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    `pb-1 border-b-2 transition ${
      pathname === path
        ? "border-blue-500 text-blue-600"
        : "border-transparent text-gray-700"
    }`;

  return (
    <div className="shadow-md sticky top-0 z-50 bg-white-400/20 backdrop-blur-lg">
      <nav className="py-3 flex justify-between items-center container px-[20px] md:px-[20px] lg:px-[20px] xl:px-0">
        <h1 className="text-2xl font-bold text-blue-600">SkillSphere</h1>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/courseCard" className={linkClass("/courseCard")}>All Courses</Link>
          <Link href="/profile" className={linkClass("/profile")}>My Profile</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isPending ? <span className="loading loading-dots loading-md"></span> : user && user.image ? (
            <div className="flex justify-center items-center gap-4">
              <div className="relative group cursor-pointer">

                <img src={user.image} alt="user img" 
                      className="mx-auto border-2 border-blue-500 rounded-full object-cover w-[50px] h-[50px] " />

                <div className="absolute -right-30 top-12 w-70 bg-white shadow-lg rounded-lg p-3
                    hidden group-hover:block border border-gray-100 z-50 text-center mt-4">
                  <div className="">
                    <img src={user.image} alt="user img" 
                      className="mx-auto border-2 border-blue-500 rounded-full object-cover w-[50px] h-[50px] " />
                  </div>
                  <p className="font-semibold text-gray-800 my-2">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="">
                <Link href="/auth/login">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 flex justify-center items-center gap-1"
                    onClick={() => authClient.signOut()}
                  >
                    Logout <LogOut size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <div className=""><UserPen /></div>
              <div className="">
                <Link href="/auth/login">
                  <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white">
                    login
                  </button>
                </Link>
              </div>
              <div className="">
                <Link href="/auth/register">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                    register
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t font-medium">
          <Link href="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/courseCard" className={linkClass("/courseCard")} onClick={() => setMenuOpen(false)}>All Courses</Link>
          <Link href="/profile" className={linkClass("/profile")} onClick={() => setMenuOpen(false)}>My Profile</Link>

          <div className="border-t pt-4">
            {user && user.image ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={user.image} alt="user img" width={40} height={40}
                    className="border-2 border-blue-500 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <Link href="/auth/login">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 flex items-center gap-1"
                    onClick={() => authClient.signOut()}
                  >
                    Logout <LogOut size={16} />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <UserPen />
                <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
                  <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white w-full">
                    login
                  </button>
                </Link>
                <Link href="/auth/register" onClick={() => setMenuOpen(false)}>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 w-full">
                    register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;