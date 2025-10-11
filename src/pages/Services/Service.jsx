import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Service = () => {
  return (
    <>
      <div class="breadcrumb-area breadcrumb-height" style={{
      backgroundImage: "url('/assets/images/breadcrumb/bg/1.jpg')",
    }}>
            <div class="container">
                <div class="breadcrumb-content">
                    <span class="breadcrumb-sub-title">What we do</span>
                    <h1 class="breadcrumb-title mb-1">Our Services</h1>
                    <p class="breadcrumb-desc font-size-20">Construction of itself, because it is pain some proper style design occur are pleasure</p>
                </div>
            </div>
        </div>
          <div class="about-area pt-140">
            <div class="container">
                <div class="row g-0">
                    <div class="col-lg-6">
                        <div class="about-img-wrap style-2">
                            <div class="about-pattern">
                                <img src="assets/images/about/pattern.png" alt="Pattern"/>
                            </div>
                            <div class="about-img pt-9 mb-0">
                                <img class="img-full" src="assets/images/about/2-1-303x457.jpg" alt="About Banner"/>
                            </div>
                            <div class="group-img ps-5 pt-9">
                                <div class="single-img pb-5">
                                    <img class="img-full" src="assets/images/about/2-2-204x211.jpg" alt="About Banner"/>
                                </div>
                                <div class="single-img">
                                    <img class="img-full" src="assets/images/about/2-3-204x211.jpg" alt="About Banner"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 align-self-center">
                        <div class="about-content style-2">
                            <h2 class="title mb-5">Provide best Services for you</h2>
                            <h3 class="sub-title text-primary mb-4">Provide the best Constructin services for our client with their satisfaction</h3>
                            <p class="short-desc mb-7">Construction of itself, because it is pain, but because some are proper style design occur in toil and pain pleasure we have a expert team some of the main features..
                            </p>
                            <ul class="list-item style-2">
                                <li class="sub-list-holder pb-2">
                                    <ul class="sub-list-item">
                                        <li>
                                            <div class="list-icon">
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="list-text">
                                                <span>Expert Team</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-icon">
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="list-text">
                                                <span>Quality Materials</span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li class="sub-list-holder">
                                    <ul class="sub-list-item">
                                        <li>
                                            <div class="list-icon">
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="list-text">
                                                <span>Low Cost</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-icon">
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="list-text">
                                                <span>All time Support</span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                      With a focus on reliability and client satisfaction, our corporate Design & Build service delivers comprehensive solutions, strategic insights, and unparalleled support to help businesses thrive in today's dynamic marketplace.
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
                    slidesPerView={3}
                    loop={true}
                    className="service-slider swiper-arrow with-bg_white"
                  >
                    <SwiperSlide>
                      <div className="service-item">
                        <div className="service-img">
                          <a href="service">
                            <img
                              src="/assets/images/service/medium-size/1-1-371x254.jpg"
                              alt="Service 1"
                            />
                          </a>
                          <div className="add-action text-white">
                            <h2 className="title mb-0">
                              <a href="single-service">Construction</a>
                            </h2>
                            <div className="icon">
                              <a
                                className="text-lowercase"
                                href="mailto://info@example.com"
                              >
                                <i className="ion-ios-plus-empty"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
        
                    {/* Slide 2 */}
                    <SwiperSlide>
                      <div className="service-item">
                        <div className="service-img">
                          <a href="service">
                            <img
                              src="/assets/images/service/medium-size/1-2-371x254.jpg"
                              alt="Service 2"
                            />
                          </a>
                          <div className="add-action text-white">
                            <h2 className="title mb-0">
                              <a href="single-service">Project Management</a>
                            </h2>
                            <div className="icon">
                              <a
                                className="text-lowercase"
                                href="mailto://info@example.com"
                              >
                                <i className="ion-ios-plus-empty"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
        
                    {/* Slide 3 */}
                    <SwiperSlide>
                      <div className="service-item">
                        <div className="service-img">
                          <a href="service">
                            <img
                              src="/assets/images/service/medium-size/1-3-371x254.jpg"
                              alt="Service 3"
                            />
                          </a>
                          <div className="add-action text-white">
                            <h2 className="title mb-0">
                              <a href="single-service">Pre-Design Activity</a>
                            </h2>
                            <div className="icon">
                              <a
                                className="text-lowercase"
                                href="mailto://info@example.com"
                              >
                                <i className="ion-ios-plus-empty"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
        
                  {/* Custom Navigation Buttons */}
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
        <div class="banner-style-2 position-relative " style={{
      backgroundImage: "url('/assets/images/banner/bg/2-1.png')",
    }}>
            <div class="container-fluid p-0 overflow-hidden">
                <div class="row g-0">
                    <div class="col-lg-6">
                        <div class="banner-img">
                            <img src="assets/images/banner/medium-size/2-1-939x666.jpg" alt="Banner"/>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="banner-with-sticker">
                            <div class="banner-content text-white">
                                <span>EXPLORE</span>
                                <h2 class="title mb-7">Full Project <br/> management</h2>
                                <p class="desc font-size-20 mb-8">Construction of itself, because it is pain, but because some proper style design occur in toil and pain pleasure we have expert team some master plan fo the </p>
                                <div class="button-wrap">
                                    <a class="btn btn-custom btn-primary btn-white-hover" href="project.html">Learn more</a>
                                </div>
                            </div>
                            <div class="banner-sticker">
                                <img src="assets/images/banner/sticker/1.png" alt="Banner Sticker"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="brand-area pt-140 pb-6" style={{
      backgroundImage: "url('assets/images/brand/bg/1-1.png')",
    }}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="swiper-container brand-slider">
                            <div class="swiper-wrapper align-items-center">
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/1.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/2.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/3.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/4.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/5.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/6.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/7.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/8.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/9.png" alt="Brand Image"/>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a class="brand-item" href="#">
                                        <img src="assets/images/brand/10.png" alt="Brand Image"/>
                                    </a>
                                </div>
                            </div>
                            <div class="brand-pagination d-md-none"></div>

                            <div class="brand-button-next"></div>
                            <div class="brand-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner banner-style-3 pt-140">
            <div class="container">
                <div class="section-title-area style-01 pb-70">
                    <div class="section-title-wrap">
                        <div class="section-title with-border different-width-2 text-lg-end">
                            <span>WORK PROCESS</span>
                            <h2 class="mb-0">The way of our Working</h2>
                        </div>
                        <div class="section-desc">
                            <p class="font-size-20 mb-0">Construction of itself, because it is pain, but because some proper style design occur in toil and pain pleasure we have expert team</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="banner-item text-white banner-secondary-bg">
                            <div class="banner-content" data-count="01">
                                <h3 class="title mb-3">Meeting with <br/> our Clients</h3>
                                <p class="short-desc mb-0">Meeting with our clients for all requirements for this project we start now</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 pt-6 pt-sm-0">
                        <div class="banner-item text-white banner-secondary-bg">
                            <div class="banner-content" data-count="02">
                                <h3 class="title mb-3">Project <br/> Planning</h3>
                                <p class="short-desc mb-0">Meeting with our clients for all requirements for this project we start now</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 pt-6 pt-lg-0">
                        <div class="banner-item text-white banner-secondary-bg">
                            <div class="banner-content" data-count="03">
                                <h3 class="title mb-3">Construction <br/> & Finalize</h3>
                                <p class="short-desc mb-0">Meeting with our clients for all requirements for this project we start now</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 pt-6 pt-xl-0">
                        <div class="banner-item text-white banner-primary-bg">
                            <div class="banner-content different-data-color" data-count="04">
                                <h3 class="title mb-3">Hand over <br/> Project</h3>
                                <p class="short-desc mb-0">Meeting with our clients for all requirements for this project we start now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="testimonial-area py-140">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-lg-6 pb-6 pb-lg-0">
                        <div class="section-title-wrap-2">
                            <div class="section-title border-0">
                                <span>TESTIMONIALS</span>
                                <h2 class="mb-7">Reviews form happy client</h2>
                            </div>
                            <div class="section-desc pb-4">
                                <p class="font-size-20 mb-0">Construction of itself, because it is pain some <br/> some proper style design occur in toil and pain we have expert team some master</p>
                            </div>
                            <div class="button-wrap pt-2 pb-5 pb-md-0">
                                <a class="btn btn-link with-underline text-secondary font-size-25 p-0" href="#">view more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6">
                        <div class="swiper-container testimonial-slider">
                            <div class="swiper-wrapper testimonial-flex-direction">
                                <div class="swiper-slide">
                                    <div class="testimonial-item">
                                        <div class="testimonial-content">
                                            <p class="short-desc mb-3"><i class="quotation direction-left">“</i>Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building
                                                a beauiful construction design...<i class="quotation direction-right">”</i></p>
                                            <div class="user-info">
                                                <div class="user-img">
                                                    <img src="assets/images/testimonial/avatar/1-1-46x46.png" alt="Avatar"/>
                                                </div>
                                                <div class="user-content">
                                                    <h5 class="user-name text-primary mb-0">Christoper Luis</h5>
                                                    <span class="user-occupation">CEO, Octafact Group</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="testimonial-item">
                                        <div class="testimonial-content">
                                            <p class="short-desc mb-3"><i class="quotation direction-left">“</i>Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building
                                                a beauiful construction design...<i class="quotation direction-right">”</i></p>
                                            <div class="user-info">
                                                <div class="user-img">
                                                    <img src="assets/images/testimonial/avatar/1-2-46x46.png" alt="Avatar"/>
                                                </div>
                                                <div class="user-content">
                                                    <h5 class="user-name text-primary mb-0">Rehana Williams</h5>
                                                    <span class="user-occupation">CEO, Xerox LTd.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-pagination d-md-none"></div>

                            <div class="testimonial-button-next"></div>
                            <div class="testimonial-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service