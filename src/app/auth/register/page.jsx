'use client'
import Image from "next/image";
import BgImg from "../../../assets/registerBg.jpg";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
  
    const handleRegisterFunc = (data) => {
  
      console.log(data, "data");
    }
    console.log(errors);

  return (
    <div className="relative min-h-[80vh] ">
      <Image src={BgImg} alt="background" fill className="object-cover -z-10" />

      <div className=" min-h-[80vh]  pt-[55px]">
        <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-white/20 max-w-[752px] px-16 mx-auto mb-13">
          <h1 className="text-center text-white font-bold text-2xl md:text-3xl border-b py-8 mx-15">
            Register your account
          </h1>

    
            <form className=" my-6 max-w-[300px] w-full mx-auto  "  onSubmit={handleSubmit(handleRegisterFunc)}> 
              <fieldset className="fieldset">
                <legend className="font-semibold text-[20px] fieldset-legend text-white">
                  Your Name
                </legend>
                <input
                  type="text"
                  className="input "
                   {...register("name" , { required: "Name Field is required"})}
                  placeholder="Enter your Name"
                />
              
               {errors.name && <p className="text-red-500 text-[16px]">{ errors.name.message} ! </p>}

              </fieldset>

              <fieldset className="fieldset">
                <legend className="font-semibold text-[20px] fieldset-legend text-white">
                  Photo URL
                </legend>
                <input
                  type="photo"
                  className="input"
                   {...register("photo" , { required: "Photo Url Field is required"})}
                  placeholder="Enter your Photo Url"
                />

               {errors.photo && <p className="text-red-500 text-[16px]">{ errors.photo.message} ! </p>}

              </fieldset>

              <fieldset className="fieldset">
                <legend className=" font-semibold text-[20px] fieldset-legend text-white">
                  Email{" "}
                </legend>
                <input
                  type="email"
                  className="input"
                   {...register("email" , { required: "Email Field is required"})}
                  placeholder="Enter your email address"
                />

                 {errors.email && <p className="text-red-500 text-[16px]">{ errors.email.message} ! </p>}
               

              </fieldset>

              <fieldset className="fieldset">
                <legend className="font-semibold text-[20px] fieldset-legend text-white">
                  Password
                </legend>
                <input
                  type="password"
                  className="input"
                   {...register("password" , { required: "Password Field is required"})}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-[16px]">{ errors.password.message} ! </p>}
                

              </fieldset>

              <button className="btn bg-blue-500 text-white  mt-[20px] max-w-[320px] w-full border-0">
                Register
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default RegisterPage;
