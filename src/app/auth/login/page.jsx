"use client";
import Link from "next/link";
import loginImg from "../../../assets/login3.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, serIsShowPassword] = useState(false)

  const handleLoinFunc = async (data) => {
    const {email, password} = data;
    const { data:res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);

    if(error){ toast.error(error.message) }
    if(res){ toast.success("Login successful!"); }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({ provider: "google" });
    console.log(data, "data");
  }

  return (
    <div>
      <div className="min-h-[70vh] bg-slate-100 py-16">
        <div className="rounded-xl bg-white max-w-[1200px] mx-auto ">

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-6 sm:px-10 md:px-16">

            <div className="flex justify-center items-center">
              <form className="w-full max-w-[320px]" onSubmit={handleSubmit(handleLoinFunc)}>
                <h1 className="text-blue-500 font-bold text-3xl border-b py-8 my-[20px]">
                  Login Your Account
                </h1>

                <fieldset className="fieldset">
                  <legend className="font-semibold text-[20px] fieldset-legend">
                    Email address
                  </legend>
                  <input
                    type="email"
                    className="input w-full"
                    {...register("email", { required: "Email Field is required" })}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[16px]">{errors.email.message} !</p>
                  )}
                  {<p className="text-red-500"> </p>}
                  {<p className="text-red-500"> </p>}
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="font-semibold text-[20px] fieldset-legeLnd">
                    Password
                  </legend>
                  <div className="relative w-full">
                    <input
                      type={isShowPassword ? "text" : "password"}
                      className="input w-full"
                      {...register("password", { required: "Password Field is required" })}
                      placeholder="Enter your password"
                    />
                    <span className="absolute top-3 right-3 cursor-pointer" onClick={() => serIsShowPassword(!isShowPassword)}>
                      {isShowPassword ? <FaEye/> : <FaEyeSlash/>}
                    </span>
                    {errors.password && (
                      <p className="text-red-500 text-[16px]">{errors.password.message} !</p>
                    )}
                    {<p className="text-red-500"> </p>}
                  </div>
                </fieldset>

                <p className="text-black mt-4 text-center text-[15px]">I agree to all Term, Privacy and fees</p>

                <button className="btn bg-blue-500 text-white w-full mt-4">
                  Login
                </button>

                <div className="mt-4">
                  <p className="text-black text-center text-[15px]">Forgot Login Details? <span className="text-blue-500">Reset</span></p>
                  <p className="text-black text-center mt-4 text-[15px]">OR</p>
                </div>

                <button type="button" onClick={handleGoogleSignIn} className="btn bg-black mt-4 text-white w-full border-0">
                  <FcGoogle size={22} /> Sign in With Google
                </button>

                <h4 className="text-[#706F6F] mt-4 text-center">
                  Don't Have An Account ?{" "}
                  <Link href="/auth/register" className="text-red-500">Register</Link>
                </h4>
              </form>
            </div>

            <div className="hidden md:flex justify-center items-center w-full">
              <Image src={loginImg} alt="Login Image" className="w-full max-w-[400px]" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;