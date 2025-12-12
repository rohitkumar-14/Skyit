import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom'
export default function Testimonials() {
  const testimonials = [
    {
      name: "Christoper Luis",
      role: "CEO, Octafact Group",
      avatar: "/assets/images/testimonial/avatar/1-1-46x46.png",
      message:
        "Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beautiful construction design...",
    },
    {
      name: "Rehana Williams",
      role: "CEO, Xerox LTd.",
      avatar: "/assets/images/testimonial/avatar/1-2-46x46.png",
      message:
        "Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beautiful construction design...",
    },
    {
      name: "Christoper Luis",
      role: "CEO, Octafact Group",
      avatar: "/assets/images/testimonial/avatar/1-1-46x46.png",
      message:
        "Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beautiful construction design...",
    },
    {
      name: "Rehana Williams",
      role: "CEO, Xerox LTd.",
      avatar: "/assets/images/testimonial/avatar/1-2-46x46.png",
      message:
        "Publishing packages and web page now use Lorem Ipsum as their mel text, and a search for lorem more than one articel a is very important which can be help us for building a beautiful construction design...",
    },
  ];

  return (
    <div className="testimonial-area mb-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 pb-6 pb-lg-0">
            <div className="section-title-wrap-2">
              <div className="section-title border-0">
                <span>TESTIMONIALS</span>
                <h2 className="mb-7">Hear from our clients</h2>
              </div>
              <div className="section-desc pb-4">
                <p className="font-size-20 mb-0">
                  Our design execution and work ethics speaks for itself, and our clients are here to let you know
                </p>
              </div>
              
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ el: ".testimonial-pagination", clickable: true }}
              loop={true}
              autoplay={{ delay: 5000 }}
              spaceBetween={30}
              className="testimonial-slider"
              slidesPerView={2}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}>
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="testimonial-content">
                      <p className="short-desc mb-3">
                        <i className="quotation direction-left">“</i>
                        {item.message}
                        <i className="quotation direction-right">”</i>
                      </p>
                      <div className="user-info">
                        {/* <div className="user-img">
                          <img src={item.avatar} alt={item.name} />
                        </div> */}
                        <div className="user-content">
                          <h5 className="user-name text-primary mb-0">
                            {item.name}
                          </h5>
                          <span className="user-occupation">{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
