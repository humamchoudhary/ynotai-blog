import Loader from "@/components/Loader";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Loader clasname={"loader-CTA"} />;
}
