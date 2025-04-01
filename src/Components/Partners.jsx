import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Partners() {
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
  const partners = [
    {
      name: "abc.com",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-1.png",
    },
    {
      name: "tuenti",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-2.png",
    },
    {
      name: "ariete",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-3.png",
    },
    {
      name: "www.egenslab.com",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-4.png",
    },
    {
      name: "mylife",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-5.png",
    },

    {
      name: "abc.com",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-1.png",
    },
    {
      name: "tuenti",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-2.png",
    },
    {
      name: "ariete",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-3.png",
    },
    {
      name: "www.egenslab.com",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-4.png",
    },
    {
      name: "mylife",
      logo: "https://creasoft-react.b-cdn.net/img/partner/partner-5.png",
    },
  ];

  return (
    <div className="w-full bg-[#121212] py-16 mt-32" data-aos="fade-down">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Heading Section */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          <h3 className="text-[#4ecca3] text-lg font-medium relative pb-1">
            Satisfied Client
            <span className="absolute bottom-0 left-0 w-32 h-0.5 bg-[#4ecca3]"></span>
          </h3>
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Our Partner
          </h2>
        </div>

        <div className="hidden md:block w-px h-24 bg-[#333333] mx-4"></div>

        {/* Swiper for Mobile & Desktop */}
        <div className="w-full md:w-3/4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2500 }}
            // navigation={true} 
            breakpoints={{
              320: { slidesPerView: 1 },  // Small phones
              480: { slidesPerView: 2 },  // Larger phones
              768: { slidesPerView: 3 },  // Tablets
              1024: { slidesPerView: 4 }, // Small desktops
              1280: { slidesPerView: 5 }, // Large desktops
            }}
            className="mySwiper"
          >
            {partners?.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1a1a1a] p-6 rounded-lg flex items-center justify-center h-24 w-full">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-12 w-auto object-contain filter invert opacity-90"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  );
}
