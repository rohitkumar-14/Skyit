import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServiceArea = () => {
  const services = [
    {
      title: "Construction",
      img: "/assets/images/service/medium-size/1-1-371x254.jpg",
      link: "/services/construction-implementation",
    },
    {
      title: "Project Management",
      img: "/assets/images/service/medium-size/1-2-371x254.jpg",
      link: "/services/project-management",
    },
    {
      title: "Pre-Design Activity",
      img: "/assets/images/service/medium-size/1-3-371x254.jpg",
      link: "/services/pre-design",
    },
    {
      title: "Construction Implementation",
      img: "/assets/images/service/medium-size/1-1-371x254.jpg",
      link: "/services/construction-implementation",
    },
    {
      title: "Specialized Construction",
      img: "/assets/images/service/medium-size/1-2-371x254.jpg",
      link: "/services/specialized-construction",
    },
  ];

  return (
    <div className="service-area py-140">
      <div className="container">
        <div className="section-title-area pb-70 d-flex justify-content-between align-items-center flex-wrap">
          <div className="section-title with-border pb-5 pb-lg-0">
            <span>SERVICES</span>
            <h2 className="mb-0 font-size-50">
              Provide Unique <br /> & Quality Service
            </h2>
          </div>
          <div
            className="section-banner text-white align-self-center p-7"
            style={{
              backgroundImage: "url('/assets/images/service/bg/1-1.png')",
            }}
          >
            <h2 className="info mb-0">
              Do you have projects? <span>+98745 214 785</span>
            </h2>
          </div>
          <p className="font-size-20 mt-2">
            With a focus on reliability and client satisfaction, our corporate
            Design & Build service delivers comprehensive solutions, strategic
            insights, and unparalleled support to help businesses thrive in
            today's dynamic marketplace.
          </p>
        </div>

        <div className="custom-arrow-holder position-relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },      
              768: { slidesPerView: 2 },     
              1024: { slidesPerView: 3 },    
            }}
            className="service-slider swiper-arrow with-bg_white"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="service-item">
                  <div className="service-img">
                    <a href={service.link}>
                      <img src={service.img} alt={service.title} />
                    </a>
                    <div className="add-action text-white">
                      <h2 className="title text-[25px] mb-0">
                        <a href={service.link}>{service.title}</a>
                      </h2>
                      <div className="icon">
                        <a className="text-lowercase" href={service.link}>
                          <i className="ion-ios-plus-empty"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-button-wrap d-none d-md-flex">
            <div className="custom-button-prev">
              <i className="ion-chevron-left"></i>
            </div>
            <div className="custom-button-next">
              <i className="ion-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
