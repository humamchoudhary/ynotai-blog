import Layout from "../components/Layout";
import { RiSearch2Line } from "react-icons/ri";
import Link from "next/link";
import { Input } from "antd";
import { useEffect, useState } from "react";

export default function Blog() {
  const [isElementAtTop, setIsElementAtTop] = useState(false);
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
  console.log(isElementAtTop);
  const blogs = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
      <div className=" flex flex-col sm:flex-row justify-center pt-20 items-start">
        <div className="flex basis-3/4 flex-col border-r-[2.5px] border-gray-200 pt-8 pr-8 sm:pr-12">
          <div className="flex flex-row items-center  mb-6 ">
            <div className="flex flex-row items-center px-4 py-[5px] mr-4 border-2 border-t-[2.5px] max-w-[17rem] rounded-full">
              <RiSearch2Line size={20} color="gray" />
              <Input
                placeholder="Search..."
                bordered={false}
                style={{ fontFamily: "Poppins-Regular", fontSize: "1rem" }}
              />
            </div>
            <div className="flex flex-row items-center justify-between ">
              <h3 className="text-gray-400 text-base font-normal mr-2 ">
                Filters:{" "}
              </h3>
              <button
                on
                className="px-4 py-3 mx-2 bg-gray-200 text-gray-800 text-xs font-normal rounded-full min-w-[3.5rem] hover:bg-gray-500"
              >
                AI
              </button>
              <button className="px-4 py-3 mx-2 bg-gray-200 text-gray-800 text-xs font-normal rounded-full min-w-[3.5rem] hover:bg-gray-500">
                Marketing
              </button>
              <button className="px-4 py-3 mx-2 bg-gray-200 text-gray-800 text-xs font-normal rounded-full min-w-[3.5rem] hover:bg-gray-500">
                Machine Learning
              </button>
            </div>
          </div>
          <div className="border-b-[2.5px] border-gray-200 py-4">
            <h3 className="text-xl font-semibold">All blog posts</h3>
          </div>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.title} className="flex-auto  items-center">
                <div className="flex items-center border-b-[2.5px] border-gray-200 py-6 justify-between">
                  <div>
                    <div className="flex flex-row items-center justify-start mb-4">
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
                          <p className="text-gray-800 text-xs leading-4 font-semibold">
                            {blog.writer}
                          </p>
                        </Link>
                        <p className="text-gray-500 text-xs leading-4 font-normal">
                          {blog.writer_bio}
                        </p>
                      </div>
                    </div>
                    <Link href={`/blogs/${encodeURIComponent(blog.title)}`}>
                      <h3 className="line-clamp-2 text-2xl text-gray-900 font-semibold mb-3">
                        {blog.title}
                      </h3>
                      <p className="line-clamp-2 text-gray-500 text-base leading-5 font-normal mb-6">
                        {blog.description}
                      </p>
                    </Link>
                    <div className="flex flex-row items-center">
                      <p className="text-gray-500 text-sm font-normal">
                        {blog.date}
                      </p>
                      <p className="text-gray-500 text-sm font-normal  px-4 py-1.5 ml-4 bg-gray-200 rounded-full">
                        {blog.read_time} read
                      </p>
                    </div>
                  </div>
                  <div className="ml-6 sm:ml-8 shrink-0">
                    <Link href={`/blogs/${encodeURIComponent(blog.title)}`}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        width={200}
                        height={100}
                        className="rounded"
                      />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex basis-1/4 flex-col pl-8 pt-8 sm:pl-12">
          <div className="flex flex-col items center mb-2">
            <h3 className="text-base font-semibold pb-4">
              People you might be interested in
            </h3>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.title} className="flex-auto  items-center">
                  <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-row items-center justify-start max-w-[14rem]">
                      <img
                        src={blog.writer_img}
                        alt={blog.writer}
                        width={50}
                        height={50}
                        className="rounded-full mr-3"
                      />
                      <div className="flex flex-col">
                        <Link
                          href={`/blogs/${encodeURIComponent(blog.writer)}`}
                        >
                          <p className="text-gray-800 text-sm leading-5 font-semibold">
                            {blog.writer}
                          </p>
                        </Link>
                        <p className="text-gray-500 text-sm leading-5 font-normal">
                          {blog.writer_bio}
                        </p>
                      </div>
                    </div>
                    <button
                      on
                      className="px-5 py-3 border-2 border-gray-200 text-gray-800 text-xs font-normal rounded-full min-w-[3.5rem] hover:bg-gray-400"
                    >
                      Follow
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="trend"></div>
          <div className={isElementAtTop ? "fixed top-[6rem]" : "relative"}>
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
                        <h4 className="line-clamp-2 text-base leading-[1.15rem] text-gray-900 font-semibold mb-2">
                          {blog.title}
                        </h4>
                        <p className="line-clamp-2 text-gray-500 text-sm leading-4 font-normal mb-4">
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
                          <p className="text-gray-500 text-xs leading-4 font-semibold">
                            {blog.writer}
                          </p>
                        </Link>
                        <p className="text-gray-500 text-xs leading-4 font-normal">
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
