import React from "react";
import { useParams } from "react-router-dom";
import { teamMembers } from "../data/data";
const TeamDetails = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <div className="container py-140">
        <h2>Team Member Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{
          backgroundImage: "url('/assets/images/breadcrumb/bg/1.jpg')",
        }}>
        <div className="container">
          <div className="breadcrumb-content">
            <span className="breadcrumb-sub-title">Our People</span>
            <h1 className="breadcrumb-title mb-1">{member.name}</h1>
            <p className="breadcrumb-desc font-size-20">
              {member.role}
            </p>
          </div>
        </div>
      </div>

      <div
        className="banner-style-2 position-relative"
        style={{
          backgroundImage: "url('/assets/images/banner/bg/2-1.png')",
        }}>
        <div className="container-fluid p-0 overflow-hidden">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="banner-img">
                <img src={member.img} alt={member.name} />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="banner-with-sticker">
                <div className="banner-content text-white">
                  <span>{member.role}</span>
                  <h2 className="title mb-7">{member.name}</h2>
                  <p className="desc font-size-20 mb-8">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
