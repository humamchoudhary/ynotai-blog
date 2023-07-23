import Layout from "../../components/Layout";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";
import { Input } from "antd";
import { useEffect, useState } from "react";
import getAllData from "@/firebase/firestore/getAllData";
import getData from "@/firebase/firestore/getData";
import UserCard from "@/components/UserCard";
import Loader from "@/components/Loader";

export default function Blog() {
  const [isElementAtTop, setIsElementAtTop] = useState(false);
  const [blog, setBlog] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState();
  const [trendUsers, setTrendUsers] = useState([]);
  const [search, setSearch] = useState();
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
      await getAllData("blogs").then(({ result, error }) => {
        setBlog(result);
      });
    }
    initData();
  }, []);

  useEffect(() => {
    async function getTrendings() {
      const trendingUsersData = await getData("trending", "trendingUsers");
      setTrendUsers(trendingUsersData.result.writerId);

      const trendingBlogsData = await getData("trending", "trendingBlogs");
      const data = await Promise.all(
        trendingBlogsData.result.data.map(async (item) => {
          const blogData = await getData("blogs", item);
          return blogData.result;
        })
      );

      setTrendBlogs(data);
    }

    getTrendings();
  }, []);

  useEffect(() => {
    if (search) {
      const searchedBlogs = blog.filter((item) => {
        {
          return item.data.title.toLowerCase().includes(search.toLowerCase());
        }
      });
      console.log(searchedBlogs);
      setBlog(searchedBlogs);
    } else {
      getAllData("blogs").then(({ result, error }) => {
        setBlog(result);
      });
    }
  }, [search]);

  return (
    <Layout>
      <div className=" flex flex-col lg:flex-row justify-center pt-10 lg:pt-20 items-start">
        <div className="flex basis-3/4 flex-col lg:border-r-[2.5px]  border-gray-200 pt-8  lg:pr-12">
          <div className="flex flex-col gap-3 lg:flex-row items-center  mb-6 ">
            <div className="flex flex-row items-center px-4 py-[5px] mr-4 border-2 border-t-[2.5px] max-w-full  2xl:max-w-[17rem] lg:max-w-[8rem] rounded-full">
              <RiSearch2Line size={20} color="gray" />
              <Input
                placeholder="Search..."
                bordered={false}
                className="font-base cusText-md"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            {/* <div className="flex flex-row items-center justify-between ">
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
            </div> */}
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
                });
                return (
                  <li key={item.id} className="flex-auto  items-center">
                    <div className="flex items-center border-b-[2.5px] border-gray-200 py-6 justify-between">
                      <div>
                        <UserCard data={item.data} />
                        <Link href={`/blog/${item.id}`}>
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
                        <Link href={`/blog/${item.id}`}>
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
              {trendUsers &&
                trendUsers.map((blog) => (
                  <li key={blog} className="flex-auto  items-center">
                    <div className="flex flex-row items-center justify-between mb-4">
                      <UserCard data={{ writerId: blog }} />
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
              {trendBlogs &&
                trendBlogs.map((item, index) => {
                  return (
                    <li
                      key={item.title}
                      className="flex max-w-sm items-center "
                    >
                      <div className="flex items-start py-4 justify-between">
                        <div className="mr-3 shrink-0">
                          <h2 className="cusText-3xl font-bold text-gray-400">
                            #{index + 1}
                          </h2>
                        </div>
                        <div>
                          <Link href={`/blog/${item.id}`}>
                            <h4 className="line-clamp-2 text-md leading-[1.15rem]  text-gray-900 font-semibold mb-2">
                              {item.title}
                            </h4>
                            <p className="line-clamp-2 text-gray-500 cusText-md leading-4 font-normal mb-4">
                              {item.description}
                            </p>
                          </Link>
                          <UserCard data={{ writerId: item.writerId }} />
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
