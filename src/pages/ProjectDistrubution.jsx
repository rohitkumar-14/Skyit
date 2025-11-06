import React from "react";
import { Link } from 'react-router-dom'
const ProjectDistribution = () => {
  const projectCategories = [
    {
      heading: "Completed Projects (15+ Projects)",
      projects: [
        "The Leela Palace Udaipur",
        "Pragati One Logistic Park",
        "Avantee Mega Food Park",
        "Rooms Renovation Package (Chanakya Puri)",
        "Hilton Hotel New Delhi",
        "Sterling Holidays Resorts",
        "Crown Plaza Noida",
        "Amazon Del4",
        "Pragati Two Yakubpur",
        "DLF Magnolias",
        "Military Residential Colony",
        "Multiple Textile Parks",
        "Various Mega Food Parks",
        "Multiplex Projects",
        "Educational Institutes",
      ],
    },
    {
      heading: "Ongoing Projects (2 Projects)",
      projects: ["Bliss Hotel (Gorakhpur)", "Ananta Aspire (Zirakpur)"],
    },
    {
      heading: "Design Competitions (1 Project)",
      projects: ["Pipliyapala Lakefront Revival (Indore)"],
    },
    {
      heading: "Interior Projects Portfolio",
      projects: [
        "Godrej Sales Office (Hyderabad)",
        "Taj Hotels",
        "Radisson Hotels",
        "Marriott Hotels",
        "WNS Offices",
        "Ericsson",
        "American Express",
        "Fortis Hospitals",
      ],
    },
  ];

  const bannerImages = [
    "assets/images/banner/inner-bg/1-1.png",
    "assets/images/banner/inner-bg/1-2.png",
    "assets/images/banner/inner-bg/1-3.png",
  ];

  return (
    <div className="project-distribution pt-140">
      <div className="container">
        <h2 className="text-center mb-80">PROJECT DISTRIBUTION BY STATUS</h2>

        {projectCategories.map((category, cIndex) => (
          <div key={cIndex} className="mb-80">
            <h3 className="mb-6">{category.heading}</h3>
            <div className="row g-lg-9">
              {category.projects.map((project, pIndex) => (
                <div key={pIndex} className="col-lg-4 col-md-6 pt-6 pt-md-0">
                  <div
                    className="banner-item text-white"
                    style={{
                      backgroundImage: `url('${
                        bannerImages[pIndex % bannerImages.length]
                      }')`,
                    }}
                  >
                    <div className="banner-content">
                      <h3 className="title mb-3">{project}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDistribution;
