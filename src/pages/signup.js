import React, { useState } from "react";
import { Input } from "antd";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Meta from "@/components/Meta";

function signupPage() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [occu, setOccu] = useState();
  const [loading, setLoading] = useState(false);
  const [errorStop, setErrorStop] = useState();
  const router = useRouter();

  async function handleSignUp() {
    if (username && password && occu && email) {
      setLoading(true);
      const { result, error } = await signUp(email, password, username, occu);
      console.log(result);
      console.log(error);
      setLoading(false);
      if (!error) {
        return router.push("/login");
      } else {
        setErrorStop(error.message);
      }
    } else {
      console.log("empty");
      setErrorStop("Please Fill All Feilds");
    }
  }
  9;

  return (
    <>
    <Meta/>
      <div className="flex flex-col h-screen bg-bg justify-between items-center lg:py-8 2xl:py-14  px-6 py-3 min-h-[3rem] w-screen lg:px-[182px] 2xl:px-[364px]  sm:px-6 duration-300">
        <Image src={"/images/logo.svg"} width={200} height={100} />
        <div className="flex flex-col w-1/5">
          <div className="text-center lg:mb-1 2xl:mb-5 font-semibold cusText-3xl">
            Let Get Started!
          </div>

          {errorStop && (
            <div className="text-center mb-1 font-normal text-red-500 cusText-head">
              {errorStop}
            </div>
          )}

          <div className="flex flex-row items-center px-4 py-[5px]   my-2 border-2  rounded-lg">
            <AiOutlineUser size={28} className="text-CTA " />
            <Input
              placeholder="Display Name"
              bordered={false}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="font-normal cusText-head"
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
              className="font-normal cusText-head"
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
              className="font-normal cusText-head"
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
              className="font-normal cusText-head "
            />
          </div>
          <div
            onClick={() => {
              handleSignUp();
            }}
            className="bg-CTA text-center py-2 2xl:py-4 rounded-sm mt-4 text-Light rounded-sm hover:cursor-pointer"
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
          <p className="text-CTA font-semibold cusText-head">
            Terms & Conditions
          </p>{" "}
          |{" "}
          <p className="text-CTA font-semibold cusText-head">Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default signupPage;
