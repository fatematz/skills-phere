"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserPen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { use } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, "user");

  const pathname = usePathname();

  const linkClass = (path) =>
    `pb-1 border-b-2 transition ${
      pathname === path
        ? "border-blue-500 text-blue-600"
        : "border-transparent text-gray-700"
    }`;

  return (
    <div className="shadow-md sticky top-0 z-50  bg-white-400/20 backdrop-blur-lg">
      <nav className=" py-3 flex justify-between items-center container ">
        <h1 className="text-2xl font-bold text-blue-600">SkillSphere</h1>

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
          {isPending ? <span className="loading loading-dots loading-md"></span> : user && user.image ? (
            <div className="flex justify-center items-center gap-4">
              <div className="relative group cursor-pointer">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border-2 border-blue-500"
                />

                <div
                  className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-lg p-3 
                    hidden group-hover:block border border-gray-100 z-50 text-center"
                >
                  <div className="">
                    <img
                      src={user.image}
                      alt="user img"
                      width={60}
                      height={60}
                      className="mx-auto border-2 border-blue-500 rounded-full"
                    />
                  </div>
                  <p className="font-semibold text-gray-800 my-2">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="">
                <Link href="/auth/login">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    onClick={() => authClient.signOut()}
                  >
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <div className="">
                <UserPen />
              </div>

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
      </nav>
    </div>
  );
};

export default Navbar;
