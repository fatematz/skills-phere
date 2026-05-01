import Link from "next/link";
import loginImg from "../../../assets/login3.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div>
      <div className=" min-h-[70vh] bg-slate-100 pt-16  ">
        <div className="rounded-xl overflow-hidden bg-white  max-w-[1200px] mx-auto">
         

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-[60px] pl-[100px]">
            <div className=" flex justify-center items-center   ">
              <form className="w-full">
                 <h1 className=" max-w-[320px] text-blue-500 font-bold text-3xl border-b py-8 my-[20px]">
            Login Your Account
          </h1>
                <fieldset className="fieldset">
                  <legend className=" font-semibold text-[20px] fieldset-legend">
                    Email address
                  </legend>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your email address"
                  />

                  {<p className="text-red-500"> </p>}
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="font-semibold text-[20px] fieldset-legeLnd">
                    Password
                  </legend>
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter your password"
                  />
                  {<p className="text-red-500"> </p>}
                </fieldset>

                <button className="btn bg-blue-500 text-white max-w-[320px] w-full mt-[20px]">
                  Login
                </button>

                <h4 className="text-[#706F6F] mt-4 ">
                  Dont’t Have An Account ?{" "}
                  <Link href="/register" className="text-red-500">
                    Register
                  </Link>{" "}
                </h4>
              </form>
            </div>

            <div className="  flex justify-center items-center w-full  ">
              <Image src={loginImg} alt="Login Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
