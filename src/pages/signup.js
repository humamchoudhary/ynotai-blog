import React, { useState } from "react";
import { Input } from "antd";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";

function signupPage() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [occu, setOccu] = useState();
  const [loading, setLoading] = useState(false);
  const [errorStop, setErrorStop] = useState("Hello");
  const router = useRouter();

  async function handleSignUp() {
    if (username && password && occu && email) {
      setLoading(true);
      const { result, error } = await signUp(email, password);
      console.log(result);
      console.log(error);
      setLoading(false);
      if (!error) {
        return router.push("/login");
      } else {
        setErrorStop(error);
      }
    } else {
      console.log("empty");
      setErrorStop(true);
    }
  }

  return (
    <div
      className={`flex flex-col w-screen h-screen bg-bg justify-between items-center py-14 `}
    >
      <Image src={"/images/logo.svg"} width={200} height={100} />
      <div className="flex flex-col w-1/5">
        <div className="text-center mb-10 font-semibold cusText-3xl">
          Let Get Started!
        </div>

        {errorStop && (
          <div className="text-center mb-10 font-normal text-red-500 cusText-3xl">
            {errorStop}
          </div>
        )}

        <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2  rounded-lg">
          <AiOutlineUser size={28} className="text-CTA " />
          <Input
            placeholder="Username"
            bordered={false}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="font-normal text-2xl"
          />
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
        <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2  rounded-lg">
          <PiSuitcaseSimpleBold size={28} className="text-CTA " />
          <Input
            placeholder="Occupation"
            bordered={false}
            value={occu}
            onChange={(e) => {
              setOccu(e.target.value);
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
            handleSignUp();
          }}
          className="bg-CTA text-center py-4 rounded-sm mt-4 text-Light hover:cursor-pointer"
        >
          {loading ? <Loader clasname={"loader-WHITE"} /> : "Signup"}
        </div>
        <div className="flex flex-row text-center my-3 mx-auto font-light">
          Already have a account?{" "}
          <Link href={"/login"} className=" ml-3 text-CTA font-medium">
            {" "}
            Login
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

export default signupPage;
