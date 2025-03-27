import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const text = "IT AGENCY.";

const StyledWrapper = styled.div`
  .btn {
    width: 7em;
    height: 2.5em;
    margin: 0.5em;
    background: black;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 8px;
  }

  .btn:hover {
    color: black;
  }

  .btn:after {
    content: "";
    background: #7ad6b4;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  .btn:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    transition: all 1s;
  }
`;

const Hero = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const zoomInterval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 4000);

    // Initialize AOS
    AOS.init({
      duration: 1200, // Set animation duration
      once: true, // Animation will happen only once
    });

    // Clean up the interval and AOS initialization when the component unmounts
    return () => {
      clearInterval(zoomInterval);
      AOS.refresh(); // Optional: Refresh AOS when component is unmounted
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {/* Left Side */}
      <div className="min-h-[600px] flex items-center justify-center bg-[#1d1d1d]">
        <div className="hidden sm:block">
          <div className="flex justify-center flex-row space-x-8 py-4 transform rotate-270 w-[150px]">
            <div className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer">
              <Facebook size={18} />
              Facebook
            </div>
            <div className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer">
              <Instagram size={18} />
              Instagram
            </div>
            <div className="text-xl text-gray-700 hover:text-blue-500 cursor-pointer">
              <Linkedin size={18} />
              LinkedIn
            </div>
          </div>
        </div>

        <div className="pb-24">
          <div className="lg:text-5xl text-4xl bg-[#222222] w-full py-6 px-4 font-bold">
            <div className="text-white">CREATIVE & MINIMAL</div>
            <div className="bg-[#222222] w-full py-6">
              <motion.h1
                className="text-transparent bg-clip-text font-bold text-4xl md:text-5xl tracking-wider flex"
                style={{
                  WebkitTextStroke: "1px white",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                }}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }, // Delay each letter
                }}
              >
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>
          <p className="px-4 font-sans text-white mt-6" data-aos="fade-right">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor.
            Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec dui luctus,
            pellentesque lacus sed, mollis leo.
          </p>
          <div className="flex justify-start mt-8">
            <div data-aos="fade-right">
              <StyledWrapper>
                <button className="btn">About Us</button>
              </StyledWrapper>
            </div>
            <div data-aos="fade-right" data-aos-delay="300">
              <StyledWrapper>
                <button className="btn">See Projects</button>
              </StyledWrapper>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Image with Zoom Effect) */}
      <div className="min-h-[600px] flex items-center justify-center sm:block hidden">
        <div className="relative overflow-hidden">
          <img
            src="https://creasoft-react.b-cdn.net/img/hero-banner.jpg"
            alt="Zoomable"
            className={`transition-transform duration-5000 transform ${
              isZoomed ? "scale-150" : "scale-110"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
