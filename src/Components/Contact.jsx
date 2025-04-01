import React, { useEffect } from "react";
import {
  Play,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative  text-white py-20 lg:mb-24 lg:mt-0 mt-20 px-6 md:px-16 bg-black"
        data-aos="fade-down-right"
      >
        <div className="absolute inset-0 bg-[url('https://creasoft-react.b-cdn.net/static/media/breadcrumb-bg.e682b673721f2d76ac96.jpg')] bg-cover bg-center opacity-50 "></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between lg:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#7ad6b4] mb-4">
              Contact Us
            </h1>
            <div className="flex items-center gap-2">
              <a href="/" className="text-[#7ad6b4]">
                Home
              </a>
              <span>→</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className="hidden md:block mt-8 md:mt-0 relative top-36">
            <img
              src="https://creasoft-react.b-cdn.net/img/breadcrumb-video.jpg"
              alt="Contact Us Video"
              width={400}
              height={300}
              className="rounded-lg"
            />

            {/* Play Button */}
            <button
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play Video"
            >
              <div className="w-12 h-12 rounded-full bg-[#7ad6b4] flex animate-ping items-center justify-center cursor-pointer transition-normal">
                <Play className="w-6 h-6 text-white" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h4 className="text-xl font-bold mb-6 text-[#7ad6b4] underline">
              Get in touch
            </h4>
            <h2 className="text-3xl font-bold mb-6">
              Contact Us If You Have More Questions.
            </h2>
            <div className="flex gap-4 mb-8">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-black text-white rounded-md flex items-center hover:bg-[#7ad6b4] justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            {[
              {
                icon: MapPin,
                title: "Location",
                text: "168/170, Avenue 01, Mirpur DOHS, Bangladesh",
              },
              {
                icon: Phone,
                title: "Phone",
                text: "+880 566 1111 985\n+880 657 1111 576",
              },
              {
                icon: Mail,
                title: "Email",
                text: "info@example.com\ninfo@support.com",
              },
            ].map(({ icon: Icon, title, text }, index) => (
              <div key={index} className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center  hover:bg-[#7ad6b4]">
                  <Icon className="text-gray-700 " />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className=" whitespace-pre-line">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 " data-aos="fade-left">
            <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902049343415!2d90.38542057527737!3d23.750885978689853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858d96bc29b%3A0xa8e930d1060c6c1c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1711758943781!5m2!1sen!2sbd"
                className="w-full h-full border-red"
                allowFullScreen
                loading="lazy"
                title="Dhaka, Bangladesh Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-50">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-8">HAVE ANY QUESTIONS</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border  rounded-md p-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border rounded-md p-3"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border rounded-md p-3 w-full"
              />
              <textarea
                placeholder="Your message"
                className="border rounded-md p-3 w-full h-32"
              />
              <button className="bg-black text-white hover:bg-gray-900 rounded-4xl px-8 py-3">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center hidden md:block" data-aos="fade-left">
            <img
              src="https://creasoft-react.b-cdn.net/img/call-center.png"
              alt="Customer Support"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
