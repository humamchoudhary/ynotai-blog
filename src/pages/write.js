import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../components/Editor'), {
  ssr: false,
});

function write() {
  return (
    <>
      <div className="flex flex-row fixed justify-between items-center text-center border-gray-200 border-b-[3px] px-6 py-3 min-h-[3rem] w-screen lg:px-[364px] bg-white text-black z-50">
        <Image src={"/images/logo.svg"} width={180} height={100} />
        <div
          style={{ fontSize: "1rem" }}
          className={`flex flex-row gap-5 justify-center items-center font-semibold 
          transition-all bg-white font-semibold`}
        >
          <Link href="/" className="cta">
            Publish
          </Link>

          <Link href="/">
            <IoIosNotificationsOutline size={30} color="gray" />
          </Link>

          <Link href="/">
            <img
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              }
              alt={"ash"}
              width={40}
              height={40}
              className="rounded-full "
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-center pt-20 px-6 py-3 min-h-[3rem] w-screen lg:px-[364px]  sm:px-6">
        <div className="flex flex-col w-full max-w-[60rem] ck-content">
            <Editor />
        </div>
      </div>
    </>
  );
}

export default write;
