import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 1200, // Set animation duration
        once: true, // Animation will happen only once
      });
      return () => {
        AOS.refresh();
      };
    }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="px-4 lg:px-20 py-12" data-aos="fade-right">
          <h1 className="text-lg pt-3 text-[#7ad6b4]">
            Get to Know
            <hr className="w-1/4 text-[#7ad6b4] mt-1" />
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold  pt-3">
            About Us
          </h1>
          <h1 className="text-2xl lg:text-3xl pt-3">
            We do design, code & develop Software, finally launch.
          </h1>
          <p className="text-lg pt-3 font-sans">
            Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.
            Class onlin aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos only himenaeos. Praesent nec neque at dolor
            venenatis consectetur eu quis ex. The Donec lacinia placerat felis
            non aliquam.
          </p>
          <div className="pr-12 py-12 shadow-lg mt-10 rounded-2xl border-r-2 border-l-2 border-[#7ad6b4]">
            <div className="flex items-center justify-between">
              <span className=" text-2xl lg:text-3xl pl-2">
                Testing <span className="text-[#7ad6b4]">M</span>antras
              </span>
              <h1 className="text-2xl lg:text-3xl">#1</h1>
            </div>
            <h1 className="text-xl lg:text-3xl px-2 pt-4 font-bold">
              Best Creative IT Agency And Solutions Since 2005.
            </h1>
          </div>
        </div>

        {/* Right Section (Images) */}
        <div className="relative flex justify-center lg:py-24 pb-16 lg:justify-end" data-aos="fade-left">
          <img
            src="https://creasoft-react.b-cdn.net/img/about-baner-1.jpg"
            alt="About Us Image 1"
            className="w-full lg:max-w-2xl rounded-4xl"
          />
          <img
            src="https://creasoft-react.b-cdn.net/img/about-baner-2.jpg"
            alt="About Us Image 2"
            className="w-56 max-w-md h-60 lg:h-[300px] lg:max-w-lg rounded-2xl absolute right-2 hidden sm:block lg:right-2 top-[180px] lg:top-[350px] border-8 border-amber-50"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
