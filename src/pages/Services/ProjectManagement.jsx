import React from "react";

const ProjectManagement = () => {
  return (
    <>
      <div
        class="breadcrumb-area breadcrumb-height"
        style={{
          backgroundImage: "url('/assets/images/breadcrumb/bg/1.jpg')",
        }}>
        <div class="container">
          <div class="breadcrumb-content">
            <span class="breadcrumb-sub-title">Our Services</span>
            <h1 class="breadcrumb-title mb-1">Project Management</h1>
            <p class="breadcrumb-desc font-size-20">
              Construction of itself, because it is pain some proper style
              design occur are pleasure
            </p>
          </div>
        </div>
      </div>
      <div class="single-service-area py-140">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="single-service pe-lg-7">
                <div class="single-service-img mb-6">
                  <img
                    class="img-full rounded shadow"
                    src="../assets/images/single-service/1-1-836x500.jpg"
                    alt="Project Management Service"
                  />
                </div>

                <div class="single-service-content pt-6 pb-8">
                  <h2 class="title font-size-50 mb-4 fw-bold">
                    Project Management Services
                  </h2>
                  <h5 class="sub-title mb-5">
                    Skyit Construction offers comprehensive project management
                    that encompasses the entire project lifecycle from
                    conception to completion.
                  </h5>
                  <p class="short-desc mb-0">
                    Our approach ensures seamless coordination, resource
                    optimization, strict schedule adherence, and continuous
                    quality assurance. With an experienced team and a
                    results-driven process, we deliver projects that exceed
                    client expectations.
                  </p>
                </div>

                <div class="service-list-area row mt-6">
                  <div class="col-lg-12">
                    <div class="service-list">
                      <h2 class="title mb-4">Key Components</h2>
                      <p class="mb-5">
                        Our project management services are designed to maximize
                        efficiency and ensure client satisfaction at every
                        stage.
                      </p>
                      <ul class="list-item style-2">
                        <li>
                          <span class="text-primary fw-bold">
                            01. Strategic Planning
                          </span>{" "}
                          – Complete project planning and coordination to ensure
                          seamless execution.
                        </li>
                        <li>
                          <span class="text-primary fw-bold">
                            02. Resource Management
                          </span>{" "}
                          – Optimal allocation and management of human
                          resources, materials, and equipment.
                        </li>
                        <li>
                          <span class="text-primary fw-bold">
                            03. Timeline Management
                          </span>{" "}
                          – Strict adherence to project schedules and milestone
                          achievements.
                        </li>
                        <li>
                          <span class="text-primary fw-bold">
                            04. Quality Assurance
                          </span>{" "}
                          – Continuous monitoring and quality control throughout
                          the project duration.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 pt-8 pt-lg-0">
              <div class="sidebar-area">
                <div class="sidebar-widget sidebar-categories text-white mb-6">
                  <ul>
                    <li>
                      <a href="#">Construction</a>
                    </li>
                    <li>
                      <a href="#">Architecture</a>
                    </li>
                    <li>
                      <a href="#">Renovation</a>
                    </li>
                    <li>
                      <a href="#">Concrete Supply</a>
                    </li>
                    <li>
                      <a href="#">Laminate Floor</a>
                    </li>
                    <li>
                      <a href="#">Project Planning</a>
                    </li>
                  </ul>
                </div>
                <div class="sidebar-widget sidebar-download-brochure text-white mb-6">
                  <ul>
                    <li>
                      <a href="#">Brochure.PDF</a>
                    </li>
                    <li>
                      <a href="#">Brochure.DOC</a>
                    </li>
                  </ul>
                </div>
                <div class="sidebar-widget sidebar-banner">
                  {" "}
                  <div class="banner-img">
                    {" "}
                    <img
                      src="../assets/images/sidebar/1-270x369.jpg"
                      alt="Sidebar Banner"
                    />{" "}
                  </div>{" "}
                  <div class="inner-content style-1">
                    {" "}
                    <h2 class="title text-primary mb-0">
                      GREAT <br /> OFFER
                    </h2>{" "}
                    <h3 class="offer mb-0">
                      UPTO <br /> 35%
                    </h3>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectManagement;
