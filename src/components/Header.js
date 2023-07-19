import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isopen, setOpen] = useState(false);
  
  return (
    <div className="  flex flex-row fixed justify-between items-center text-center border-gray-200 border-b-[3px] px-6 py-3 lg:py-1 2xl:py-3 min-h-[1rem] 2xl:min-h-[3rem] w-screen lg:px-[182px] 2xl:px-[364px] bg-white text-black z-50">
      {/* <h1 className="text-4xl font-bold">LOGO</h1> */}
      <img src={"/images/logo.svg"} className="w-[120px]  2xl:w-[180px] " />
      <div
        className="lg:hidden"
        onClick={() => {
          setOpen(!isopen);
        }}
      >
        {isopen ? (
          <AiOutlineClose className=" text-bold text-2xl" />
        ) : (
          <FiMenu className=" text-bold text-2xl" />
        )}
      </div>

      <div
        className={`flex flex-col gap-10 justify-center items-center fixed top-12 font-inter
        transition-all cusText-head
         ${
           isopen ? "left-0" : "left-full"
         } w-screen h-screen lg:relative px-[0.75rem] py-[1rem] lg:left-0 lg:w-max lg:h-max font-semibold lg:flex-row lg:top-0 sm:left-0`}
      >
        <Link href="/" style={{ color: "black" }}>
          Home
        </Link>

        <Link href="/blog" style={{ color: "black" }}>
          Blog
        </Link>
        <Link href="/portfolio" style={{ color: "black", margin: "0 20" }}>
          Portfolio
        </Link>
        <Link href="/" style={{ color: "black" }}>
          Contact
        </Link>
      </div>
      <div
        className={`flex flex-col gap-5 justify-center items-center font-semibold fixed top-12
      transition-all cusText-head
       ${
         isopen ? "left-0" : "left-full"
       } bg-white w-screen h-screen lg:relative lg:left-0 lg:w-max font-semibold lg:h-max lg:flex-row lg:top-0 sm:left-0`}
      >
        <Link href="/" style={{ color: "black" }}>
          Log in
        </Link>

        <Link href="/" className="cta">
          Sign up
        </Link>
      </div>
    </div>
  );
}
