import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Features from "./Components/Features";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Partners from "./Components/Partners";

import SwiperSlider from "./Components/SwiperSlider";
import Team from "./Components/Team";
// import Testing from "./Components/Testing";
import Card from "./Components/Testing";
import CardGrid from "./Components/Cards";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Features />
      <Projects />
      <Partners />
      <SwiperSlider />
      <Team/>
      {/* <Card/> */}
      <CardGrid/>
      <Footer />
    </div>
  );
}

export default App;
