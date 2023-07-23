import Loader from "@/components/Loader";
import Meta from "@/components/Meta";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/blog");
  }, []);

  return (
    <>
      <Meta />

      <div className="flex h-screen w-screen items-center justify-center">
        <Loader clasname={"loader-CTA "} />
      </div>
    </>
  );
}
