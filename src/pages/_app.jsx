import "@/styles/globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <SearchBox />
      <Component {...pageProps} />
    </>
  )
}
