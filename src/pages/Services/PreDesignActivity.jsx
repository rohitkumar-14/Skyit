import React from "react";
import { Link } from 'react-router-dom'
const PreDesignActivity = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="breadcrumb-area breadcrumb-height position-relative"
        style={{
          backgroundImage: "url('/assets/images/skyit/services/predeisgn.png')", backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      ><div
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
            <span className="breadcrumb-sub-title ">Our Services</span>
            <h1 className="breadcrumb-title mb-1">Pre-Design Activity</h1>
            <p className="breadcrumb-desc font-size-20">
              Laying the foundation of success through precise planning,
              analysis, and documentation before construction begins.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="single-service-area py-140">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-12">
              <div className="single-service pe-lg-7">
                {/* Service Image */}
                <div className="single-service-img mb-6">
                  <img
                    className="img-full rounded shadow"
                    src="../assets/images/single-service/1-1-836x500.jpg"
                    alt="Pre-Design Activity Services"
                  />
                </div>

                {/* Service Intro */}
                <div className="single-service-content pt-6 pb-8">
                  <h2 className="title font-size-50 mb-4 fw-bold">
                    Pre-Design Activity Services
                  </h2>
                  <h5 className="sub-title mb-5">
                    The company provides extensive pre-design services that form
                    the foundation of successful project execution.
                  </h5>
                  <p className="short-desc mb-0">
                    Our pre-design services ensure that every project begins
                    with a solid framework of technical assessments, cost
                    accuracy, statutory compliance, and expert recommendations
                    — enabling seamless execution during construction.
                  </p>
                </div>

                {/* Detailed Services */}
                <div className="service-list-area row mt-6">
                  <div className="col-lg-12">
                    <div className="service-list">
                      <h2 className="title mb-4">Detailed Services Include</h2>
                      <p className="mb-5">
                        From technical evaluations to documentation and
                        supplier negotiations, our pre-design expertise covers
                        every crucial aspect before execution.
                      </p>
                      <ul className="list-item style-2">
                        <li>
                          <span className="text-primary fw-bold">
                            01. Geo-technical Analysis
                          </span>{" "}
                          – Comprehensive soil and site condition assessment to
                          determine foundation requirements and structural
                          considerations.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            02. Scheduling
                          </span>{" "}
                          – Detailed project timeline development with phase-wise
                          execution plans.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            03. Effective Cost Estimation
                          </span>{" "}
                          – Accurate budget forecasting and cost analysis for
                          informed decision-making.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            04. File Notes with Single Line Diagrams
                          </span>{" "}
                          – Technical documentation and schematic representations
                          for regulatory approvals.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            05. Professional Recommendations
                          </span>{" "}
                          – Expert advice based on site conditions, regulations,
                          and best practices.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            06. Design & Working Drawings
                          </span>{" "}
                          – Complete architectural and engineering drawings for
                          construction execution.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            07. Site Planning
                          </span>{" "}
                          – Comprehensive site layout and utilization planning
                          for optimal functionality.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            08. Machinery Layout
                          </span>{" "}
                          – Strategic placement and configuration of equipment
                          and machinery for operational efficiency.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            09. Drawings for Statutory Approval
                          </span>{" "}
                          – Preparation of all necessary documentation for
                          government and regulatory approvals.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            10. Utilities Data Collection
                          </span>{" "}
                          – Assessment and planning for water, electricity, gas,
                          and other utility connections.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            11. Basic Data Fixation
                          </span>{" "}
                          – Establishment of fundamental project parameters and
                          specifications.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            12. Identification of Machinery Suppliers
                          </span>{" "}
                          – Sourcing and evaluation of equipment and machinery
                          vendors.
                        </li>
                        <li>
                          <span className="text-primary fw-bold">
                            13. Supplier Negotiation Assistance
                          </span>{" "}
                          – Professional support in vendor negotiations and
                          contract finalization.
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

export default PreDesignActivity;
