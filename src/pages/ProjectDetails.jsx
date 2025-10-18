import React from "react";
import { useParams } from "react-router-dom";
import { projectSections } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Breadcrumb from "../components/Breadcrumb";

const ProjectDetails = () => {
  const { slug, id } = useParams();

  const projectId = parseInt(id);
  const allProjects = projectSections.flatMap((section) => section.projects);

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;
  return (
    <>
      <Breadcrumb
        title={project?.title || "Project Title"}
        subtitle={project?.subtitle || "Single Service"}
        description={
          project?.description ||
          "Construction of itself, because it is pain some proper style design occur are pleasure"
        }
        backgroundImage={project?.breadcrumbImage}
      />
      <div className="project-detail-area py-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 pe-lg-9">
              <div className="project-detail-banner">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    nextEl: ".custom-button-next",
                    prevEl: ".custom-button-prev",
                  }}
                  pagination={{ el: ".project-pagination", clickable: true }}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="project-slider">
                  {project?.images?.map((img, index) => (
                    <SwiperSlide key={index}>
                      <div className="single-img">
                        <img
                          className="img-full"
                          src={img}
                          alt={`Project Image ${index + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="custom-button-wrap d-flex">
                  <div className="custom-button-prev">
                    <i className="ion-chevron-left"></i>
                  </div>
                  <div className="custom-button-next">
                    <i className="ion-chevron-right"></i>
                  </div>
                </div>
              </div>

              <div className="single-content pt-10 pb-5">
                <h2 className="title font-size-60 mb-3">{project?.title}</h2>
                <h3 className="sub-title text-primary mb-5">
                  {project?.subtitleDescription ||
                    "Provide the best Construction services with expert team, modern equipments, and quality materials"}
                </h3>
                <h3 className="additional-title mb-4">Project Summary</h3>
                <p className="short-desc mb-0">{project?.summary}</p>
              </div>

              <div className="project-overview row">
                <div className="col-lg-12">
                  <h2 className="title">Project Overview & Challenge</h2>
                  <p className="desc mb-9">{project?.overview}</p>
                </div>
                {project?.overviewList?.map((listColumn, colIndex) => (
                  <div key={colIndex} className="col-sm-6">
                    <ul className="project-overview-list">
                      {listColumn.map((item, i) => (
                        <li key={i}>
                          <div className="list-icon">
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="list-text">
                            <span>{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 pt-8 pt-lg-0">
              <div className="sidebar-area">
                <div className="sidebar-widget sidebar-categories text-white mb-6">
                  <h2 className="title mb-0">Project Info</h2>
                  <ul>
                    {project?.info &&
                      Object.entries(project.info).map(([key, value], i) => (
                        <li key={i}>
                          {key}: <span>{value}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="sidebar-widget sidebar-download-brochure text-white mb-6">
                  <ul>
                    {project?.brochures?.map((file, i) => (
                      <li key={i}>
                        <a href={file.url}>{file.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {project?.sidebarBanner && (
                  <div className="sidebar-widget sidebar-banner">
                    <div className="banner-img">
                      <img src={project.sidebarBanner} alt="Sidebar Banner" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
