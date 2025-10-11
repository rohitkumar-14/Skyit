import React from "react";

const ConstructionImplementation = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{
          backgroundImage: "url('/assets/images/breadcrumb/bg/1.jpg')",
        }}
      >
        <div className="container">
          <div className="breadcrumb-content">
            <span className="breadcrumb-sub-title text-white">Our Services</span>
            <h1 className="breadcrumb-title mb-1">Construction Implementation</h1>
            <p className="breadcrumb-desc font-size-20 text-white">
              Laying the foundation of success through precise planning,
              systematic execution, and quality control.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="single-service-area py-140">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-9">
              <div className="single-service pe-lg-7">
                <div className="single-service-img mb-6">
                  <img
                    className="img-full rounded shadow"
                    src="../assets/images/single-service/1-1-836x500.jpg"
                    alt="Construction Implementation Service"
                  />
                </div>

                <div className="single-service-content pt-6 pb-8">
                  <h2 className="title font-size-50 mb-4 fw-bold">
                    Construction Implementation Services
                  </h2>
                  <h5 className="sub-title mb-5">
                    Skyit Construction manages the complete construction phase
                    with systematic execution and rigorous quality control.
                  </h5>
                  <p className="short-desc mb-0">
                    From planning and resource allocation to supervision and
                    project handover, we ensure every construction project is
                    executed with precision, efficiency, and uncompromising
                    quality standards.
                  </p>
                </div>

                {/* Service List */}
                <div className="service-list-area row mt-6">
                  <div className="col-lg-12">
                    <div className="service-list">
                      <h2 className="title mb-4">Implementation Services</h2>
                      <p className="mb-5">
                        Our construction implementation services cover every
                        aspect of on-site execution, ensuring projects are
                        delivered on time, within budget, and to the highest
                        quality standards.
                      </p>
                      <ul className="list-item style-2">
                        <li>
                          <span className="text-primary fw-bold">
                            01. Resource Planning
                          </span>{" "}
                          – Comprehensive planning of materials, labor, and
                          equipment requirements.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            02. Micro Scheduling & Orientation
                          </span>{" "}
                          – Detailed day-to-day scheduling and team
                          coordination.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            03. Construction Drawings
                          </span>{" "}
                          – Technical drawings for on-site construction
                          guidance.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            04. Material, Quality & Cost Control
                          </span>{" "}
                          – Rigorous monitoring of material specifications,
                          quality standards, and budget adherence.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            05. Project Implementation
                          </span>{" "}
                          – Hands-on execution management and coordination.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            06. Materials Delivery
                          </span>{" "}
                          – Timely procurement and delivery of construction
                          materials.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            07. Construction Activities
                          </span>{" "}
                          – Direct supervision and management of all construction
                          operations.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            08. Site Supervision
                          </span>{" "}
                          – Continuous on-site presence for quality assurance and
                          safety compliance.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            09. Quality Evaluation
                          </span>{" "}
                          – Regular assessment and testing of work quality
                          against specifications.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            10. Testing and Commissioning
                          </span>{" "}
                          – Comprehensive system testing and operational
                          validation.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            11. Project Handover
                          </span>{" "}
                          – Complete project delivery with documentation and
                          warranty provisions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3 pt-8 pt-lg-0">
              <div className="sidebar-area">
                <div className="sidebar-widget sidebar-categories text-white mb-6">
                  <ul>
                    <li>
                      <a href="/services/construction">Construction</a>
                    </li>
                    <li>
                      <a href="/services/project-management">
                        Project Management
                      </a>
                    </li>
                    <li>
                      <a href="/services/pre-design">Pre-Design Activity</a>
                    </li>
                    <li>
                      <a href="/services/construction-implementation">
                        Construction Implementation
                      </a>
                    </li>
                    <li>
                      <a href="/services/specialized-construction">
                        Specialized Construction
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget sidebar-download-brochure text-white mb-6">
                  <ul>
                    <li>
                      <a href="#">Brochure.PDF</a>
                    </li>
                    <li>
                      <a href="#">Brochure.DOC</a>
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
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionImplementation;
