import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Toggle from "./Toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //button css
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

    button:hover {
      color: black;
    }

    button:after {
      content: "";
      background: #7ad6b4;
      position: absolute;
      z-index: -1;
      left: -20%;
      right: -20%;
      top: 0;
      bottom: 0;
      transform: skewX(-45deg) scale(0, 1);
      transition: all 1s;
    }

    button:hover:after {
      transform: skewX(-45deg) scale(1, 1);
      transition: all 1s;
    }
  `;

  return (
    <nav className="shadow-md bg-[#222222] lg:py-4 py-2 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <span className="text-white text-3xl">
          Testing <span className="text-[#7ad6b4]">M</span>antras
        </span>

        <div className="flex items-center ml-auto md:hidden">
          <button>{<Toggle />}</button>
          <button
            onClick={toggleSidebar}
            className="focus:outline-none cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-[#7ad6b4]"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full w-64 text-black bg-white p-4 transform transition-transform duration-1000 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-50 shadow-lg border-r`}
        >
          <div className="flex justify-between items-center">
            <span className="text-black text-3xl">
              Testing <span className="text-green-400">M</span>antras
            </span>
            {/* Close button inside sidebar */}
            <button
              onClick={toggleSidebar}
              className="text-3xl p-4 rounded-bl-full bg-black text-white"
            >
              &times; {/* Close symbol */}
            </button>
          </div>
          <hr className="w-full text-green-300 mt-2" />

          <ul className="mt-6 space-y-4">
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Services",
                "Project",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-green-500 block py-1"
                  >
                    {item}
                  </Link>
                  <hr className="w-full border-gray-100 mt-1" />
                </li>
              ))}
            </ul>

            <div className="flex justify-center mt-10">
              <StyledWrapper>
                <button className="btn"> Get A Quote</button>
              </StyledWrapper>
            </div>
          </ul>
        </div>

        {/* Full screen navigation */}
        <div className="md:flex md:items-center md:space-x-10 hidden sm:block">
          {["Home", "About Us", "Services", "Project", "Blog", "Contact"].map(
            (item) => (
              <div key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white hover:text-[#7ad6b4]"
                >
                  {item}
                </Link>
              </div>
            )
          )}
        </div>
        <div className="flex ">
          <div className="hidden sm:block">
            <button>{<Toggle />}</button>
          </div>
          <div className="hidden sm:block">
            <StyledWrapper>
              <button className="btn"> Get A Quote</button>
            </StyledWrapper>
          </div>
        </div>
      </div>
    </nav>
  );
}
