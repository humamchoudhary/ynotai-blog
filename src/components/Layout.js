import { AuthContextProvider } from "@/context/AuthContext";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./Header"));
import { Poppins } from "next/font/google";
import Meta from "./Meta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Layout({ children, main, span, sub }) {
  return (
    <main className={`flex min-h-screen flex-col  justify-between  `}>
      <Meta />
      <Header />
      <div className=" px-6 py-3 min-h-[3rem] w-screen lg:px-[182px] 2xl:px-[364px]  sm:px-6 duration-300 mt-[3rem] 2xl:mt-[6rem]">
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
