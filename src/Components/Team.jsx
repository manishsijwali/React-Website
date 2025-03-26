import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Team = () => {
  const teams = [
    {
      id: "1",
      title: "Lincoln Anthony",
      description: "Software Engineer",
      img: "https://creasoft-react.b-cdn.net/img/team/team-1.jpg",
    },
    {
      id: "2",
      title: "Thoren Okendhild",
      description: "Executive Chairman",
      img: "https://creasoft-react.b-cdn.net/img/team/team-2.jpg",
    },
    {
      id: "3",
      title: "Adrian Eodri",
      description: "UI/UX Designer",
      img: "https://creasoft-react.b-cdn.net/img/team/team-3.jpg",
    },
    {
      id: "4",
      title: "Lincoln Anthony",
      description: "Software Engineer",
      img: "https://creasoft-react.b-cdn.net/img/team/team-1.jpg",
    },
    {
      id: "5",
      title: "Thoren Okendhild",
      description: "Executive Chairman",
      img: "https://creasoft-react.b-cdn.net/img/team/team-2.jpg",
    },
    {
      id: "6",
      title: "Adrian Eodri",
      description: "UI/UX Designer",
      img: "https://creasoft-react.b-cdn.net/img/team/team-3.jpg",
    },
  ];

  const ServiceCard = ({ id, title, description, img }) => {
    return (
      <div className="p-8 text-center relative overflow-hidden text-[[#7ad6b4]]">
        <div className="mb-16">
          {/* image   */}
          <img src={img} alt="image" className="rounded-lg" />
          <div className="text-black  text-2xl font-medium px-4 py-2 ">
            {title}
          </div>
          <div className=" text-black text-md font-medium px-4">
            {description}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="p-8 lg:p-16 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="p-8 pb-16 text-center col-span-full">
          <h4 className="text-green-300 text-xl underline">Our Team</h4>
          <h1 className="text-4xl mt-4 text-black font-bold">Meet Our Team</h1>
          <p className="pt-4 text-md text-black max-w-2xl mx-auto">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget
            fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis
            sapien, quis commodo libero.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {teams.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-button absolute left-4 text-4xl top-1/2 transform translate-y-1/2 text-black p-4 rounded-3xl  hover:bg-gray-900 hover:text-white  ">
          ❮
        </button>
        <button className="swiper-button absolute text-4xl right-4 top-1/2 transform translate-y-1/2 text-black p-4 rounded-3xl  hover:bg-gray-900 hover:text-white">
          ❯
        </button>
      </div>
    </section>
  );
};

export default Team;
