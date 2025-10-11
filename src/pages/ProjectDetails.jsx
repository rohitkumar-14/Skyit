import React from "react";
import { useParams } from "react-router-dom";
import { projectSections } from "../data/data";
const ProjectDetails = () => {
     const { slug, id } = useParams();
  console.log("slug:", slug); 
  console.log("id:", id);     

  const projectId = parseInt(id);
  const allProjects = projectSections.flatMap((section) => section.projects);

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) return <p>Project not found</p>;
  console.log(project)
  return (
    <>
       <div
        className="breadcrumb-area breadcrumb-height position-relative"
        style={{
          backgroundImage: `url(${project?.breadcrumbImage || "assets/images/breadcrumb/bg/1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay position-absolute"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="breadcrumb-content text-white">
            <span className="breadcrumb-sub-title">
              {project?.subtitle || "Single Service"}
            </span>
            <h1 className="breadcrumb-title mb-1">
              {project?.title || "Project Title"}
            </h1>
            <p className="breadcrumb-desc font-size-20">
              {project?.description ||
                "Construction of itself, because it is pain some proper style design occur are pleasure"}
            </p>
          </div>
        </div>
      </div>

      <div className="project-detail-area py-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 pe-lg-9">
              <div className="project-detail-banner row g-0">
                <div className="col-md-5 pb-4 pb-md-0">
                  <div className="single-img">
                    <img
                      className="img-full"
                      src={project?.images?.[0] || "assets/images/project-detail/1-1-370x500.jpg"}
                      alt={project?.title}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="group-img row g-0 mb-4">
                    {project?.images?.slice(1, 3).map((img, i) => (
                      <div key={i} className="col-6">
                        <div className="single-img">
                          <img className="img-full" src={img} alt={`Project ${i}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="group-img row g-0">
                    {project?.images?.slice(3, 5).map((img, i) => (
                      <div key={i} className={i === 0 ? "col-7" : "col-5"}>
                        <div className="single-img">
                          <img className="img-full" src={img} alt={`Project ${i + 3}`} />
                        </div>
                      </div>
                    ))}
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

              <div className="single-featured row pb-7">
                <div className="col-lg-4">
                  <div className="featured-content pb-8 pb-lg-0">
                    {project?.features?.map((f, i) => (
                      <p key={i} className="featured-desc mb-4">
                        {f}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="featured-group-img d-flex pb-4">
                    {project?.featuredImages?.slice(0, 2).map((img, i) => (
                      <div key={i} className={`single-img ${i === 0 ? "pe-4" : ""}`}>
                        <img src={img} alt={`Feature ${i}`} />
                      </div>
                    ))}
                  </div>
                  <div className="featured-group-img d-flex">
                    {project?.featuredImages?.slice(2, 4).map((img, i) => (
                      <div key={i} className={`single-img ${i === 0 ? "pe-4" : ""}`}>
                        <img src={img} alt={`Feature ${i + 2}`} />
                      </div>
                    ))}
                  </div>
                </div>
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
