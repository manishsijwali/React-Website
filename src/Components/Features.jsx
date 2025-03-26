import React from "react";
import styled from "styled-components";

const Features = () => {
  //styles for card
  const StyledWrapper = styled.div`
    .card {
      height: 300px;
      width: 400px;
      padding: 30px;
      background: black;
      transform: rotate(-5deg);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    @media screen and (min-width: 1440px) {
      .card {
       width:350px;
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
    <div className="">
      <div className="p-6 pt-10 text-center col-span-full bg-[#1d1d1d]">
        <h4 className="text-green-300 text-xl">Care Study </h4>
        <h1 className="text-5xl text-white font-bold">Features</h1>
        <p className="pt-4 text-lg text-white max-w-2xl mx-auto">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero.
        </p>
      </div>
      <div className="bg-[#1d1d1d] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  ">
        <StyledWrapper>
          <div className="card rounded-lg my-12 ml-1">
            <div className="flex items-center justify-center">
              <img
                src="https://creasoft-react.b-cdn.net/img/icons/feature-icon-1.png"
                alt=""
                className=""
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              150<sup>+</sup>
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              Project Completed
            </div>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div className="card rounded-lg   my-12 ml-1">
            <div className="flex items-center justify-center">
              <img
                src="https://creasoft-react.b-cdn.net/img/icons/feature-icon-2.png"
                alt=""
                className=""
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              2150<sup>+</sup>
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              Satisfied Clients
            </div>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div className="card rounded-lg   my-12 ml-1">
            <div className="flex items-center justify-center">
              <img
                src="https://creasoft-react.b-cdn.net/img/icons/feature-icon-3.png"
                alt=""
                className=""
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              120<sup>+</sup>
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              Expert Teams
            </div>
          </div>
        </StyledWrapper>
        <StyledWrapper>
          <div className="card rounded-lg  my-12 ml-1 ">
            <div className="flex items-center justify-center">
              <img
                src="https://creasoft-react.b-cdn.net/img/icons/feature-icon-1.png"
                alt=""
                className=""
              />
            </div>
            <div className="text-4xl text-center mt-5 text-white font-bold">
              50<sup>+</sup>
            </div>
            <div className="text-center text-2xl mt-5 text-white font-bold">
              Win Awards
            </div>
          </div>
        </StyledWrapper>
      </div>
    </div>
  );
};

export default Features;
