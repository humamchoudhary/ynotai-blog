import Meta from "@/components/Meta";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Meta />
      <Component {...pageProps} />;
    </AuthContextProvider>
  );
}
