import Loader from "@/components/Loader";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-32  bg-black items-center justify-center">
      <Loader clasname={"loader-CTA "} />
    </div>
  );
}
