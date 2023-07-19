import React, { useState } from "react";
import { Input } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  async function handleSignIn() {
    if (password && email) {
      const { result, error } = await signIn(email, password);
      console.log(result);
      console.log(error);
      return router.push("/login");
    }
  }

  return (
    <div
      className={`flex flex-col w-screen h-screen bg-bg justify-between items-center py-14 `}
    >
      <Image src={"/images/logo.svg"} width={200} height={100} />
      <div className="flex flex-col w-1/5">
        <div className="text-center mb-10 font-semibold cusText-3xl  ">
          Welcome Back
        </div>
        <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2  rounded-lg">
          <AiOutlineMail size={28} className="text-CTA " />
          <Input
            placeholder="Email"
            bordered={false}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="font-normal text-2xl"
          />
        </div>
        <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2   rounded-lg">
          <FiLock size={28} className="text-CTA " />

          <Input
            id="password"
            placeholder="Password"
            bordered={false}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="font-normal text-2xl "
          />
        </div>
        <div
          onClick={() => {
            handleSignIn();
          }}
          className="bg-CTA text-center py-4 rounded-sm mt-4 text-Light hover:cursor-pointer"
        >
          Login
        </div>
        <div className="flex flex-row text-center my-3 mx-auto font-light">
          Dont have a account yet?{" "}
          <Link href={"/signup"} className="ml-3 text-CTA font-medium">
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
