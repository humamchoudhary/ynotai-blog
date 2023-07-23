import { Inter } from "next/font/google";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col justify-center gap-5 lg:px-32 mx-auto pt-[3rem] lg:pt-[4rem] 2xl:pt-[8rem] pb-[3rem]">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="eaadal9aaa8a76e6e7902cbaae470f8028e02586"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#eaadal9aaa8a76e6e7902cbaae470f8028e02586)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">About</span>
              </span>{" "}
              Us
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              YNotAi, LLC is your gateway to a healthier future, where
              cutting-edge technologies and boundless possibilities converge.
              Our mission is to illuminate the path ahead by providing a
              comprehensive platform that unveils tomorrow's marvels. Welcome to
              a one-stop destination for the latest trends, advancements, and
              breakthroughs in artificial intelligence, machine learning,
              natural language processing, metaverse, automation, quantum
              computing, autonomous technology, web 3, self-driving vehicles,
              deep learning, blockchain, internet of things, augmented reality,
              virtual reality, and more.
            </p>
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 flex flex-col-reverse 2xl:flex-row gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              alt="Welcome"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="rounded shadow-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Embrace the Future
            </h2>
            <p className="mt-4 text-gray-600">
              Step into a world of endless exploration, where knowledge meets
              innovation. At YNotAi, we are passionate about empowering you with
              the tools you need to thrive in the ever-evolving tech landscape.
              Stay informed with the latest news, immerse yourself in in-depth
              research, and uncover the real-world impact of tomorrow's
              technologies.
            </p>
          </div>
        </div>
        <div className="relative py-16">
          <div className="hidden absolute top-0 bottom-0 left-0 w-1/2 bg-gray-50 lg:block" />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-CTA px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className=" text-blue-300  text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-blue-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Promote your app in the new world
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-200">
                    We help you show off your product using AI to engage more
                    people.
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
                >
                  <div className="flex min-w-0 flex-1">
                    <label htmlFor="cta_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta_email"
                      type="email"
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-CTA"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-CTA  px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-CTA sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Enriching Content, Engaging Community
            </h2>
            <p className="mt-4 text-gray-600">
              We think that learning should be enjoyable. Our material is meant
              to be simple to read, understand, and aesthetically appealing,
              allowing you to quickly understand even the most complex subjects.
              Whether you're an industry expert or a curious newcomer, YNotAi's
              engaging platform generates a vibrant community where ideas are
              exchanged, views are broadened, and connections are established.
            </p>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <img
              alt="Engaging community"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="rounded shadow-lg"
            />
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 flex flex-col-reverse 2xl:flex-row gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              alt="Create"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="rounded shadow-lg"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Unlock Your Creative Potential
            </h2>
            <p className="mt-4 text-gray-600">
              In addition to being your go-to source for tech insights, we offer
              AI-based tools that put the power of innovation at your
              fingertips. With just one click, you can access smart tools that
              simplify research, aid decision-making, and revolutionize the way
              you interact with technology.
            </p>
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Master the Art of Creation
            </h2>
            <p className="mt-4 text-gray-600">
              We recognize the artist within you. Our advanced prompts
              engineering work empowers you to create top-notch quality images,
              videos, and more like a pro. Unleash your creativity as we share
              expert tips, tricks, and advanced prompts that guide you in
              crafting stunning visuals, from logo generation to captivating
              UI/UX designs for websites and mobile applications.
            </p>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <img
              alt="Art of creation"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="rounded shadow-lg"
            />
          </div>
        </div>
        <div className="mb-32 text-center md:mx-auto md:mb-0 max-w-3xl lg:col-span-2">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:mb-6">
            Join the Techno-Journey
          </h2>
          <p className="text-lg text-gray-600 md:text-xl lg:text-lg xl:text-xl">
            YNotAi, LLC welcomes you to join our techno-journey towards a
            brighter, healthier future. Embrace the possibilities of tomorrow's
            technologies with confidence, curiosity, and a spirit of
            exploration. Subscribe to our newsletter and follow us on social
            media to stay connected with the latest updates and connect with
            like-minded individuals.
          </p>
        </div>
      </div>
    </Layout>
  );
}
