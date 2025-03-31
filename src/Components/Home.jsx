import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Projects from "./Projects";
import Partners from "./Partners";
import SwiperSlider from "./SwiperSlider";
import Team from "./Team";
import CardGrid from "./Cards";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Features />
      <Projects />
      <Partners />
      <SwiperSlider />
      <Team />
      <CardGrid />
    </>
  );
};

export default Home;
