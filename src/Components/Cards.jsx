import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    title: "Quisque Malesuada Sapien And Donec Sed Nunc.",
    category: "UI/UX",
    image: "https://creasoft-react.b-cdn.net/img/blog/blog-1.jpg",
    date: "22.02.2022",
  },
  {
    title: "Suspendisse Pretium Magna Qu Nisl Egestas Porttitor.",
    category: "Software",
    image: "https://creasoft-react.b-cdn.net/img/blog/blog-2.jpg",
    date: "22.02.2022",
  },
  {
    title: "In A Augue Sit Amet Erat Suspel Eleifend Suscipit Issen.",
    category: "Dashboard",
    image: "https://creasoft-react.b-cdn.net/img/blog/blog-3.jpg",
    date: "22.02.2022",
  },
];

const Card = ({ title, category, image, date }) => {
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
    <div className="bg-white  rounded-lg overflow-hidden max-w-sm md:w-[1000px]">
      <div className="relative overflow-hidden">
        {/* Image Hover Effect */}
        <div className="transition-transform duration-200 hover:rotate-3 hover:scale-150">
          <img
            src={image}
            alt={title}
            className="w-full h-56 lg:h-72 object-cover"
          />
        </div>
        <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-sm rounded-full">
          {category}
        </span>
      </div>
      <div className="p-4">
        <div className="text-gray-500 text-sm flex justify-between">
          <span>By, Admin</span>
          <span>{date}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold  text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="grid grid-rows-1 my-12" data-aos="fade-right">
      <div className="p-6 text-center col-span-full">
        <div className="text-[#7ad6b4] text-xl font-sans inline-block border-b-2 border-[#7ad6b4] mb-4">
          All Blogs
        </div>
        <h1 className="text-4xl text-black font-bold">Latest Post</h1>
        <p className="pt-4 text-lg max-w-2xl mx-auto mb-4 font-serif">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-24 gap-10 px-4 sm:px-10 lg:px-36 mt-24"data-aos="fade-left">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
