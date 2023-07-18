import React from "react";
import { Input } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
function Login() {
  return (
    <div
      className={`flex flex-col w-screen h-screen bg-bg justify-between items-center py-14 `}
    >
      <Image src={"/images/logo.svg"} width={200} height={100} />
      <div className="flex flex-col">
        <div className="text-center mb-10 font-semibold text-4xl">
          Welcome Back
        </div>
        <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2  rounded-lg">
          <AiOutlineMail size={28} className="text-CTA " />
          <Input
            placeholder="Email"
            bordered={false}
            className="font-normal text-2xl"
          />
        </div>
        <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2   rounded-lg">
          <FiLock size={28} className="text-CTA " />

          <Input
            id="password"
            placeholder="Password"
            bordered={false}
            type="password"
            className="font-normal text-2xl "
          />
        </div>
        <div className="bg-CTA text-center py-4 rounded-sm mt-4 text-Light">
          Login
        </div>
        <div className="flex flex-row text-center my-3 mx-auto font-light">
          Dont have a account yet?{" "}
          <Link href={"/Signup"} className="ml-3 text-CTA font-medium">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <p className="text-CTA font-semibold text-lg">Terms & Conditions</p> |{" "}
        <p className="text-CTA font-semibold text-lg">Privacy Policy</p>
      </div>
    </div>
  );
}

export default Login;
