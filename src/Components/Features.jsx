import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  
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
  //styles for card
  const StyledWrapper = styled.div`
    .card {
      height: 300px;
      width: 100%; /* Ensures the card is responsive */
      max-width: 400px; /* Max width to prevent being too wide */
      padding: 20px;
      background: black;
      transform: rotate(-5deg);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Added shadow for better effect */
    }

    @media screen and (max-width: 375px) {
      .card {
        width: 90%; 
        margin-left: 20px;
      }
    }

    @media screen and (max-width: 475px) {
      .card {
        width: 90%;
         margin-left: 30px;
      }
    }

    @media screen and (max-width: 768px) {
      .card {
        width: 80%;
      }
    }

    .card:active {
      animation: shake 0.5s ease-in-out;
    }
    .card:hover {
      transform: rotate(0deg) scale(1.02);
    }

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-5px);
      }
      50% {
        transform: translateX(5px);
      }
      75% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  `;

  const stats = [
    {
      icon: "https://creasoft-react.b-cdn.net/img/icons/feature-icon-1.png",
      count: "150+",
      text: "Project Completed",
    },
    {
      icon: "https://creasoft-react.b-cdn.net/img/icons/feature-icon-2.png",
      count: "2150+",
      text: "Satisfied Clients",
    },
    {
      icon: "https://creasoft-react.b-cdn.net/img/icons/feature-icon-3.png",
      count: "120+",
      text: "Expert Teams",
    },
    {
      icon: "https://creasoft-react.b-cdn.net/img/icons/feature-icon-1.png",
      count: "50+",
      text: "Win Awards",
    },
  ];

  return (
    <div className="bg-[#1d1d1d] p-6"  data-aos="zoom-in">
      <div className="text-center py-10">
        <h4 className="text-green-300 text-xl">Care Study </h4>
        <h1 className="text-5xl text-white font-bold">Features</h1>
        <p className="pt-4 text-lg text-white max-w-2xl mx-auto">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StyledWrapper>
          <div className="card">
            <div className="flex items-center justify-center">
              <img
                src={stats[0].icon}
                alt="Feature Icon 1"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              {stats[0].count}
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              {stats[0].text}
            </div>
          </div>
        </StyledWrapper>

        <StyledWrapper>
          <div className="card">
            <div className="flex items-center justify-center">
              <img
                src={stats[1].icon}
                alt="Feature Icon 2"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              {stats[1].count}
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              {stats[1].text}
            </div>
          </div>
        </StyledWrapper>

        <StyledWrapper>
          <div className="card">
            <div className="flex items-center justify-center">
              <img
                src={stats[2].icon}
                alt="Feature Icon 3"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              {stats[2].count}
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              {stats[2].text}
            </div>
          </div>
        </StyledWrapper>

        <StyledWrapper>
          <div className="card">
            <div className="flex items-center justify-center">
              <img
                src={stats[3].icon}
                alt="Feature Icon 4"
                className="w-16 h-16"
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              {stats[3].count}
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              {stats[3].text}
            </div>
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
};

export default Features;
