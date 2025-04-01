import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
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
      <div className="text-center relative overflow-hidden text-[[#7ad6b4]]" data-aos="fade-up">
        <div className="mb-16">
          {/* image   */}
          <img src={img} alt="image" className="rounded-lg" />
          <div className=" text-2xl font-medium px-4 py-2 ">
            {title}
          </div>
          <div className="  text-md font-medium px-4">
            {description}
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="p-8 lg:p-16 relative mt-32" data-aos="fade-down">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="p-8 pb-16 text-center col-span-full">
          <h4 className="text-green-300 text-xl underline">Our Team</h4>
          <h1 className="text-4xl mt-4 font-bold">Meet Our Team</h1>
          <p className="pt-4 text-md max-w-2xl mx-auto">
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
            nextEl: ".swiper-button-r",
            prevEl: ".swiper-button-l",
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
        <button className="swiper-button-l absolute left-4 text-4xl lg:top-1/2 top-[480px]  transform translate-y-1/2  rounded-3xl  hover:bg-gray-900 hover:text-white  ">
          ❮
        </button>
        <button className="swiper-button-r absolute text-4xl right-4 lg:top-1/2 top-[480px] transform translate-y-1/2  rounded-3xl  hover:bg-gray-900 hover:text-white">
          ❯
        </button>
      </div>
    </section>
  );
};

export default Team;
