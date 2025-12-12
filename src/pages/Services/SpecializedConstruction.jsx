import React from "react";
import { Link } from 'react-router-dom'
const SpecializedConstructionServices = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-area breadcrumb-height position-relative"
        style={{
          backgroundImage: "url('/assets/images/skyit/services/constructionspeiclaized.png')", backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <div
    className="overlay"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="breadcrumb-content text-white py-5">
            <span className="breadcrumb-sub-title">Our Services</span>
            <h1 className="breadcrumb-title mb-1">Specialized Construction</h1>
            <p className="breadcrumb-desc font-size-20">
              Delivering expertise in civil, interior, MEP, and landscaping
              solutions for diverse needs.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="single-service-area py-140">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-12">
              <div className="single-service pe-lg-7">
                <div className="single-service-img mb-6">
                  <img
                    className="img-full rounded shadow"
                    src="../assets/images/single-service/1-1-836x500.jpg"
                    alt="Specialized Construction Service"
                  />
                </div>

                <div className="single-service-content pt-6 pb-8">
                  <h2 className="title font-size-50 mb-4 fw-bold">
                    Specialized Construction Services
                  </h2>
                  <h5 className="sub-title mb-5">
                    Skyit Construction provides specialized services that cover
                    civil, interior, MEP, and landscaping, tailored to meet
                    diverse project requirements with excellence.
                  </h5>
                  <p className="short-desc mb-0">
                    Our specialized solutions integrate design, execution, and
                    quality monitoring to deliver sustainable and modern
                    construction outcomes.
                  </p>
                </div>

                {/* Service List */}
                <div className="service-list-area row mt-6">
                  <div className="col-lg-12">
                    <div className="service-list">
                      <h2 className="title mb-4">Our Expertise</h2>
                      <p className="mb-5">
                        Specialized construction services designed for
                        efficiency, innovation, and long-lasting impact.
                      </p>

                      {/* Civil Construction */}
                      <h4 className="mt-4 mb-3">Civil Construction</h4>
                      <ul className="list-item">
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Complete infrastructure development including
                              foundations, structural work, and site
                              development.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Industrial facility construction for manufacturing
                              and processing units.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Residential and commercial building construction
                              with comprehensive finishing.
                            </span>
                          </div>
                        </li>
                      </ul>

                      {/* Interior Design */}
                      <h4 className="mt-4 mb-3">Interior Design & Fit-out</h4>
                      <ul className="list-item">
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Complete interior design solutions for commercial
                              and hospitality projects.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Ultra-modern office spaces with advanced
                              technology integration.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Luxury hotel and resort interior development.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          {" "}
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Residential interior design and execution.
                            </span>{" "}
                          </div>
                        </li>
                      </ul>

                      {/* MEP */}
                      <h4 className="mt-4 mb-3">
                        MEP (Mechanical, Electrical, Plumbing) Services
                      </h4>
                      <ul className="list-item">
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Internal and external electrical distribution
                              systems.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Switch yards and transmission line installation.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Advanced lighting systems and fire alarm
                              installations.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Lighting management and energy harvesting for
                              green buildings.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Complete plumbing and HVAC system installation.
                            </span>{" "}
                          </div>
                        </li>
                      </ul>

                      {/* Landscape */}
                      <h4 className="mt-4 mb-3">Landscape Development</h4>
                      <ul className="list-item">
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Garden and outdoor space design and development.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Pool construction and water feature installation.
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="list-icon">
                            <i class="fa fa-check"></i>
                          </div>
                          <div class="list-text">
                            <span>
                              Comprehensive beautification and landscaping
                              services.
                            </span>{" "}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            {/* <div className="col-lg-3 pt-8 pt-lg-0">
              <div className="sidebar-area">
                <div className="sidebar-widget sidebar-categories text-white mb-6">
                  <ul>
                    <li>
                      <Link to="#">Construction</Link>
                    </li>
                    <li>
                      <Link to="#">Architecture</Link>
                    </li>
                    <li>
                      <Link to="#">Renovation</Link>
                    </li>
                    <li>
                      <Link to="#">Concrete Supply</Link>
                    </li>
                    <li>
                      <Link to="#">Laminate Floor</Link>
                    </li>
                    <li>
                      <Link to="#">Project Planning</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-download-brochure text-white mb-6">
                  <ul>
                    <li>
                      <Link to="#">Brochure.PDF</Link>
                    </li>
                    <li>
                      <Link to="#">Brochure.DOC</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-banner">
                  <div className="banner-img">
                    <img
                      src="../assets/images/sidebar/1-270x369.jpg"
                      alt="Sidebar Banner"
                    />
                  </div>
                  <div className="inner-content style-1">
                    <h2 className="title text-primary mb-0">
                      GREAT <br /> OFFER
                    </h2>
                    <h3 className="offer mb-0">
                      UPTO <br /> 35%
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedConstructionServices;
