import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import BlogSlider from "../components/BlogSlider";
import NewsLetter from "../components/NewsLetter";
import Counter from "../components/Counter";
import HeroSection from "../components/HeroSection";
import AboutArea from "../components/AboutArea";
import BrandArea from "../components/BrandArea";
import ProjectArea from "../components/ProjectArea";
import ServiceArea from "../components/ServiceArea";
import ClientsMap from "./ClientsMap";
const Home = () => {
  return (
    <div className="main-wrapper">
      <HeroSection />

      <AboutArea />

      <ProjectArea />

      <BrandArea />

      <ServiceArea />

      {/* <div className="banner-style-2 position-relative"
        style={{ backgroundImage: "url('assets/images/banner/bg/2-1.png')" }}>
        <div className="container-fluid p-0 overflow-hidden">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="banner-img">
                <img
                  src="assets/images/banner/medium-size/2-1-939x666.jpg"
                  alt="Banner"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-with-sticker">
                <div className="banner-content text-white">
                  <span>PREVIOUS PROJECTS</span>
                  <h2 className="title mb-7">
                    Project Name: <br /> THE LEELA PALACE UDAIPUR
                  </h2>
                  <p className="desc font-size-20 mb-8">
                    <strong>Located:</strong> UDAIPUR, RAJASTHAN <br />
                    <strong>Project Brief —</strong> Landscape development work
                    was executed at a property located at Lake Pichola in
                    Udaipur. This included the creation of three pools, five
                    ultra-luxury villas, and comprehensive beautification
                    efforts, all guided by the Leela Palace team.
                  </p>
                  <div className="button-wrap">
                    <a
                      className="btn btn-custom btn-primary btn-white-hover"
                      href="project.html">
                      Learn more
                    </a>
                  </div>
                </div>
                <div className="banner-sticker">
                  <img
                    src="assets/images/banner/sticker/1.png"
                    alt="Banner Sticker"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Counter />
      {/* <ClientsMap /> */}
      <Team />
      <Testimonials />
      {/* <BlogSlider /> */}
    </div>
  );
};

export default Home;
