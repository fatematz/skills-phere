"use client";
import Image from "next/image";
import BgImg from "../../../assets/registerBg.jpg";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, serIsShowPassword] = useState(false)

  const handleRegisterFunc = async (data) => {
    console.log(data, "data");
    const {email, name, photo, password} = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    })

    console.log(res, error);
    if(error){ toast.error(error.message) }
    if(res){ toast.success("Registration successful! 🎉"); }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({ provider: "google" });
    console.log(data, "data");
  }

  return (
    <div className="relative min-h-[80vh]">
      <Image src={BgImg} alt="background" fill className="object-cover -z-10" />

      <div className="min-h-[80vh] pt-[55px] px-4">
        <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-white/20 max-w-[752px] px-6 sm:px-16 mx-auto mb-13">
          <h1 className="text-center text-white font-bold text-2xl md:text-3xl border-b py-8">
            Register your account
          </h1>

          <form
            className="mt-6 w-full max-w-[300px] mx-auto"
            onSubmit={handleSubmit(handleRegisterFunc)}
          >
            <fieldset className="fieldset">
              <legend className="font-semibold text-[20px] fieldset-legend text-white">
                Your Name
              </legend>
              <input
                type="text"
                className="input w-full"
                {...register("name", { required: "Name Field is required" })}
                placeholder="Enter your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-[16px]">{errors.name.message} !</p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="font-semibold text-[20px] fieldset-legend text-white">
                Photo URL
              </legend>
              <input
                type="photo"
                className="input w-full"
                {...register("photo", { required: "Photo Url Field is required" })}
                placeholder="Enter your Photo Url"
              />
              {errors.photo && (
                <p className="text-red-500 text-[16px]">{errors.photo.message} !</p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="font-semibold text-[20px] fieldset-legend text-white">
                Email
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
            </fieldset>

            <fieldset className="fieldset">
              <legend className="font-semibold text-[20px] fieldset-legend text-white">
                Password
              </legend>
              <div className="relative w-full">
                <input
                  type={isShowPassword ? "text" : "password"}
                  className="input w-full"
                  {...register("password", { required: "Password Field is required" })}
                  placeholder="Enter your password"
                />
                <span className="absolute right-3 top-3 cursor-pointer" onClick={() => serIsShowPassword(!isShowPassword)}>
                  {isShowPassword ? <FaEye/> : <FaEyeSlash/>}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-[16px]">{errors.password.message} !</p>
                )}
              </div>
            </fieldset>

            <p className="text-white mt-4 text-[15px] text-center">I agree to all Term, Privacy and fees</p>

            <button className="btn bg-blue-500 text-white mt-[20px] w-full border-0">
              Sign Up
            </button>
            <p className="text-white mt-4 text-[15px] text-center">OR</p>
          </form>

          <div className="flex justify-center items-center">
            <button onClick={handleGoogleSignIn} className="btn mb-6 mt-4 bg-white text-black max-w-[300px] w-full border-0">
              <FcGoogle size={22} /> Sign in With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;