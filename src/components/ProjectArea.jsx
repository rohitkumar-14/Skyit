import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ProjectArea = () => {
  return (
    <div className="project-area">
      <div
        className="project-inner"
        style={{
          backgroundImage: "url('/assets/images/project/bg/1-1.png')",
          backgroundPosition: "right",
        }}>
        <div className="button-wrap text-end">
          <Link className="btn btn-project" to="/project">
            <span>View More</span>
          </Link>
        </div>

        <div className="container-fluid p-0">
          <div className="project-with-title">
            <div className="section-title-area text-white h-100">
              <div className="title-with-arrow">
                <div className="section-title-wrap style-02">
                  <div className="section-title">
                    {/* <span>PROJECTS</span> */}
                    <h2 className="mb-0">Our Projects</h2>
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
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="project-slider">
              <SwiperSlide>
                <div className="project-item">
                  <Link
                    className="project-img"
                    to="/project/hospitality-sector-projects">
                    <img
                      src="/assets/images/skyit/leela/LEELA.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">HOSPITALITY SECTOR</span>
                    <h3 className="title mb-0">
                      <Link to="/project">The Leela Palace Udaipur</Link>
                    </h3>
                    <span>Completed Project</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/residential-projects">
                    <img
                      src="/assets/images/skyit/ananta/ananta.jpeg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">RESIDENTIAL</span>
                    <h3 className="title mb-0">
                      <Link to="/project">Ananta Aspire</Link>
                    </h3>
                    <span>Ongoing Project</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/logistics-industrial-projects">
                    <img
                      src="/assets/images/project/medium-size/1-2-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">LOGISTICS & INDUSTRIAL</span>
                    <h3 className="title mb-0">
                      <Link to="/project">Pragati One Logistic Park</Link>
                    </h3>
                    <span>Completed Project</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/logistics-industrial-projects">
                    <img
                      src="/assets/images/project/medium-size/1-3-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">Industrial Development</span>
                    <h3 className="title mb-0">
                      <Link to="/project">
                        Avantee Mega Food <br />
                        Park Pvt Ltd
                      </Link>
                    </h3>
                    <span>Completed Project</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/corporate-commercial-projects">
                    <img
                      src="/assets/images/project/medium-size/1-4-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">CORPORATE & COMMERCIAL</span>
                    <h3 className="title mb-0">
                      <Link to="/project">Godrej Sales Office</Link>
                    </h3>
                    <span>Interior Project</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/healthcare-projects">
                    <img
                      src="/assets/images/project/medium-size/1-6-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">HEALTHCARE</span>
                    <h3 className="title mb-0">
                      <Link to="/project">Fortis Hospitals</Link>
                    </h3>
                    <span>Completed Project</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/entertainment-multiplex-projects">
                    <img
                      src="/assets/images/project/medium-size/1-6-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">ENTERTAINMENT & MULTIPLEX</span>
                    <h3 className="title mb-0">
                      <Link to="/project">Multiplex Projects</Link>
                    </h3>
                    <span>Completed Project</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/educational-sector-projects">
                    <img
                      src="/assets/images/project/medium-size/1-6-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">EDUCATIONAL SECTOR</span>
                    <h3 className="title mb-0">
                      <Link to="/project">Educational Institute</Link>
                    </h3>
                    <span>Completed Project</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="project-item">
                  <Link className="project-img" to="/project/urban-development-smart-city-projects">
                    <img
                      src="/assets/images/project/medium-size/1-6-405x474.jpg"
                      alt="Project Image"
                    />
                  </Link>
                  <div className="project-content">
                    <span className="sub-title">
                      URBAN DEVELOPMENT & SMART CITY
                    </span>
                    <h3 className="title mb-0">
                      <Link to="/project">
                        Pipliyapala Lakefront Revival Project
                      </Link>
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
  );
};

export default ProjectArea;
