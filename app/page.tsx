"use client"
import HomeBanner from "./components/HomeBanner";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <HomeBanner />
        <AboutMe />
        <Gallery />
        <Faq />
      </main>
      {/* <footer >
      </footer> */}
    </>
  );
}
