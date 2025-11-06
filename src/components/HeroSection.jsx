import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HeroSection = () => {
  return (
    <>
    <div className="slider-area">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="main-slider with-bg_white">
          <SwiperSlide>
            <div
              className="slide-inner bg-height"
              style={{
                backgroundImage: "url('assets/images/slider/bg/leela.jpg')",
              }}>
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title mb-1 text-white">Hospitality</span>
                  <h2 className="title mb-3 text-white">
                   Leela Palace <br /> <span>Udaipur</span>
                  </h2>
                  {/* <p className="short-desc-2 font-size-20 mb-7 text-white">
                    Construction of itself, because it is pain, but because some
                    proper style design occur in which toil and pain pleasure.
                  </p> */}
                  <div className="button-wrap">
                    <Link
                      className="btn btn-custom btn-secondary btn-white-hover me-3"
                      to="/project">
                      Learn more
                    </Link>
                    <Link
                      className="btn btn-custom btn-primary btn-white-hover"
                      to="/contact">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slide-inner bg-height"
              style={{
                backgroundImage: "url('assets/images/slider/bg/Crown-plaza.jpg')",
              }}>
              <div className="container">
                <div className="slide-content text-white">
                  <span className="sub-title mb-1 text-white">Hospitality</span>
                  <h2 className="title mb-3 text-white">
                    Crowne Plaza <br /> <span>Noida</span>
                  </h2>
                  {/* <p className="short-desc-2 font-size-20 mb-7">
                    Construction of itself, because it is pain, but because some
                    proper style design occur in which toil and pain pleasure.
                  </p> */}
                  <div className="button-wrap">
                    <Link
                      className="btn btn-custom btn-secondary btn-white-hover me-3"
                      to="#">
                      Learn more
                    </Link>
                    <Link
                      className="btn btn-custom btn-primary btn-white-hover"
                      to="/contact">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="banner pt-5 mt-5">
        <div className="container">
          <div className="row g-lg-9">
            <div className="col-lg-4 col-md-6">
              <div
                className="banner-item text-white"
              
                 style={{
                  backgroundImage:
                    "url('assets/images/skyit/home/Card1@3x.png')",
                   backgroundSize: "contain"
                }}

                // style={{
                //   backgroundImage:
                //     "url('assets/images/banner/inner-bg/1-1.png')",
                // }}
                >
                <div className="banner-content">
                  <h3 className="title mb-3">80+ years of experience</h3>
                  <p className="short-desc mb-0">
                    Our work is collective knowledge of civil and design years and years of expereince combined in one.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-6 pt-md-0">
              <div
                className="banner-item text-white"
                 style={{
                  backgroundImage:
                    "url('assets/images/skyit/home/Card2@3x.png')",
                     backgroundSize: "contain"
                }}
                // style={{
                //   backgroundImage:
                //     "url('assets/images/banner/inner-bg/1-2.png')",
                // }}
                >
                <div className="banner-content">
                  <h3 className="title mb-3">Civil at its best</h3>
                  <p className="short-desc mb-0">
                    We give best quality of material, best design and best craftmanship, with handover as smooth as butter
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pt-6 pt-lg-0">
              <div
                className="banner-item text-white"
                // style={{
                //   backgroundColor:
                //     "#0B1E33",
                // }}
                style={{
                  backgroundImage:
                    "url('assets/images/skyit/home/Card3@3x.png')",
                     backgroundSize: "contain"
                }}
                >
                <div className="banner-content">
                  <h3 className="title mb-3">Dreams in budget</h3>
                  <p className="short-desc mb-0">
                    Pricing is the construction packages we provide page editors
                    now use Lorem as their default model text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection