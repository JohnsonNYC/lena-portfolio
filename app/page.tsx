"use client";
import HomeBanner from "./components/HomeBanner";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Form from "./components/Form";
import GuestSpot from "./components/GuestSpot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeBanner />
        <AboutMe />
        <Gallery />
        <GuestSpot />
        <Faq />
        <Form />
      </main>
    </>
  );
}
