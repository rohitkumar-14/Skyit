import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { teamMembers } from "../data/data";

export default function Team() {
  
  return (
    <div className="team-area py-140">
      <div className="container">
        <div className="section-title-area pb-70">
          <div className="section-title-wrap style-01">
            <div className="section-title with-border text-start text-lg-end">
              <span>Team</span>
              <h2 className="mb-0">Our Talented Team members</h2>
            </div>
            <div className="section-desc">
              <p className="font-size-20 mb-0">
                Construction of itself, because it is pain, but <br />
                because some proper style design occur in toil and pain pleasure
                we have expert team
              </p>
            </div>
          </div>
        </div>

        <div className="custom-arrow-holder position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="team-member-slider">
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="team-item">
                  <div className="team-img">
                    <img
                      className="img-full"
                      src={member.img}
                      alt={member.name}
                    />
                    <ul className="add-action text-white">
                      <li className="team-social-link-wrap">
                        <a href="#">
                          <i className="fa fa-share-alt"></i>
                        </a>
                        <ul className="social-link">
                          <li className="facebook">
                            <a href="#" data-tippy="Facebook">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#" data-tippy="Twitter">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="instagram">
                            <a href="#" data-tippy="Instagram">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mail-wrap">
                        <a className="text-lowercase" href={`/team/${member.id}`}>
                          <i className="fa-solid fa-info fa-xs"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title mb-1">{member.name}</h3>
                    <span className="occupation">{member.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
