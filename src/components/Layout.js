import dynamic from "next/dynamic";
const Header = dynamic(() => import("./Header"));
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function Layout({ children, main, span, sub }) {
  return (
    <main className={`flex min-h-screen flex-col  justify-between  `}>
      <Header />
      <div className=" px-6 py-3 min-h-[3rem] w-screen lg:px-[182px] 2xl:px-[364px]  sm:px-6 duration-300">
        {children}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
