import Layout from "../../components/Layout";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineClock } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import getData from "@/firebase/firestore/getData";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";
import Head from "next/head";
import Meta from "@/components/Meta";

export default function template() {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    function initBlog() {
      getData("blogs", id).then(({ result, error }) => {
        if (error) {
          return router.push("/blog/404");
        }
        setBlog(result);
        const milliseconds =
          result.date.seconds * 1000 + result.date.nanoseconds / 1000000;
        setDate(new Date(milliseconds));
      });
    }
    if (id) {
      initBlog();
    }
  }, [id]);

  const [relatedBlogs, setRelatedData] = useState([]);

  useEffect(() => {
    async function getRelate(cat) {
      let data = [];
      await getData("categories", cat).then(async ({ result }) => {
        if (result.blogIds && result.blogIds.includes(blog.id)) {
          result.blogIds.splice(result.blogIds.indexOf(blog.id), 1);

          if (result.blogIds.length < 4) {
            const promises = result.similarCat.map((item) => getRelate(item));
            const relatedData = await Promise.all(promises);
            relatedData.forEach((relatedBlogs) => data.push(...relatedBlogs));
          } else {
            data.push(...result.blogIds);
          }
        } else if (result.blogIds) {
          data.push(...result.blogIds);
        }
      });

      return data;
    }

    if (blog) {
      getRelate(blog.category).then((data) => {
        const promises = data.map((item) => getData("blogs", item));
        Promise.all(promises).then((blogData) => {
          const reblogs = blogData.map((res) => res.result);
          // Do whatever you want with the relatedBlogs data here
          setRelatedData(reblogs);
        });
      });
    }
  }, [blog]);

  return (
    <>
      <Meta
        title={blog ? blog.title : "YNotAI Blog"}
        keywords={blog && blog.tags.map((item, index) => item).join(", ")}
        description={blog && blog.description}
        ogTitle={blog ? blog.title : "YNotAI Blog"}
        ogType={"blog"}
        ogImage={blog && blog.image}
        ogUrl={`https://wwww.ynotai.com/blog/${id}`}
      />
      <Layout>
        {blog ? (
          <div className="flex flex-col justify-center  lg:px-32 mx-auto pt-[3rem] lg:pt-[4rem] xl:pt-[8rem] pb-[3rem]">
            {blog && (
              <div className="flex flex-col mb-[5rem] gap-8">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-black text-gray-800">
                  {blog.title}
                </h1>
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-col">
                    <UserCard
                      textSize="cusText-head"
                      data={{ writerId: blog.writerId }}
                    />
                    <div className="flex flex-row gap-1 items-center">
                      <HiOutlineClock size={20} color="gray" />
                      <p className="text-gray-500 cusText-md leading-5 ">
                        {Math.floor(blog.read_time)} mins read •{" "}
                        {date.toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {blog && (
              <div className="flex flex-col ">
                <article className="cusText-md text-gray-800 leading-5 ck-content">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </article>
              </div>
            )}

            {blog && (
              <div className="flex flex-col mx-auto justify-center gap-4  w-full mb-12">
                <ul className="flex flex-row gap-2">
                  {blog.tags.map((item, index) => (
                    <Link key={index} href={"/"}>
                      <li className="text-white bg-CTA rounded-lg p-2 bg cusText-md leading-4 xl:font-medium font-semibold hover:underline  duration-200">
                        {item}
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="flex flex-row justify-between items-center py-8 border-y-[2px] border-gray-300">
                  <UserCard
                    avatarStyle="rounded-full mr-3 h-[80px] w-[80px]"
                    textSize="text-head"
                    data={{ writerId: blog.writerId }}
                  />
                  {/* <button
                    disabled
                    className="px-4 py-2 border-2 text-gray-800 font-medium rounded-full hover:bg-CTA hover:text-white duration-200"
                  >
                    Follow
                  </button> */}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-8">
              <h2 className="text-gray-800 text-4xl font-bold">
                Related Posts
              </h2>
              {relatedBlogs.length > 0 ? (
                <ul className="grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4">
                  {relatedBlogs.map((blog) => {
                    console.log(blog);

                    return (
                      <li
                        key={blog.title}
                        className="flex basis-1/3 flex-col h-full border-2 border-gray-200 border-opacity-60 max-w-[24rem] rounded-lg overflow-hidden"
                      >
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={blog.image}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest cusText-md  font-medium text-gray-500 mb-1">
                            {blog.category}
                          </h2>
                          <h1 className="line-clamp-2  cusText-md font-bold text-gray-800 mb-3">
                            {blog.title}
                          </h1>
                          <p className="line-clamp-2 font-normal text-gray-500 leading-relaxed mb-3">
                            {blog.description}
                          </p>
                          <div className="flex flex-row items-center justify-between">
                            <Link
                              href={"/"}
                              className="flex flex-row items-center text-CTA gap-2"
                            >
                              Learn more
                              <AiOutlineArrowRight />
                            </Link>
                            <p className="flex-shrink-0 text-gray-500 cusText-md ">
                              {Math.floor(blog.read_time / 60)} read •{" "}
                              {date.toDateString()}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="flex h-32  items-center justify-center">
                  <Loader clasname={"loader-CTA"} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex h-screen items-center justify-center">
            <Loader clasname={"loader-CTA"} />
          </div>
        )}
      </Layout>
    </>
  );
}
