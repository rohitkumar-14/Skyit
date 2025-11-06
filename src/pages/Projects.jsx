import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { projectSections } from "../data/data";
const Projects = () => {
  const { slug } = useParams(); 
  const [visible, setVisible] = useState(6);

  const category = projectSections.find((section) => section.slug === slug);
  const projects = category?.projects || [];
  console.log(category,projects)
  const loadMore = () => {
    setVisible((prev) => prev + 6);
  };

  if (!category) return <p>Category not found</p>;
  
  
  return (
    <div>
      <Breadcrumb
        title={category.category}
        subtitle="Our Projects"
        description="Explore our portfolio of completed and ongoing projects"
        backgroundImage={category.mainBreadcrumbImage}
        overlayColor="rgba(0,0,0,0.5)"
      />

      <div className="project-area py-140">
        <div className="container">
          <div className="row">
            {projects.slice(0, visible).map((project) => (
              <div key={project.id} className="col-lg-4 col-sm-6 pb-6">
                <div className="project-item shadow-lg">
                  <Link className="project-img" to={`/project-details/${slug}/${project.id}`}>
                    <img src={project?.projectMainImage || "/assets/images/project/medium-size/2-1-370x540.jpg"} alt={project.title} />
                  </Link>
                  <div className="project-content with-boxshadow ">
                    <span className="sub-title">
                      {project.location || project.type || "Projects"}
                    </span>
                    <h3 className="title mb-0">{project.title}</h3>
                    <p className="mb-0">{project.scope || project.features}</p>
                    <span>Status: {project.status || "Ongoing"}</span>
                  </div>
                </div>
              </div>
            ))}

            {visible < projects.length && (
              <div className="button-wrap button-position-center pt-10">
                <button
                  className="btn btn-custom btn-primary btn-secondary-hover"
                  onClick={loadMore}
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
