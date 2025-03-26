import React, { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = [
    {
      id: 1,
      category: "Software",
      title: "Desktop Mockup",
      image: "https://creasoft-react.b-cdn.net/img/project/project-1.jpg", // Replace with actual image
    },
    {
      id: 2,
      category: "Template",
      title: "Creative Agency",
      image: "https://creasoft-react.b-cdn.net/img/project/project-2.jpg", // Replace with actual image
    },
    {
      id: 3,
      category: "App",
      title: "Mobile Crypto Wallet",
      image: "https://creasoft-react.b-cdn.net/img/project/project-3.jpg", // Replace with actual image
    },
    {
      id: 4,
      category: "UI Kit",
      title: "E-Shop Ecommerce",
      image: "https://creasoft-react.b-cdn.net/img/project/project-4.jpg", // Replace with actual image
    },
    {
      id: 5,
      category: "Graphic",
      title: "Art Deco Cocktails",
      image: "https://creasoft-react.b-cdn.net/img/project/project-5.jpg", // Replace with actual image
    },
    {
      id: 6,
      category: "3D Design",
      title: "Low Poly Base Mesh",
      image: "https://creasoft-react.b-cdn.net/img/project/project-6.jpg", // Replace with actual image
    },
  ];
  const categories = [
    "All",
    "UI/UX",
    "Web Design",
    "Developing",
    "Graphic Design",
  ];
  return (
    <div className="grid grid-rows-1 mt-12 ">
      <div className="p-6 text-center col-span-full">
        <div className="text-[#7ad6b4] text-xl font-sans inline-block border-b-2 border-[#7ad6b4] mb-4">
          Case Study
        </div>
        <h1 className="text-4xl text-black font-bold">Projects</h1>
        <p className="pt-4 text-lg max-w-2xl mx-auto mb-4 font-serif">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300
        ${
          selectedCategory === cat
            ? "bg-black text-white scale-105 shadow-md"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow"
        }
        focus:outline-none focus:ring-2 focus:ring-black/50`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24 mt-24 "> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-36 mt-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-lg overflow-hidden shadow-lg w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute bottom-4 left-0 w-full bg-black bg-opacity-80 p-4 transition-transform transform translate-y-5 group-hover:translate-y-0 duration-300 ease-in-out">
                <p className="text-lg underline text-start text-green-400">{project.category}</p>
                <h3 className="text-xl text-start font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Projects;
