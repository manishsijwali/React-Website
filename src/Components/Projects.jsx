import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);
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
    <div className="grid grid-rows-1 mt-32" data-aos="fade-down">
      <div className="p-6 text-center col-span-full">
        <div className="text-[#7ad6b4] text-xl font-sans inline-block border-b-2 border-[#7ad6b4] mb-4">
          Case Study
        </div>
        <h1 className="text-4xl font-bold">Projects</h1>
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
        focus:outline-none focus:ring-2 focus:ring-black/50 bg-black text-white hover:bg-white hover:text-black`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24 mt-24 "> */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-36 mt-24"
          data-aos="fade-up"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-lg overflow-hidden shadow-lg w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full  object-cover h-full"
              />
              {/* Hover Overlay */}
              <div className="relative group">
                <div className="absolute bottom-8 lg:left-2 sm:left-2 left-4 w-[90%] sm:w-[362px] rounded-2xl bg-black bg-opacity-80 p-4 transition-transform transform translate-y-5 group-hover:translate-y-0 duration-300 ease-in-out">
                  <p className="text-lg underline text-start text-green-400">
                    {project.category}
                  </p>
                  <h3 className="text-xl text-start font-semibold text-white">
                    {project.title}
                  </h3>
                  <button className="absolute top-10 bg-black right-2 text-[#7ad6b4] cursor-pointer px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
                    View More
                  </button>
                </div>
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
