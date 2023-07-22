import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Avatar from "@/components/avatar";
import getAllData from "@/firebase/firestore/getAllData";

const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});
import cheerio from "cheerio";
import addData from "@/firebase/firestore/addData";
import { Timestamp, arrayUnion } from "firebase/firestore";
import udateData from "@/firebase/firestore/updateData";

const extractAndRemoveFirstH1 = (htmlString) => {
  const $ = cheerio.load(htmlString);
  const firstH1 = $("h1").first().html();
  $("h1").first().remove();
  const content = $.html();
  const image = $("img").first().attr("src");
  const plainText = $("html").text();
  const lines = plainText.split("\n");
  const firstThreeLines = lines.slice(0, 3).join("\n");
  return {
    content: content,
    title: firstH1,
    image: image,
    description: firstThreeLines,
  };
};

export const calculateReadTime = (htmlString, averageWordsPerMinute = 250) => {
  // Convert HTML string to plain text
  const $ = cheerio.load(htmlString);
  const plainText = $("html").text();

  // Count the number of words in the plain text
  const wordCount = plainText.split(/\s+/).length;

  // Calculate read time in minutes
  const readTimeMinutes = Math.ceil(wordCount / averageWordsPerMinute);

  return readTimeMinutes;
};
function write() {
  const { user } = useAuthContext();
  const [curUser, setcuruser] = useState();
  const [bdata, setbData] = useState();
  const router = useRouter();
  const [tags, setTags] = useState();
  const [cat, setCat] = useState();
  const [errorStop, setError] = useState();
  const [allCat, setAllCat] = useState([]);

  useEffect(() => {
    console.log(user);
    try {
      const curruser = JSON.parse(localStorage.getItem("userData")).userData;
      setcuruser(JSON.parse(localStorage.getItem("userData")).userData);
      if ((!user && curruser) || !curruser.canWrite) {
        router.push("/login?redir=write");
      }
    } catch {}
    getAllData("categories").then(({ result }) => {
      setAllCat(result);
    });
  }, []);

  function handlePublish() {
    if (bdata && tags && cat) {
      const { title, content, image, description } =
        extractAndRemoveFirstH1(bdata);
      const read_time = calculateReadTime(bdata);
      const tagList = tags.split(",");
      const id = title.replace(/ /g, "-");
      const data = {
        title: title,
        content: content,
        image: image,
        tags: tagList,
        id: id,
        writerId: user.uid,
        date: Timestamp.now(),
        description: description,
        category: cat,
        read_time: read_time,
      };
      console.log(data);
      console.log("data");
      if (
        title &&
        content &&
        image &&
        description &&
        tagList &&
        id &&
        user.uid &&
        description &&
        cat &&
        read_time
      ) {
        addData("blogs", id, data).then(({ result, error }) => {
          console.log(result, error);
          if (error) {
            setError(error);
            console.log("error", error);
          } else {
            udateData("categories", cat, {
              blogIds: arrayUnion(id),
            });
            router.push(`/blog/${id}`);
            // console.log("done", data);
          }
        });
      } else {
        setError("An Error Occured please try again later!");
      }
    } else {
      setError("Please fill all feilds");
    }
  }

  return (
    <>
      <div className="flex flex-row fixed justify-between items-center text-center border-gray-200 border-b-[3px] px-6 py-3 min-h-[3rem] w-screen lg:px-[364px] bg-white text-black z-50">
        <Image src={"/images/logo.svg"} width={180} height={100} />

        <div
          style={{ fontSize: "1rem" }}
          className={`flex flex-row gap-5 justify-center items-center font-semibold  transition-all bg-white `}
        >
          <div
            onClick={() => {
              handlePublish();
            }}
            className="cta hover:bg-Light hover:cursor-pointer"
          >
            Publish
          </div>

          <div>
            {curUser && (
              <Avatar
                name={curUser.name}
                className={"rounded-full mr-3 h-[40px] w-[40px]"}
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex  justify-center pt-32 px-6 py-3 min-h-[3rem] w-screen lg:px-[364px]  sm:px-6">
        <div className="flex flex-col gap-8 w-full max-w-[60rem] ck-content">
          {errorStop && (
            <div className="text-center mb-1 font-normal text-red-500 cusText-md">
              {errorStop}
            </div>
          )}
          <div className="flex flex-row justify-between items-center gap-6">
            <div>
              <label
                htmlFor="price"
                className="flex flex-row gap-5 items-end cusText-head font-medium leading-6 text-gray-900"
              >
                Tags
                <div className="text-light text-gray-400 text-sm">
                  {" "}
                  (Seprated by ,)
                </div>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="tags"
                  name="tags"
                  id="tags"
                  className=" block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset hover:ring-gray-500 duration-200 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-500 sm:text-sm sm:leading-6"
                  placeholder="Tags"
                  value={tags}
                  onChange={(event) => {
                    setTags(event.target.value);
                  }}
                />
              </div>
            </div>
            <form class="w-1/2">
              <label className="flex flex-row gap-5 items-end cusText-head font-medium leading-6 text-gray-900">
                Category
              </label>
              <fieldset>
                <div class="block w-full  mt-2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset hover:ring-gray-500 duration-200 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset outline-none focus:ring-gray-500 sm:text-sm sm:leading-6">
                  <label for="frm-whatever" class="sr-only"></label>
                  <select
                    class="appearance-none w-full  px-2 bg-white"
                    name="whatever"
                    id="frm-whatever"
                    value={cat}
                    onChange={(event) => {
                      setCat(event.target.value);
                    }}
                  >
                    <option value="">Please choose&hellip;</option>
                    {allCat &&
                      allCat.map((item) => (
                        <option value={item.id}>{item.id}</option>
                      ))}
                  </select>
                  <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div>
            <div className="mb-3 cusText-head font-medium">Blog Content</div>
            <Editor setbData={setbData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default write;
