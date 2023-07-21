import Layout from "../components/Layout";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import Link from "next/link";
import { Input } from "antd";
import { useEffect, useState } from "react";


export default function template() {
 
  const blog = 
    {
      writer: "Abdullah Ash",
      writer_bio: "Full-Stack Developer",
      writer_img:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Our Statements On the U.S. Supreme Court’s Decision To Overturn Affirmative Action",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna molestie neque scelerisque laoreet at dapibus arcu. Morbi maximus ornare commodo. Maecenas eget. ",
      data: <><h1>10 Expert Performance Tips Every Senior JS React Developer Should Know</h1><p>&nbsp;</p><figure class="image"><img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*PKXYRV7mJ6QEWZLxHZDnUA.png"/></figure><p>&nbsp;</p><h2>Number 1:</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in orci eu arcu iaculis laoreet ut vel ante. Nam et mollis est. Nulla auctor sed mi nec malesuada. Nunc interdum velit justo, nec interdum enim mattis quis. Sed non tellus venenatis, vestibulum neque quis, iaculis erat. Sed cursus urna vitae pharetra bibendum. Sed orci urna, maximus vitae condimentum sed, ultrices suscipit mauris. Suspendisse id feugiat ante. Sed vehicula nulla in libero ornare, et aliquet justo eleifend. Nunc venenatis ullamcorper pulvinar. Cras rhoncus augue felis, eget ullamcorper lorem gravida vitae. In scelerisque fringilla odio nec interdum.</p><p>&nbsp;</p><h3>Number 2:</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in orci eu arcu iaculis laoreet ut vel ante. Nam et mollis est. Nulla auctor sed mi nec malesuada. Nunc interdum velit justo, nec interdum enim mattis quis. Sed non tellus venenatis, vestibulum neque quis, iaculis erat. Sed cursus urna vitae pharetra bibendum. Sed orci urna, maximus vitae condimentum sed, ultrices suscipit mauris. Suspendisse id feugiat ante. Sed vehicula nulla in libero ornare, et aliquet justo eleifend. Nunc venenatis ullamcorper pulvinar. Cras rhoncus augue felis, eget ullamcorper lorem gravida vitae. In scelerisque fringilla odio nec interdum.</p><p>&nbsp;</p><h4>Number 3:</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in orci eu arcu iaculis laoreet ut vel ante. Nam et mollis est. Nulla auctor sed mi nec malesuada. Nunc interdum velit justo, nec interdum enim mattis quis. Sed non tellus venenatis, vestibulum neque quis, iaculis erat. Sed cursus urna vitae pharetra bibendum. Sed orci urna, maximus vitae condimentum sed, ultrices suscipit mauris. Suspendisse id feugiat ante. Sed vehicula nulla in libero ornare, et aliquet justo eleifend. Nunc venenatis ullamcorper pulvinar. Cras rhoncus augue felis, eget ullamcorper lorem gravida vitae. In scelerisque fringilla odio nec interdum.</p><p>&nbsp;</p></>,
      category:['Developer'],
      tags: ['Machine Learning','Javascript','Integration'],
      date: "Apr 18, 2023",
      read_time: "4 min",
      image:
        "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    }

    const related_blogs = [
        {
          category: "Javascript",
          writer: "Abdullah Ash",
          writer_bio: "Full-Stack Developer",
          writer_img:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          title: "Our Statements On the U.S. Supreme Court’s Decision To Overturn Affirmative Action",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna molestie neque scelerisque laoreet at dapibus arcu. Morbi maximus ornare commodo. Maecenas eget. ",
          date: "Apr 18, 2023",
          read_time: "4 min",
          image:
            "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
        },
        {
          category: "Machine Learning",
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
          category: "Integration",
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
      ];

  return (
    <Layout>
      <div className="flex flex-col justify-center mx-auto px-[2rem] pt-[8rem] pb-[3rem]">
        <div className="flex flex-col mb-[5rem] gap-8">
            <h1 className="text-5xl font-bold text-gray-800">{blog.title}</h1>
            <div className="flex flex-row items-center justify-start">
                <img
                src={blog.writer_img}
                alt={blog.writer}
                width={60}
                height={60}
                className="rounded-full mr-3"
                />
                <div className="flex flex-col">
                <div className="flex flex-row gap-3 items-center mb-2">
                <Link
                    href={`/blogs/${encodeURIComponent(blog.writer)}`}
                >
                    <p className="text-gray-800 text-xl leading-5 font-semibold hover:underline hover:text-CTA duration-200">
                    {blog.writer}
                    </p>
                </Link>
                <FaUserPlus size={20} color="black" className="hover:cta"/>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="flex flex-row gap-1 items-center">
                        <BsCalendarCheck size={18} color="gray"/>
                        <p className="text-gray-500 text-lg leading-5 ">{blog.date}</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <HiOutlineClock size={20} color="gray"/>
                        <p className="text-gray-500 text-lg leading-5 ">{blog.read_time} read</p>
                    </div>
                </div>
                </div>
            </div>
            <img
                src={blog.image}
                alt={blog.title}
                className="h-auto max-w-full object-cover"
            />
        </div>
        <div className="flex flex-row justify-between mb-12">
            <div className="flex flex-col w-full max-w-[9rem] gap-2">
            <p className="text-gray-500 text-base leading-4">Written by</p>
                <div className="flex flex-row items-center justify-start">
                    <img
                    src={blog.writer_img}
                    alt={blog.writer}
                    className="h-5 w-5 rounded-full mr-2"
                    />
                    <Link
                        href={`/blogs/${encodeURIComponent(blog.writer)}`}
                    >
                        <p className="text-CTA  text-base leading-4 font-semibold hover:underline  duration-200">
                        {blog.writer}
                        </p>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col px-10">
                <article className="text-lg text-gray-800 leading-5 ck-content  ">
                    {blog.data}
                </article>
            </div>
            <div className="flex flex-col w-full max-w-[9rem]">
                <div className="flex flex-col gap-2 mb-6">
                    <p className="text-gray-500 text-base leading-4">Category</p>
                    <ul className="gap-2">
                        {blog.category.map((item, index) => (
                            <Link href={'/'}>
                                <li key={index} className="text-CTA  text-base leading-4 font-semibold hover:underline  duration-200">{item}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2 ">
                    <p className="text-gray-500 text-base leading-4">Tagged</p>
                    <ul className="flex flex-col gap-2">
                        {blog.tags.map((item, index) => (
                            <Link href={'/'}>
                                <li key={index} className="text-CTA  text-base leading-4 font-semibold hover:underline  duration-200">{item}</li>
                            </Link>                        ))}
                    </ul>
                </div>
            </div>
        </div>
		<div className="flex flex-col mx-auto justify-center gap-4  w-full max-w-[56rem] mb-12">
            <ul className="flex flex-row gap-2">
                        {blog.tags.map((item, index) => (
                            <Link href={'/'}>
                                <li key={index} className="text-white bg-CTA rounded-lg p-2 bg text-sm leading-4 font-semibold hover:underline  duration-200">{item}</li>
                            </Link>                        ))}
            </ul>
            <div className="flex flex-row justify-between items-center py-8 border-y-[3px] border-gray-300">
            <div className="flex flex-row items-center gap-2 ">
			<img src={blog.writer_img} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
			<div className="flex flex-col">
				<h4 className="text-lg font-semibold">{blog.writer}</h4>
				<p className="text-gray-500">{blog.writer_bio}</p>
            </div>
            </div>
            <button className=" px-4 py-2 border-2 text-gray-800    font-medium rounded-full hover:bg-CTA hover:text-white duration-200">
                      Follow
                    </button>
            </div>

	    </div>
        <div className="flex flex-col gap-8">
            <h2 className="text-gray-800 text-4xl font-bold">Related Posts</h2>
            <ul className="flex flex-row justify-between">
                {related_blogs.map((blog) => (
                    <li key={blog.title} className="flex flex-col h-full border-2 border-gray-200 border-opacity-60 max-w-[24rem] rounded-lg overflow-hidden">
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.image} alt="blog"/>
                        <div class="p-6">
                            <h2 class="tracking-widest text-sm  font-medium text-gray-500 mb-1">{blog.category}</h2>
                            <h1 class="line-clamp-2  text-lg font-bold text-gray-800 mb-3">{blog.title}</h1>
                            <p class="line-clamp-2 font-normal text-gray-500 leading-relaxed mb-3">{blog.description}</p>
                            <div className="flex flex-row items-center justify-between">
                                <Link href={"/"} className="flex flex-row items-center text-CTA gap-2">Learn more<AiOutlineArrowRight/></Link>
                                <p class="flex-shrink-0 text-gray-500 text-sm ">{blog.read_time} read • {blog.date}</p>
                            </div>
                        </div>

                    </li>
                ))}

            </ul>
        </div>
      </div>
    </Layout>
  );
}
