import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const servicesData = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.",
    icon: <FaPaintBrush className="text-[#7ad6b4] text-5xl mx-auto" />,
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.",
    icon: <FaMobileAlt className="text-[#7ad6b4] text-5xl mx-auto" />,
  },
  {
    id: "03",
    title: "Software Development",
    description:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.",
    icon: <FaCode className="text-[#7ad6b4] text-5xl mx-auto" />,
  },
  {
    id: "04",
    title: "Web Design",
    description:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.",
    icon: <FaPaintBrush className="text-[#7ad6b4] text-5xl mx-auto" />,
  },
  {
    id: "05",
    title: "UI/UX Design",
    description:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.",
    icon: <FaMobileAlt className="text-[#7ad6b4] text-5xl mx-auto" />,
  },
  {
    id: "06",
    title: "Software Development",
    description:
      "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.",
    icon: <FaCode className="text-[#7ad6b4] text-5xl mx-auto" />,
  },
];

const ServiceCard = ({ id, title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden hover:bg-black text-[#7ad6b4]">
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        {/* Number Background */}
        <span className="absolute top-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">
          {id}
        </span>

        {/* Icon */}
        <div className="absolute top-4 left-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-start text-gray-600 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-start text-gray-600 mb-4">{description}</p>

      {/* Read More Button */}
      <button className="text-[#7ad6b4] ml-0 sm:ml-4 md:ml-8 lg:ml-12 font-medium border border-[#7ad6b4] px-4 py-2 rounded-lg transition hover:bg-[#7ad6b4] hover:text-black">
        Read More
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="p-8 lg:p-16 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="p-8 pb-16 text-center col-span-full">
          <h4 className="text-green-300 text-xl underline">Our Solutions </h4>
          <h1 className="text-4xl mt-4 text-black font-bold">Services</h1>
          <p className="pt-4 text-md text-black max-w-2xl mx-auto">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget
            fringilla porttitor. Duis a orci nunc. Suspendisse ac convallis
            sapien, quis commodo libero.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="relative"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <FaRegArrowAltCircleRight className="swiper-button-next absolute  left-4  top-1/3 mr-5 "></FaRegArrowAltCircleRight>
        <FaRegArrowAltCircleLeft className="swiper-button-prev absolute right-4 text-4xl top-1/3 mr-5 "></FaRegArrowAltCircleLeft>
      </div>
    </section>
  );
};

export default Services;
