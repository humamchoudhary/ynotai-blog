import React from "react";
import { Input } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

function Login() {
  return (
    <div className="flex flex-col w-screen h-screen bg-bg justify-center items-center">
      <div className=" border-2 rounded-lg w-2/4 h-2/4 border-black border-opacity-30 flex flex-col justify-evenly  items-center px-32 py-32">
        <Image src={"/images/logo.svg"} width={200} height={100} />
        <div>
          <div className="flex flex-row items-center px-4 py-[5px] mr-4 border-2 border-t-[2.5px]  rounded-lg">
            <AiOutlineMail size={32} className="text-CTA " />
            <Input
              placeholder="Email"
              bordered={false}
              className="font-semibold text-lg"
            />
          </div>
          <div className="flex flex-row items-center px-4 py-[5px] mr-4 border-2 border-t-[2.5px]  rounded-lg">
            <AiOutlineMail size={32} className="text-CTA " />
            <Input
              placeholder="Password"
              bordered={false}
              className="font-semibold text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
