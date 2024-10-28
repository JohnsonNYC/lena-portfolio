"use client"
import HomeBanner from "./components/HomeBanner";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <main >
        <HomeBanner />
        <AboutMe />
      </main>
      {/* <footer >
      </footer> */}
    </>
  );
}
