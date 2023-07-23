import Meta from "@/components/Meta";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Meta />
      <Component {...pageProps} />;
      <Analytics />
    </AuthContextProvider>
  );
}
