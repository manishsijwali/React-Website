import React, { useEffect }  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Martha Maldonado",
    role: "Executive Chairman",
    text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 5,
  },
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 4,
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    stars: 5,
  },
];

const SwiperSlider = () => {
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
    <>
      <div className="p-6 pt-10 text-center col-span-full bg-[#1d1d1d]"data-aos="fade-up">
        <h4 className="text-green-300 text-xl underline py-2">Testimonial </h4>
        <h1 className="text-5xl text-white font-bold">Client Say About Us</h1>
        <p className="pt-4 text-lg text-white max-w-2xl mx-auto">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero.
        </p>
      </div>
      <div className="flex justify-center items-center py-20 bg-black px-4 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-r",
            prevEl: ".swiper-button-l",
          }}
          // onSwiper={(swiper) => {
          //   setTimeout(() => {
          //     swiper.params.navigation.prevEl = prevRef.current;
          //     swiper.params.navigation.nextEl = nextRef.current;
          //     swiper.navigation.init();
          //     swiper.navigation.update();
          //   });
          // }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
            480: { slidesPerView: 1.2, spaceBetween: 15 }, // Small Phones
            640: { slidesPerView: 1.5, spaceBetween: 15 }, // Tablets
            768: { slidesPerView: 2, spaceBetween: 20 }, // Larger Tablets
            1024: { slidesPerView: 2, spaceBetween: 20 }, // Laptops
            1440: { slidesPerView: 2.5, spaceBetween: 25 }, // Large Screens
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#222222] text-white p-6 rounded-xl shadow-lg relative min-h-[250px] md:min-h-[300px]" data-aos="fade-up">
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
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-500"
                  />
                </div>

                {/* Quote Icon */}
                <div className="absolute lg:top-42 top-66 right-4 text-[150px]  md:text-[200px] text-gray-500 opacity-20">
                  &#8221;
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons (Fully Functional Now) */}
        <button className="swiper-button-l  absolute left-4 text-4xl lg:top-1/2 top-[450px] transform translate-y-1/2 text-black  rounded-3xl hover:bg-gray-900 hover:text-white">
          ❮
        </button>
        <button className="swiper-button-r absolute text-4xl right-4 lg:top-1/2 top-[450px] transform translate-y-1/2 text-black  rounded-3xl hover:bg-gray-900 hover:text-white">
          ❯
        </button>
      </div>
    </>
  );
};

export default SwiperSlider;
