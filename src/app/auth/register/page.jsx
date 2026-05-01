import Image from "next/image";
import BgImg from "../../../assets/registerBg.jpg";

const RegisterPage = () => {
  return (
    <div className="relative min-h-[80vh]">
      <Image src={BgImg} alt="background" fill className="object-cover -z-10" />

      <div className=" min-h-[80vh]  pt-[55px]  ">
        <div className="rounded-xl p-4 bg-white/40 backdrop-blur-xg max-w-[752px] px-16 mx-auto">
          <h1 className="text-center text-white font-bold text-2xl md:text-3xl border-b py-8 mx-15">
            Register your account
          </h1>

    
            <form className=" my-6 max-w-[300px] w-full mx-auto ">
              <fieldset className="fieldset">
                <legend className="font-semibold text-[20px] fieldset-legend text-white">
                  Your Name
                </legend>
                <input
                  type="text"
                  className="input "
                  placeholder="Enter your Name"
                />
                {<p className="text-red-500"> </p>}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="font-semibold text-[20px] fieldset-legend text-white">
                  Photo URL
                </legend>
                <input
                  type="url"
                  className="input"
                  placeholder="Enter your Photo Url"
                />
                {<p className="text-red-500"> </p>}
              </fieldset>

              <fieldset className="fieldset">
                <legend className=" font-semibold text-[20px] fieldset-legend text-white">
                  Email{" "}
                </legend>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email address"
                />

                {<p className="text-red-500"> </p>}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="font-semibold text-[20px] fieldset-legend text-white">
                  Password
                </legend>
                <input
                  type="password"
                  className="input"
                  placeholder="Enter your password"
                />
                {<p className="text-red-500"> </p>}
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
