import React, { useEffect } from "react";
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
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
    <>
      <div className="relative">
        <div className="absolute -top-28 h-[260px] lg:h-[240px]  left-1/2 transform -translate-x-1/2 w-[100%]  grid grid-cols-1 lg:grid-cols-2 max-w-6xl bg-black py-10 px-6 rounded-lg shadow-lg z-10 bg-[url('https://creasoft-react.b-cdn.net/static/media/subscribe-bg.0d96fb27ba3871079074.png')] ">
          {/* Left Side: Text Section */}
          <div
            className="text-white flex flex-col gap-3 justify-center items-start"
            data-aos="fade-right"
          >
            <h3 className="text-[#7ad6b4] font-semibold text-xl">
              Get In Touch
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold">SUBSCRIBE OUR</h2>
            <h1
              className="text-transparent bg-clip-text font-bold text-3xl md:text-5xl tracking-wider"
              style={{
                WebkitTextStroke: "1px grey",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              NEWSLETTER
            </h1>
          </div>
          {/* Right Side: Input and Button */}
          <div
            className="flex items-center gap-2 max-w-lg w-full justify-center mt-4"
            data-aos="fade-left"
          >
            <input
              type="email"
              placeholder="Type Your Email"
              className="flex-1 px-4 py-3 bg-black text-white border-none outline-none rounded-md"
            />
            <button className="px-6 py-3 bg-[#7ad6b4] text-black font-bold rounded-md ">
              SUBMIT
            </button>
          </div>
        </div>
        <footer className="bg-[#121212] relative mt-42 pt-42 text-white py-16  bg-[url('https://creasoft-react.b-cdn.net/static/media/footer-bg.c81d040ca61ed7167dc6.png')]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">
                    Testing <span className="text-[#7ad6b4]">M</span>antras
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Integer purus odio, placerat nec ande rhoncus in, ullamcorper
                  nec dolor. on aptent taciti sociosqu.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#1a1a1a] p-2 rounded-md hover:bg-gray-800 transition"
                  >
                    <Facebook size={18} />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="bg-[#1a1a1a] p-2 rounded-md hover:bg-gray-800 transition"
                  >
                    <Twitter size={18} />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="bg-[#1a1a1a] p-2 rounded-md hover:bg-gray-800 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 12a4 4 0 0 1 8 0c0 5 4 6 4 6H4s4-1 4-6" />
                      <circle cx="12" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">Pinterest</span>
                  </a>
                  <a
                    href="#"
                    className="bg-[#1a1a1a] p-2 rounded-md hover:bg-gray-800 transition"
                  >
                    <Instagram size={18} />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>

              {/* Our Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Our Services</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#7ad6b4] transition"
                    >
                      Strategy & Research
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Web Solution
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      App Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      App Development
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Pricing Plan
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contacts */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Contacts</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Phone
                      className="text-[#7ad6b4] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div className="space-y-1">
                      <p className="text-gray-300">+880 566 1111 985</p>
                      <p className="text-gray-300">+880 657 1111 576</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Mail
                      className="text-[#7ad6b4] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div className="space-y-1">
                      <p className="text-gray-300">info@example.com</p>
                      <p className="text-gray-300">info@support.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <MapPin
                      className="text-[#7ad6b4] mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="text-gray-300">
                        168/170, Avenue 01, Mirpur
                      </p>
                      <p className="text-gray-300">DOHS, Bangladesh</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-600  mt-12 pt-8 flex flex-col md:flex-row justify-around items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                Copyright 2022 <span className="font-medium">Crea soft</span> |
                Design By <span className="font-medium">Egens Lab</span>
              </div>
              <div className="flex space-x-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
