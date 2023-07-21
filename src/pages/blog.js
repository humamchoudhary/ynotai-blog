import Layout from "../components/Layout";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";
import { Input } from "antd";
import { useEffect, useState } from "react";
import getAllData from "@/firebase/firestore/getAllData";
import Avatar from "@/components/avatar";
import getData from "@/firebase/firestore/getData";
import UserCard from "@/components/UserCard";
import Loader from "@/components/Loader";
export default function Blog() {
  const [isElementAtTop, setIsElementAtTop] = useState(false);
  const [blog, setBlog] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("trend");
      const rect = element.getBoundingClientRect();
      const isAtTop = rect.top <= 42;
      setIsElementAtTop(isAtTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    async function initData() {
      setLoading(true);
      const data = localStorage.getItem("userData");
      if (data) {
        setUserData(JSON.parse(data));
      }
      await getAllData("blogs").then(({ result, error }) => {
        setBlog(result);
      });
    }
    initData();
  }, []);

  const trending_blogs = [
    {
      trending: "01",
      writer: "Abdullah Ash",
      writer_bio: "Full-Stack Developer",
      writer_img:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Blog 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna molestie neque scelerisque laoreet at dapibus arcu. Morbi maximus ornare commodo. Maecenas eget. ",
      date: "Apr 18, 2023",
      read_time: "4 min",
      image:
        "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      trending: "02",
      writer: "Humam Ch",
      writer_bio: "Tech Enthusiast and Game Developer",
      writer_img:
        "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title:
        "Our Statements On the U.S. Supreme Court’s Decision To Overturn Affirmative Action",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna molestie neque scelerisque laoreet at dapibus arcu. Morbi maximus ornare commodo. Maecenas eget. ",
      date: "July 14, 2023",
      read_time: "8 min",
      image:
        "https://images.unsplash.com/photo-1678995632928-298d05d41671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGFpfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      trending: "03",
      writer: "Ali",
      writer_bio: "SEO Specialist",
      writer_img:
        "https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title:
        "Our Statements On the U.S. Supreme Court’s Decision To Overturn Affirmative Action",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna molestie neque scelerisque laoreet at dapibus arcu. Morbi maximus ornare commodo. Maecenas eget.",
      date: "Jan 21, 2022",
      read_time: "10 min",
      image:
        "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFpfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    // Add more blogs here
  ];

  return (
    <Layout>
      <div className=" flex flex-col lg:flex-row justify-center pt-10 lg:pt-20 items-start">
        <div className="flex basis-3/4 flex-col lg:border-r-[2.5px]  border-gray-200 pt-8  lg:pr-12">
          <div className="flex flex-col gap-3 lg:flex-row items-center  mb-6 ">
            <div className="flex flex-row items-center px-4 py-[5px] mr-4 border-2 border-t-[2.5px] max-w-full  2xl:max-w-[17rem] max-w-[8rem] rounded-full">
              <RiSearch2Line size={20} color="gray" />
              <Input
                placeholder="Search..."
                bordered={false}
                className="font-base cusText-md"
              />
            </div>
            <div className="flex flex-row items-center justify-between ">
              <h3 className="text-gray-400 cusText-md font-normal mr-2 ">
                Filters:{" "}
              </h3>
              <button
                on
                className="whitespace-nowrap px-4 py-2 lg:py-4 lg:px-6 mx-2 bg-gray-200 text-gray-800 cusText-md font-normal rounded-full hover:bg-gray-500 duration-150 hover:text-white"
              >
                AI
              </button>
              <button className="whitespace-nowrap px-4 py-2 lg:py-4 lg:px-6 mx-2 bg-gray-200 text-gray-800 cusText-md font-normal rounded-full  hover:bg-gray-500 duration-150 hover:text-white">
                Marketing
              </button>
              <button className="whitespace-nowrap px-4 py-2 lg:py-4 lg:px-6 mx-2 bg-gray-200 text-gray-800 cusText-md font-normal rounded-full  hover:bg-gray-500 duration-150 hover:text-white">
                Machine Learning
              </button>
            </div>
          </div>
          <div className="border-b-[2.5px] border-gray-200 py-4">
            <h3 className="text-xl font-semibold">All blog posts</h3>
          </div>
          <ul>
            {blog ? (
              blog.map((item) => {
                const milliseconds =
                  item.data.date.seconds * 1000 +
                  item.data.date.nanoseconds / 1000000;
                const date = new Date(milliseconds);
                //  const username
                var username = "";
                var occu = "";
                getData("Users", item.data.writerId).then(({ result }) => {
                  username = result.name;
                  occu = result.occu;
                  console.log(username);
                });
                return (
                  <li key={item.id} className="flex-auto  items-center">
                    <div className="flex items-center border-b-[2.5px] border-gray-200 py-6 justify-between">
                      <div>
                        <UserCard data={item.data} />
                        <Link href={`/blogs/${encodeURIComponent(item.id)}`}>
                          <h3 className="line-clamp-2 cusText-3xl text-gray-900 font-semibold mb-3">
                            {item.data.title}
                          </h3>
                          <p className="line-clamp-2 text-gray-500 cusText-md leading-5 font-normal mb-6 lg:block hidden">
                            {item.data.description}
                          </p>
                        </Link>
                        <div className="flex flex-row items-center">
                          <p className="text-gray-500 cusText-md font-normal">
                            {date.toDateString()}
                          </p>
                          <p className="text-gray-500 cusText-md font-normal  px-4 py-1.5 ml-4 bg-gray-200 rounded-full">
                            {Math.floor(item.data.read_time / 60)} mins read
                          </p>
                        </div>
                      </div>
                      <div className="ml-6 sm:ml-8 shrink-0">
                        <Link
                          href={`/blogs/${encodeURIComponent(item.data.title)}`}
                        >
                          <img
                            src={item.data.image}
                            alt={item.data.title}
                            className="rounded w-[150px]  lg:w-[200px] object-cover "
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <div className="flex bg-black">
                <Loader clasname={"loader-CTA"} />
              </div>
            )}
          </ul>
        </div>
        <div className="flex 2xl:basis-1/4 lg:basis-2/5 flex-col pl-2 pt-8 sm:pl-12">
          <div className="flex flex-col items center mb-2">
            <h3 className="text-base font-semibold pb-4">
              People you might be interested in
            </h3>
            <ul>
              {blog.map((blog) => (
                <li key={blog.title} className="flex-auto  items-center">
                  <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-row items-center justify-start max-w-[14rem]">
                      <img
                        src={blog.writer_img}
                        alt={blog.writer}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div className="flex flex-col">
                        <Link
                          href={`/blogs/${encodeURIComponent(blog.writer)}`}
                        >
                          <p className="text-gray-800 cusText-md leading-5 font-semibold">
                            {blog.writer}
                          </p>
                        </Link>
                        <p className="text-gray-500 cusText-md leading-5 font-normal">
                          {blog.writer_bio}
                        </p>
                      </div>
                    </div>
                    <button
                      on
                      className="px-5 py-3 border-2 border-gray-200 text-gray-800 cusText-md font-normal rounded-full min-w-[3.5rem] hover:bg-gray-500 duration-150 hover:text-white"
                    >
                      Follow
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="trend"></div>
          <div
            className={
              isElementAtTop ? "fixed top-[6rem] lg:max-w-[300px]" : "relative"
            }
          >
            <div className="border-b-[2.5px] border-gray-200 py-4">
              <h3 className="text-xl font-semibold">Trending</h3>
            </div>
            <ul>
              {trending_blogs.map((blog) => (
                <li key={blog.title} className="flex max-w-sm items-center ">
                  <div className="flex items-start py-4 justify-between">
                    <div className="mr-3 shrink-0">
                      <h2 className="text-3xl font-bold text-gray-400">
                        {blog.trending}
                      </h2>
                    </div>
                    <div>
                      <Link href={`/blogs/${encodeURIComponent(blog.title)}`}>
                        <h4 className="line-clamp-2 text-base text-xl leading-[1.15rem]  text-gray-900 font-semibold mb-2">
                          {blog.title}
                        </h4>
                        <p className="line-clamp-2 text-gray-500 cusText-md leading-4 font-normal mb-4">
                          {blog.description}
                        </p>
                      </Link>
                      <div className="flex flex-row items-center justify-start">
                        <img
                          src={blog.writer_img}
                          alt={blog.writer}
                          width={25}
                          height={25}
                          className="rounded-full mr-3"
                        />
                        <Link
                          href={`/blogs/${encodeURIComponent(blog.writer)}`}
                        >
                          <p className="text-gray-500 cusText-md leading-4 font-semibold">
                            {blog.writer}
                          </p>
                        </Link>
                        <p className="text-gray-500 ml-2 cusText-md leading-4 font-normal">
                          {" "}
                          - {blog.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
