import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ProjectArea = () => {
  return (
    <div className="project-area">
  <div
    className="project-inner"
    style={{
      backgroundImage: "url('/assets/images/project/bg/1-1.png')",backgroundPosition:"right"
    }}
  >
    <div className="button-wrap text-end">
      <a className="btn btn-project" href="/project">
        <span>View More</span>
      </a>
    </div>

    <div className="container-fluid p-0">
      <div className="project-with-title">
        <div className="section-title-area text-white h-100">
          <div className="title-with-arrow">
            <div className="section-title-wrap style-02">
              <div className="section-title">
                {/* <span>PROJECTS</span> */}
                <h2 className="mb-0">
                  Our Projects
                </h2>
              </div>
            </div>
            <div className="project-button-wrap">
              <div className="project-button-prev cursor-pointer">
                <i className="ion-chevron-left"></i>
              </div>
              <div className="project-button-next cursor-pointer">
                <i className="ion-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          className="project-slider"
        >
          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-1-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">HOSPITALITY SECTOR</span>
                <h3 className="title mb-0">
                  <a href="/project">The Leela Palace Udaipur</a>
                </h3>
                <span>Completed Project</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-2-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">LOGISTICS & INDUSTRIAL</span>
                <h3 className="title mb-0">
                  <a href="/project">Pragati One Logistic Park</a>
                </h3>
                <span>Completed Project</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-3-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">Industrial Development</span>
                <h3 className="title mb-0">
                  <a href="/project">Avantee Mega Food <br />Park Pvt Ltd</a>
                </h3>
                <span>Completed Project</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-4-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">CORPORATE & COMMERCIAL</span>
                <h3 className="title mb-0">
                  <a href="/project">Godrej Sales Office</a>
                </h3>
                <span>Interior Project</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-5-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">RESIDENTIAL</span>
                <h3 className="title mb-0">
                  <a href="/project">Ananta Aspire</a>
                </h3>
                <span>Ongoing Project</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-6-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">HEALTHCARE</span>
                <h3 className="title mb-0">
                  <a href="/project">Fortis Hospitals</a>
                </h3>
                <span>Completed Project</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-6-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">ENTERTAINMENT & MULTIPLEX</span>
                <h3 className="title mb-0">
                  <a href="/project">Multiplex Projects</a>
                </h3>
                <span>Completed Project</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-6-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">EDUCATIONAL SECTOR</span>
                <h3 className="title mb-0">
                  <a href="/project">Educational Institute</a>
                </h3>
                <span>Completed Project</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-item">
              <a className="project-img" href="/project">
                <img
                  src="/assets/images/project/medium-size/1-6-405x474.jpg"
                  alt="Project Image"
                />
              </a>
              <div className="project-content">
                <span className="sub-title">URBAN DEVELOPMENT & SMART CITY</span>
                <h3 className="title mb-0">
                  <a href="/project">Pipliyapala Lakefront Revival Project</a>
                </h3>
                <span>Design Competition Project</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</div>
  )
}

export default ProjectArea