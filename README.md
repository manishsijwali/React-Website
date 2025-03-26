# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




Testing Mantras


 <div className="p-6 text-center col-span-full">
          <div className="text-[#7ad6b4] text-xl font-sans inline-block border-b-2 border-[#7ad6b4] mb-4">
            Case Study
          </div>
          <h1 className="text-4xl text-black font-bold">Projects</h1>
          <p className="pt-4 text-lg max-w-2xl mx-auto font-serif">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget
            fringilla porttitor. Duis a orci nunc. Suspendisse ac convallis
            sapien, quis commodo libero.
          </p>
        </div>


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

export default function StatsSection() {
  return (
    <div className="bg-[#1d1d1d] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 justify-items-center">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg w-full max-w-[280px] flex flex-col items-center text-white
          transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img src={item.icon} alt={item.text} className="w-20 h-20" />
          <div className="text-4xl text-center mt-5 font-bold">
            {item.count}
          </div>
          <div className="text-center text-2xl mt-3 font-bold">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Martha Maldonado",
    role: "Executive Chairman",
    text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Praesent nec neque at dolor venenatis consectetur. Donec lacinia placerat felis non aliquam.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 5,
  },
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Praesent nec neque at dolor venenatis consectetur. Donec lacinia placerat felis non aliquam.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 4,
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Praesent nec neque at dolor venenatis consectetur. Donec lacinia placerat felis non aliquam.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 5,
  },
];

const SwiperSlider = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black relative">
      <Swiper
        modules={[Autoplay, Navigation]} // ✅ Navigation enabled
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        loopedSlides={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500}
        freeMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // ✅ Explicitly setting navigation buttons
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#222222] text-white p-6 rounded-xl shadow-lg relative min-h-[250px] md:min-h-[300px]">
              {/* Star Rating */}
              <div className="absolute top-4 right-4 text-yellow-400 text-lg">
                {"★".repeat(testimonial.stars)}
              </div>

              {/* Name & Role */}
              <h2 className="text-xl font-bold">{testimonial.name}</h2>
              <p className="text-sm text-gray-400">{testimonial.role}</p>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-300">{testimonial.text}</p>

              {/* User Image */}
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-2 border-gray-500 object-cover"
                />
              </div>

              {/* Quote Icon */}
              <div className="absolute top-16 right-4 text-[100px] text-gray-500">
                &#8221;
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev !text-white !left-4"></div>
      <div className="swiper-button-next !text-white !right-4"></div>
    </div>
  );
};

export default SwiperSlider;
